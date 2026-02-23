"""Tests for the Teams meeting URL parser."""

import pytest

from teams_bot.utils.meeting_url_parser import parse_meeting_url


VALID_URL = (
    "https://teams.microsoft.com/l/meetup-join/"
    "19%3ameeting_YTM2NDI3ZjEtZWQ0Ni00OWM5LWI5YjctMDE5ODMyMmIxZjVi%40thread.v2/"
    "0?context=%7b%22Tid%22%3a%2272f988bf-86f1-41af-91ab-2d7cd011db47%22"
    "%2c%22Oid%22%3a%22fe36f75e-c103-410b-a18a-2bf6df06ac3a%22%7d"
)


def test_parse_valid_url():
    parts = parse_meeting_url(VALID_URL)
    assert parts.thread_id == "19:meeting_YTM2NDI3ZjEtZWQ0Ni00OWM5LWI5YjctMDE5ODMyMmIxZjVi@thread.v2"
    assert parts.tenant_id == "72f988bf-86f1-41af-91ab-2d7cd011db47"
    assert parts.organizer_id == "fe36f75e-c103-410b-a18a-2bf6df06ac3a"
    assert parts.message_id == "0"


def test_parse_invalid_url():
    with pytest.raises(ValueError, match="Not a valid Teams meeting URL"):
        parse_meeting_url("https://example.com/not-a-meeting")


def test_parse_missing_context():
    bad_url = (
        "https://teams.microsoft.com/l/meetup-join/"
        "19%3ameeting_abc%40thread.v2/0?context=%7b%7d"
    )
    with pytest.raises(ValueError, match="Could not extract Tid/Oid"):
        parse_meeting_url(bad_url)
