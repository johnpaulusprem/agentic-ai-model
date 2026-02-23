"""Service for starting transcription and retrieving transcripts via Graph API."""

import logging

from msgraph_beta.generated.communications.calls.item.start_transcription.start_transcription_post_request_body import (
    StartTranscriptionPostRequestBody,
)

from teams_bot.graph_client import get_beta_graph_client, get_graph_client

logger = logging.getLogger(__name__)


async def start_transcription(call_id: str, language: str = "en-us") -> None:
    """Start transcription on an active call (beta API).

    Uses: POST /communications/calls/{callId}/microsoft.graph.StartTranscription
    Requires request body: {"language": "en-us"}
    This is a beta-only endpoint.
    """
    beta_client = get_beta_graph_client()
    logger.info("Starting transcription on call %s (language=%s)", call_id, language)

    request_body = StartTranscriptionPostRequestBody(language=language)
    await beta_client.communications.calls.by_call_id(
        call_id
    ).start_transcription.post(request_body)

    logger.info("Transcription started on call %s", call_id)


async def list_transcripts(user_id: str, meeting_id: str) -> list[dict]:
    """List available transcripts for an online meeting.

    Uses: GET /users/{userId}/onlineMeetings/{meetingId}/transcripts
    App-only access requires an Application Access Policy configured via PowerShell.
    """
    client = get_graph_client()
    logger.info("Listing transcripts for user=%s meeting=%s", user_id, meeting_id)

    result = await client.users.by_user_id(
        user_id
    ).online_meetings.by_online_meeting_id(
        meeting_id
    ).transcripts.get()

    transcripts = []
    if result and result.value:
        for t in result.value:
            transcripts.append({
                "id": t.id,
                "meeting_id": meeting_id,
                "created_datetime": t.created_date_time.isoformat() if t.created_date_time else None,
            })
    return transcripts


async def get_transcript_content(user_id: str, meeting_id: str, transcript_id: str) -> str:
    """Get transcript content in VTT format.

    Uses: GET /users/{userId}/onlineMeetings/{meetingId}/transcripts/{transcriptId}/content
    Returns text/vtt content.
    """
    client = get_graph_client()
    logger.info(
        "Fetching transcript content user=%s meeting=%s transcript=%s",
        user_id, meeting_id, transcript_id,
    )

    content_bytes = await client.users.by_user_id(
        user_id
    ).online_meetings.by_online_meeting_id(
        meeting_id
    ).transcripts.by_call_transcript_id(
        transcript_id
    ).content.get()

    if content_bytes is None:
        return ""
    if isinstance(content_bytes, bytes):
        return content_bytes.decode("utf-8")
    return str(content_bytes)
