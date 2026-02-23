"""Tests for the transcription router."""

from unittest.mock import AsyncMock, patch

import pytest


@pytest.mark.asyncio
async def test_start_transcription(client):
    with patch(
        "teams_bot.routers.transcription.transcription_service.start_transcription",
        new_callable=AsyncMock,
    ):
        resp = await client.post("/api/transcription/start", json={"call_id": "call-123"})

    assert resp.status_code == 200
    data = resp.json()
    assert data["call_id"] == "call-123"
    assert data["status"] == "started"


@pytest.mark.asyncio
async def test_list_transcripts(client):
    mock_transcripts = [
        {"id": "t-1", "meeting_id": "m-1", "created_datetime": "2025-01-01T00:00:00"},
    ]
    with patch(
        "teams_bot.routers.transcription.transcription_service.list_transcripts",
        new_callable=AsyncMock,
        return_value=mock_transcripts,
    ):
        resp = await client.get("/api/transcription/list", params={"meeting_id": "m-1"})

    assert resp.status_code == 200
    data = resp.json()
    assert len(data["transcripts"]) == 1
    assert data["transcripts"][0]["id"] == "t-1"


@pytest.mark.asyncio
async def test_get_transcript_content(client):
    with patch(
        "teams_bot.routers.transcription.transcription_service.get_transcript_content",
        new_callable=AsyncMock,
        return_value="WEBVTT\n\n00:00:00.000 --> 00:00:05.000\nHello world",
    ):
        resp = await client.get(
            "/api/transcription/content",
            params={"meeting_id": "m-1", "transcript_id": "t-1"},
        )

    assert resp.status_code == 200
    data = resp.json()
    assert "WEBVTT" in data["content"]
