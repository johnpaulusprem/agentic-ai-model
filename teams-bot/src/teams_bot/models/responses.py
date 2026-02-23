"""Pydantic models for API responses."""

from datetime import datetime
from pydantic import BaseModel


class CallResponse(BaseModel):
    """Response after joining or querying a call."""

    call_id: str
    status: str
    tenant_id: str | None = None
    meeting_url: str | None = None


class TranscriptionStatusResponse(BaseModel):
    """Response after starting transcription."""

    call_id: str
    status: str
    message: str


class TranscriptInfo(BaseModel):
    """Single transcript metadata."""

    id: str
    meeting_id: str
    created_datetime: datetime | None = None


class TranscriptListResponse(BaseModel):
    """Response for listing transcripts."""

    meeting_id: str
    transcripts: list[TranscriptInfo]


class TranscriptContentResponse(BaseModel):
    """Response containing transcript text."""

    meeting_id: str
    transcript_id: str
    content: str
    content_type: str = "text/vtt"


class SubscriptionResponse(BaseModel):
    """Response after creating a Graph subscription."""

    subscription_id: str
    resource: str
    change_type: str
    expiration: datetime


class SubscriptionListResponse(BaseModel):
    """Response listing active subscriptions."""

    subscriptions: list[SubscriptionResponse]


class WebhookNotification(BaseModel):
    """A single received notification from Graph."""

    resource: str
    change_type: str
    tenant_id: str | None = None
    client_state: str | None = None
    received_at: datetime


class NotificationListResponse(BaseModel):
    """Response listing received webhook notifications."""

    notifications: list[WebhookNotification]


class ErrorResponse(BaseModel):
    """Standard error response."""

    detail: str
