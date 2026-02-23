"""Application settings loaded from environment variables / .env file."""

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

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


settings = Settings()  # type: ignore[call-arg]
