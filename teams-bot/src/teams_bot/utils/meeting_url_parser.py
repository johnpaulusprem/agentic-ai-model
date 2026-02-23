"""Parse a Teams meeting join URL into its component IDs."""

import re
from urllib.parse import unquote

from pydantic import BaseModel


class MeetingUrlParts(BaseModel):
    """Parsed components of a Teams meeting URL."""

    thread_id: str
    organizer_id: str
    tenant_id: str
    message_id: str


# Pattern for the Teams meeting join URL
# Example: https://teams.microsoft.com/l/meetup-join/19%3ameeting_xxx%40thread.v2/0?context=%7b%22Tid%22%3a%22...%22%2c%22Oid%22%3a%22...%22%7d
_MEETING_URL_PATTERN = re.compile(
    r"https://teams\.microsoft\.com/l/meetup-join/"
    r"(?P<thread_id>[^/]+)"
    r"/(?P<message_id>[^?]+)"
    r"\?context=(?P<context>.+)",
    re.IGNORECASE,
)

_CONTEXT_TID_PATTERN = re.compile(r'"Tid"\s*:\s*"([^"]+)"')
_CONTEXT_OID_PATTERN = re.compile(r'"Oid"\s*:\s*"([^"]+)"')


def parse_meeting_url(url: str) -> MeetingUrlParts:
    """Parse a Teams meeting URL into thread ID, organizer ID, tenant ID, and message ID.

    Raises:
        ValueError: If the URL does not match the expected Teams meeting format.
    """
    match = _MEETING_URL_PATTERN.match(url)
    if not match:
        raise ValueError(f"Not a valid Teams meeting URL: {url}")

    thread_id = unquote(match.group("thread_id"))
    message_id = match.group("message_id")
    context_raw = unquote(match.group("context"))

    tid_match = _CONTEXT_TID_PATTERN.search(context_raw)
    oid_match = _CONTEXT_OID_PATTERN.search(context_raw)

    if not tid_match or not oid_match:
        raise ValueError(f"Could not extract Tid/Oid from meeting URL context: {context_raw}")

    return MeetingUrlParts(
        thread_id=thread_id,
        organizer_id=oid_match.group(1),
        tenant_id=tid_match.group(1),
        message_id=message_id,
    )
