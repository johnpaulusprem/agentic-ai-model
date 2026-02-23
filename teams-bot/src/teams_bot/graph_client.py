"""Microsoft Graph SDK client builders (v1.0 and beta)."""

from msgraph import GraphServiceClient
from msgraph_beta import GraphServiceClient as BetaGraphServiceClient

from teams_bot.auth import get_credential
from teams_bot.config import settings

_client: GraphServiceClient | None = None
_beta_client: BetaGraphServiceClient | None = None


def get_graph_client() -> GraphServiceClient:
    """Return a cached Graph v1.0 client."""
    global _client
    if _client is None:
        _client = GraphServiceClient(
            credentials=get_credential(),
            scopes=settings.graph_scopes,
        )
    return _client


def get_beta_graph_client() -> BetaGraphServiceClient:
    """Return a cached Graph beta client (for startTranscription etc.)."""
    global _beta_client
    if _beta_client is None:
        _beta_client = BetaGraphServiceClient(
            credentials=get_credential(),
            scopes=settings.graph_scopes,
        )
    return _beta_client
