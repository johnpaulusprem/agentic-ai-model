"""Service for joining/leaving Teams meetings via Graph Communications API."""

import logging

from msgraph.generated.models.call import Call
from msgraph.generated.models.invitation_participant_info import InvitationParticipantInfo
from msgraph.generated.models.identity_set import IdentitySet
from msgraph.generated.models.identity import Identity
from msgraph.generated.models.media_config import MediaConfig
from msgraph.generated.models.service_hosted_media_config import ServiceHostedMediaConfig
from msgraph.generated.models.chat_info import ChatInfo
from msgraph.generated.models.meeting_info import MeetingInfo
from msgraph.generated.models.organizer_meeting_info import OrganizerMeetingInfo

from teams_bot.config import settings
from teams_bot.graph_client import get_graph_client
from teams_bot.utils.meeting_url_parser import MeetingUrlParts

logger = logging.getLogger(__name__)


async def join_meeting(parts: MeetingUrlParts) -> Call:
    """Have the bot join a Teams meeting.

    Uses the Communications API: POST /communications/calls
    with service-hosted media (Microsoft hosts the media).
    """
    client = get_graph_client()

    organizer_identity = Identity(id=parts.organizer_id, display_name=None)
    organizer_identity_set = IdentitySet(user=organizer_identity)
    organizer = InvitationParticipantInfo(identity=organizer_identity_set)

    meeting_info = OrganizerMeetingInfo(organizer=organizer_identity_set)
    meeting_info.odata_type = "#microsoft.graph.organizerMeetingInfo"

    chat_info = ChatInfo(
        thread_id=parts.thread_id,
        message_id=parts.message_id,
    )

    media_config = ServiceHostedMediaConfig()
    media_config.odata_type = "#microsoft.graph.serviceHostedMediaConfig"

    call = Call(
        direction=None,
        callback_url=f"{settings.webhook_url}",
        requested_modalities=["audio"],
        media_config=media_config,
        chat_info=chat_info,
        meeting_info=meeting_info,
        tenant_id=parts.tenant_id,
    )

    logger.info("Joining meeting thread=%s tenant=%s", parts.thread_id, parts.tenant_id)
    result = await client.communications.calls.post(call)
    logger.info("Call created: id=%s", result.id if result else "unknown")
    return result


async def get_call(call_id: str) -> Call:
    """Get the current status of a call."""
    client = get_graph_client()
    return await client.communications.calls.by_call_id(call_id).get()


async def leave_call(call_id: str) -> None:
    """Have the bot leave (hang up) a call."""
    client = get_graph_client()
    logger.info("Leaving call %s", call_id)
    await client.communications.calls.by_call_id(call_id).delete()
