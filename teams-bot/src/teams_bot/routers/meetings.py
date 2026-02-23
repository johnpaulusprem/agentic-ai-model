"""Meetings router — join, query, and leave Teams meetings."""

import logging

from fastapi import APIRouter, HTTPException

from teams_bot.config import settings
from teams_bot.models.requests import JoinMeetingRequest
from teams_bot.models.responses import CallResponse, ErrorResponse
from teams_bot.services import call_service
from teams_bot.utils.meeting_url_parser import parse_meeting_url

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/meetings", tags=["meetings"])


@router.post(
    "/join",
    response_model=CallResponse,
    responses={400: {"model": ErrorResponse}, 502: {"model": ErrorResponse}},
)
async def join_meeting(req: JoinMeetingRequest):
    """Have the bot join a Teams meeting by URL."""
    try:
        parts = parse_meeting_url(str(req.meeting_url))
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc))

    try:
        call = await call_service.join_meeting(parts)
    except Exception as exc:
        logger.exception("Failed to join meeting")
        raise HTTPException(status_code=502, detail=f"Graph API error: {exc}")

    return CallResponse(
        call_id=call.id or "",
        status=call.state.value if call.state else "unknown",
        tenant_id=parts.tenant_id,
        meeting_url=str(req.meeting_url),
    )


@router.get(
    "/{call_id}",
    response_model=CallResponse,
    responses={404: {"model": ErrorResponse}, 502: {"model": ErrorResponse}},
)
async def get_call_status(call_id: str):
    """Get the current status of a call."""
    try:
        call = await call_service.get_call(call_id)
    except Exception as exc:
        logger.exception("Failed to get call %s", call_id)
        raise HTTPException(status_code=502, detail=f"Graph API error: {exc}")

    if call is None:
        raise HTTPException(status_code=404, detail=f"Call {call_id} not found")

    return CallResponse(
        call_id=call.id or call_id,
        status=call.state.value if call.state else "unknown",
    )


@router.delete(
    "/{call_id}",
    status_code=204,
    responses={502: {"model": ErrorResponse}},
)
async def leave_meeting(call_id: str):
    """Have the bot leave a meeting (hang up)."""
    try:
        await call_service.leave_call(call_id)
    except Exception as exc:
        logger.exception("Failed to leave call %s", call_id)
        raise HTTPException(status_code=502, detail=f"Graph API error: {exc}")
