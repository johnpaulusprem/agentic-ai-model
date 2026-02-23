"""Transcription router — start transcription, list and retrieve transcripts."""

import logging

from fastapi import APIRouter, HTTPException, Query

from teams_bot.models.requests import StartTranscriptionRequest
from teams_bot.models.responses import (
    ErrorResponse,
    TranscriptionStatusResponse,
    TranscriptContentResponse,
    TranscriptInfo,
    TranscriptListResponse,
)
from teams_bot.services import transcription_service

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/transcription", tags=["transcription"])


@router.post(
    "/start",
    response_model=TranscriptionStatusResponse,
    responses={502: {"model": ErrorResponse}},
)
async def start_transcription(req: StartTranscriptionRequest):
    """Start transcription on an active call (uses beta API)."""
    try:
        await transcription_service.start_transcription(req.call_id)
    except Exception as exc:
        logger.exception("Failed to start transcription on call %s", req.call_id)
        raise HTTPException(status_code=502, detail=f"Graph API error: {exc}")

    return TranscriptionStatusResponse(
        call_id=req.call_id,
        status="started",
        message="Transcription started successfully",
    )


@router.get(
    "/list",
    response_model=TranscriptListResponse,
    responses={502: {"model": ErrorResponse}},
)
async def list_transcripts(meeting_id: str = Query(..., description="Online meeting ID")):
    """List available transcripts for a meeting."""
    try:
        transcripts = await transcription_service.list_transcripts(meeting_id)
    except Exception as exc:
        logger.exception("Failed to list transcripts for meeting %s", meeting_id)
        raise HTTPException(status_code=502, detail=f"Graph API error: {exc}")

    return TranscriptListResponse(
        meeting_id=meeting_id,
        transcripts=[TranscriptInfo(**t) for t in transcripts],
    )


@router.get(
    "/content",
    response_model=TranscriptContentResponse,
    responses={502: {"model": ErrorResponse}},
)
async def get_transcript_content(
    meeting_id: str = Query(..., description="Online meeting ID"),
    transcript_id: str = Query(..., description="Transcript ID"),
):
    """Get transcript content as VTT text."""
    try:
        content = await transcription_service.get_transcript_content(meeting_id, transcript_id)
    except Exception as exc:
        logger.exception(
            "Failed to get transcript content meeting=%s transcript=%s",
            meeting_id,
            transcript_id,
        )
        raise HTTPException(status_code=502, detail=f"Graph API error: {exc}")

    return TranscriptContentResponse(
        meeting_id=meeting_id,
        transcript_id=transcript_id,
        content=content,
    )
