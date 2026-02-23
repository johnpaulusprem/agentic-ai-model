"""Events router — Graph webhook receiver and subscription management."""

import logging
from datetime import datetime, timezone

from fastapi import APIRouter, HTTPException, Query, Request, Response

from teams_bot.models.callbacks import ChangeNotificationCollection
from teams_bot.models.requests import SubscribeRequest
from teams_bot.models.responses import (
    ErrorResponse,
    NotificationListResponse,
    SubscriptionListResponse,
    SubscriptionResponse,
    WebhookNotification,
)
from teams_bot.services import subscription_service

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/events", tags=["events"])

# In-memory store for received notifications (production: use a persistent store)
_received_notifications: list[WebhookNotification] = []


@router.post(
    "/subscribe",
    response_model=SubscriptionResponse,
    responses={502: {"model": ErrorResponse}},
)
async def create_subscription(req: SubscribeRequest):
    """Create a Graph change notification subscription."""
    try:
        sub = await subscription_service.create_subscription(
            resource=req.resource,
            change_type=req.change_type,
            expiration_minutes=req.expiration_minutes,
        )
    except Exception as exc:
        logger.exception("Failed to create subscription")
        raise HTTPException(status_code=502, detail=f"Graph API error: {exc}")

    return SubscriptionResponse(
        subscription_id=sub.id or "",
        resource=sub.resource or req.resource,
        change_type=sub.change_type or req.change_type,
        expiration=sub.expiration_date_time or datetime.now(timezone.utc),
    )


@router.get("/subscriptions", response_model=SubscriptionListResponse)
async def list_subscriptions():
    """List all active Graph subscriptions for this app."""
    try:
        subs = await subscription_service.list_subscriptions()
    except Exception as exc:
        logger.exception("Failed to list subscriptions")
        raise HTTPException(status_code=502, detail=f"Graph API error: {exc}")

    return SubscriptionListResponse(
        subscriptions=[
            SubscriptionResponse(
                subscription_id=s.id or "",
                resource=s.resource or "",
                change_type=s.change_type or "",
                expiration=s.expiration_date_time or datetime.now(timezone.utc),
            )
            for s in subs
        ]
    )


@router.get("/", response_model=NotificationListResponse)
async def get_notifications():
    """Get received webhook notifications (from in-memory store)."""
    return NotificationListResponse(notifications=list(_received_notifications))


@router.post("/webhook")
async def webhook_receiver(
    request: Request,
    validationToken: str | None = Query(None, alias="validationToken"),
):
    """Microsoft Graph webhook endpoint.

    Handles two flows:
    1. Validation: Graph sends GET/POST with ?validationToken=... — we echo it back.
    2. Notifications: Graph POSTs a ChangeNotificationCollection JSON body.
    """
    # Validation handshake
    if validationToken is not None:
        logger.info("Webhook validation handshake — echoing token")
        return Response(content=validationToken, media_type="text/plain")

    # Parse notification payload
    try:
        body = await request.json()
        payload = ChangeNotificationCollection(**body)
    except Exception:
        logger.exception("Failed to parse webhook payload")
        raise HTTPException(status_code=400, detail="Invalid notification payload")

    for notification in payload.value:
        logger.info(
            "Webhook notification: resource=%s changeType=%s",
            notification.resource,
            notification.change_type,
        )
        _received_notifications.append(
            WebhookNotification(
                resource=notification.resource or "",
                change_type=notification.change_type or "",
                tenant_id=notification.tenant_id,
                client_state=notification.client_state,
                received_at=datetime.now(timezone.utc),
            )
        )

    # Graph expects 202 Accepted
    return Response(status_code=202)
