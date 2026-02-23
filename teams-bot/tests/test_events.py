"""Tests for the events router."""

from unittest.mock import AsyncMock, MagicMock, patch
from datetime import datetime, timezone

import pytest


@pytest.mark.asyncio
async def test_webhook_validation(client):
    """Graph sends a validationToken query param — we must echo it back."""
    resp = await client.post("/api/events/webhook?validationToken=abc123")
    assert resp.status_code == 200
    assert resp.text == "abc123"


@pytest.mark.asyncio
async def test_webhook_notification(client):
    payload = {
        "value": [
            {
                "subscription_id": "sub-1",
                "change_type": "created",
                "resource": "/communications/calls/call-1",
                "tenant_id": "tenant-1",
                "client_state": "state-1",
            }
        ]
    }
    resp = await client.post("/api/events/webhook", json=payload)
    assert resp.status_code == 202


@pytest.mark.asyncio
async def test_get_notifications(client):
    """After receiving a notification, we can list it."""
    # First send a notification
    payload = {
        "value": [
            {
                "change_type": "updated",
                "resource": "/communications/calls/call-2",
            }
        ]
    }
    await client.post("/api/events/webhook", json=payload)

    resp = await client.get("/api/events/")
    assert resp.status_code == 200
    data = resp.json()
    assert len(data["notifications"]) >= 1


@pytest.mark.asyncio
async def test_create_subscription(client):
    mock_sub = MagicMock()
    mock_sub.id = "sub-abc"
    mock_sub.resource = "/communications/calls"
    mock_sub.change_type = "created,updated"
    mock_sub.expiration_date_time = datetime(2025, 6, 1, tzinfo=timezone.utc)

    with patch(
        "teams_bot.routers.events.subscription_service.create_subscription",
        new_callable=AsyncMock,
        return_value=mock_sub,
    ):
        resp = await client.post(
            "/api/events/subscribe",
            json={"resource": "/communications/calls"},
        )

    assert resp.status_code == 200
    data = resp.json()
    assert data["subscription_id"] == "sub-abc"


@pytest.mark.asyncio
async def test_list_subscriptions(client):
    mock_sub = MagicMock()
    mock_sub.id = "sub-xyz"
    mock_sub.resource = "/communications/calls"
    mock_sub.change_type = "created"
    mock_sub.expiration_date_time = datetime(2025, 6, 1, tzinfo=timezone.utc)

    with patch(
        "teams_bot.routers.events.subscription_service.list_subscriptions",
        new_callable=AsyncMock,
        return_value=[mock_sub],
    ):
        resp = await client.get("/api/events/subscriptions")

    assert resp.status_code == 200
    data = resp.json()
    assert len(data["subscriptions"]) == 1
