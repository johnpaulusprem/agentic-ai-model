"""Application settings loaded from environment variables / .env files."""

import os
from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


def _env_file() -> str:
    """Return the env file path — .env.test when TESTING=1, else .env."""
    return ".env.test" if os.getenv("TESTING") == "1" else ".env"


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=_env_file(),
        env_file_encoding="utf-8",
        extra="ignore",
    )

    # Azure AD
    azure_tenant_id: str
    azure_client_id: str
    azure_client_secret: str

    # Bot
    bot_display_name: str = "Yoda Meeting Bot"

    # Webhook
    webhook_url: str = "https://localhost:8000/api/events/webhook"

    @property
    def graph_scopes(self) -> list[str]:
        return ["https://graph.microsoft.com/.default"]


@lru_cache
def get_settings() -> Settings:
    return Settings()  # type: ignore[call-arg]


settings = get_settings()
