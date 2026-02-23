"""Models for Microsoft Graph webhook callback payloads."""

from pydantic import BaseModel, ConfigDict


class ResourceData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    id: str | None = None
    odata_type: str | None = None
    odata_id: str | None = None
    odata_etag: str | None = None


class ChangeNotification(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    subscription_id: str | None = None
    subscription_expiration_date_time: str | None = None
    change_type: str | None = None
    resource: str | None = None
    resource_data: ResourceData | None = None
    client_state: str | None = None
    tenant_id: str | None = None


class ChangeNotificationCollection(BaseModel):
    """Top-level payload sent by Graph to our webhook endpoint."""

    value: list[ChangeNotification] = []
