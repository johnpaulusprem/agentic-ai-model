"""Azure AD credential provider using client-secret flow."""

from azure.identity import ClientSecretCredential

from teams_bot.config import settings

_credential: ClientSecretCredential | None = None


def get_credential() -> ClientSecretCredential:
    """Return a cached ClientSecretCredential for app-only auth."""
    global _credential
    if _credential is None:
        _credential = ClientSecretCredential(
            tenant_id=settings.azure_tenant_id,
            client_id=settings.azure_client_id,
            client_secret=settings.azure_client_secret,
        )
    return _credential
