"""Service for starting transcription and retrieving transcripts via Graph API."""

import logging

from teams_bot.graph_client import get_beta_graph_client, get_graph_client

logger = logging.getLogger(__name__)


async def start_transcription(call_id: str) -> None:
    """Start transcription on an active call (beta API).

    Uses: POST /communications/calls/{callId}/microsoft.graph.startTranscription
    This is a beta-only endpoint.
    """
    beta_client = get_beta_graph_client()
    logger.info("Starting transcription on call %s", call_id)
    # The beta SDK exposes startTranscription as an action on the call
    # If the SDK doesn't have a typed method, fall back to a raw request
    try:
        await beta_client.communications.calls.by_call_id(
            call_id
        ).microsoft_graph_start_transcription.post()
    except AttributeError:
        # Fallback: some beta SDK versions may not have this path yet
        # Use the adapter directly
        from kiota_abstractions.request_information import RequestInformation
        from kiota_abstractions.method import Method

        request_info = RequestInformation()
        request_info.http_method = Method.POST
        request_info.url_template = (
            f"{{+baseurl}}/communications/calls/{call_id}"
            "/microsoft.graph.startTranscription"
        )
        adapter = beta_client.request_adapter
        await adapter.send_no_response_content_async(request_info, error_mapping={})

    logger.info("Transcription started on call %s", call_id)


async def list_transcripts(meeting_id: str) -> list[dict]:
    """List available transcripts for an online meeting.

    Uses: GET /me/onlineMeetings/{meetingId}/transcripts
    (app-only: requires Application Access Policy configured)
    """
    client = get_graph_client()
    logger.info("Listing transcripts for meeting %s", meeting_id)

    # Using the users endpoint for app-only access:
    # GET /users/{organizerId}/onlineMeetings/{meetingId}/transcripts
    # For simplicity, we use the communications endpoint if available
    result = await client.communications.online_meetings.by_online_meeting_id(
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


async def get_transcript_content(meeting_id: str, transcript_id: str) -> str:
    """Get transcript content in VTT format.

    Uses: GET /communications/onlineMeetings/{meetingId}/transcripts/{transcriptId}/content
    with Accept: text/vtt
    """
    client = get_graph_client()
    logger.info("Fetching transcript content meeting=%s transcript=%s", meeting_id, transcript_id)

    content_bytes = await client.communications.online_meetings.by_online_meeting_id(
        meeting_id
    ).transcripts.by_call_transcript_id(
        transcript_id
    ).content.get()

    if content_bytes is None:
        return ""
    if isinstance(content_bytes, bytes):
        return content_bytes.decode("utf-8")
    return str(content_bytes)
