"""Tests for the meetings router."""

from unittest.mock import AsyncMock, patch, MagicMock

import pytest


VALID_MEETING_URL = (
    "https://teams.microsoft.com/l/meetup-join/"
    "19%3ameeting_YTM2NDI3ZjEtZWQ0Ni00OWM5LWI5YjctMDE5ODMyMmIxZjVi%40thread.v2/"
    "0?context=%7b%22Tid%22%3a%2272f988bf-86f1-41af-91ab-2d7cd011db47%22"
    "%2c%22Oid%22%3a%22fe36f75e-c103-410b-a18a-2bf6df06ac3a%22%7d"
)


@pytest.mark.asyncio
async def test_join_meeting_success(client):
    mock_call = MagicMock()
    mock_call.id = "call-123"
    mock_call.state = MagicMock()
    mock_call.state.value = "establishing"

    with patch("teams_bot.routers.meetings.call_service.join_meeting", new_callable=AsyncMock, return_value=mock_call):
        resp = await client.post("/api/meetings/join", json={"meeting_url": VALID_MEETING_URL})

    assert resp.status_code == 200
    data = resp.json()
    assert data["call_id"] == "call-123"
    assert data["status"] == "establishing"


@pytest.mark.asyncio
async def test_join_meeting_bad_url(client):
    resp = await client.post("/api/meetings/join", json={"meeting_url": "https://example.com/bad"})
    assert resp.status_code == 400


@pytest.mark.asyncio
async def test_get_call_status(client):
    mock_call = MagicMock()
    mock_call.id = "call-456"
    mock_call.state = MagicMock()
    mock_call.state.value = "established"

    with patch("teams_bot.routers.meetings.call_service.get_call", new_callable=AsyncMock, return_value=mock_call):
        resp = await client.get("/api/meetings/call-456")

    assert resp.status_code == 200
    assert resp.json()["status"] == "established"


@pytest.mark.asyncio
async def test_leave_meeting(client):
    with patch("teams_bot.routers.meetings.call_service.leave_call", new_callable=AsyncMock):
        resp = await client.delete("/api/meetings/call-456")

    assert resp.status_code == 204
