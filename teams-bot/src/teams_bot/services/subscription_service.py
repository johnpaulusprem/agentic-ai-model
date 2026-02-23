"""Service for managing Microsoft Graph change notification subscriptions."""

import logging
import uuid
from datetime import datetime, timedelta, timezone

from msgraph.generated.models.subscription import Subscription

from teams_bot.config import settings
from teams_bot.graph_client import get_graph_client

logger = logging.getLogger(__name__)


async def create_subscription(
    resource: str,
    change_type: str = "created,updated",
    expiration_minutes: int = 60,
) -> Subscription:
    """Create a Graph change notification subscription.

    Args:
        resource: The Graph resource to watch (e.g., "/communications/calls").
        change_type: Comma-separated change types (created, updated, deleted).
        expiration_minutes: Minutes until subscription expires (max varies by resource).
    """
    client = get_graph_client()
    expiration = datetime.now(timezone.utc) + timedelta(minutes=expiration_minutes)

    subscription = Subscription(
        change_type=change_type,
        notification_url=settings.webhook_url,
        resource=resource,
        expiration_date_time=expiration,
        client_state=str(uuid.uuid4()),
    )

    logger.info("Creating subscription for resource=%s changeType=%s", resource, change_type)
    result = await client.subscriptions.post(subscription)
    logger.info("Subscription created: id=%s", result.id if result else "unknown")
    return result


async def list_subscriptions() -> list[Subscription]:
    """List all active Graph subscriptions for this app."""
    client = get_graph_client()
    result = await client.subscriptions.get()
    return result.value if result and result.value else []


async def delete_subscription(subscription_id: str) -> None:
    """Delete a Graph subscription."""
    client = get_graph_client()
    logger.info("Deleting subscription %s", subscription_id)
    await client.subscriptions.by_subscription_id(subscription_id).delete()
