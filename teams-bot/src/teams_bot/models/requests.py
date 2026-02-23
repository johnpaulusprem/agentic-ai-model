"""Pydantic models for incoming API requests."""

from pydantic import BaseModel, HttpUrl


class JoinMeetingRequest(BaseModel):
    """Request body for POST /api/meetings/join."""

    meeting_url: HttpUrl
    display_name: str | None = None


class StartTranscriptionRequest(BaseModel):
    """Request body for POST /api/transcription/start."""

    call_id: str
    language: str = "en-us"


class SubscribeRequest(BaseModel):
    """Request body for POST /api/events/subscribe."""

    resource: str
    change_type: str = "created,updated"
    expiration_minutes: int = 60
