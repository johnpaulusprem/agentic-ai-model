"""Shared test fixtures.

Test configuration is loaded from .env.test (activated via TESTING=1 in pyproject.toml).
"""

import os

# Activate test env before any app imports
os.environ.setdefault("TESTING", "1")

import pytest
from httpx import ASGITransport, AsyncClient

from teams_bot.main import create_app


@pytest.fixture
def app():
    return create_app()


@pytest.fixture
async def client(app):
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as ac:
        yield ac
