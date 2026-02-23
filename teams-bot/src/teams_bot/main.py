"""FastAPI application factory for the Teams Meeting Bot."""

import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI

from teams_bot.routers import meetings, transcription, events

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s %(levelname)-8s %(name)s — %(message)s",
)
logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("Teams Meeting Bot starting up")
    yield
    logger.info("Teams Meeting Bot shutting down")


def create_app() -> FastAPI:
    app = FastAPI(
        title="Teams Meeting Bot",
        description="Bot that joins Microsoft Teams meetings, starts transcriptions, and retrieves meeting events.",
        version="0.1.0",
        lifespan=lifespan,
    )
    app.include_router(meetings.router)
    app.include_router(transcription.router)
    app.include_router(events.router)

    @app.get("/health", tags=["health"])
    async def health():
        return {"status": "ok"}

    return app


app = create_app()
