# Teams Meeting Bot

A Python bot that joins Microsoft Teams meetings, starts transcriptions, and retrieves meeting events — powered by FastAPI and Microsoft Graph API.

## Prerequisites

- Python 3.11+
- An Azure AD (Entra ID) App Registration with the required permissions
- A publicly accessible URL for webhook notifications (e.g., ngrok for development)

## Quick Start

```bash
cd teams-bot

# Create a virtual environment
python -m venv .venv
source .venv/bin/activate

# Install with dev dependencies
pip install -e ".[dev]"

# Copy and fill in your Azure credentials
cp .env.example .env
# Edit .env with your values

# Run the server
uvicorn teams_bot.main:app --reload

# Run tests
pytest tests/ -v
```

The Swagger UI is available at `http://localhost:8000/docs`.

## Azure AD App Registration

### 1. Create App Registration

1. Go to [Azure Portal](https://portal.azure.com) → **Azure Active Directory** → **App registrations** → **New registration**
2. Name: `Teams Meeting Bot` (or your preferred name)
3. Supported account types: **Single tenant**
4. Click **Register**
5. Note the **Application (client) ID** and **Directory (tenant) ID**

### 2. Create Client Secret

1. Go to **Certificates & secrets** → **New client secret**
2. Add a description and expiry
3. Copy the **Value** immediately (shown only once)

### 3. Add API Permissions

Go to **API permissions** → **Add a permission** → **Microsoft Graph** → **Application permissions**:

| Permission | Purpose |
|---|---|
| `Calls.JoinGroupCall.All` | Join Teams meetings |
| `Calls.Initiate.All` | Initiate calls |
| `Calls.AccessMedia.All` | Access media streams |
| `OnlineMeetingTranscript.Read.All` | Read meeting transcripts |
| `OnlineMeetings.Read.All` | Read meeting details |

Click **Grant admin consent** for your tenant.

### 4. Configure Application Access Policy (for transcripts)

Transcripts require an Application Access Policy. Run in PowerShell:

```powershell
# Install Teams PowerShell module if needed
Install-Module MicrosoftTeams

# Connect
Connect-MicrosoftTeams

# Create the policy (replace IDs with your values)
New-CsApplicationAccessPolicy -Identity "MeetingBot-Policy" -AppIds "YOUR_CLIENT_ID" -Description "Allow bot to access meeting transcripts"

# Grant the policy to specific users or the whole tenant
Grant-CsApplicationAccessPolicy -PolicyName "MeetingBot-Policy" -Global
```

> Policy propagation can take up to 24 hours.

### 5. Register Bot in Azure Bot Service (for Communications API)

The Communications API (`/communications/calls`) requires a registered bot:

1. Go to **Azure Portal** → **Create a resource** → **Azure Bot**
2. Link it to your existing App Registration (use the same Client ID)
3. In the Bot resource, go to **Channels** → enable **Microsoft Teams**
4. Under **Calling**, enable calling and set the webhook URL to your `/api/events/webhook` endpoint

## Configuration

All settings come from environment variables (or a `.env` file):

| Variable | Required | Description |
|---|---|---|
| `AZURE_TENANT_ID` | Yes | Azure AD tenant ID |
| `AZURE_CLIENT_ID` | Yes | App registration client ID |
| `AZURE_CLIENT_SECRET` | Yes | App registration client secret |
| `BOT_DISPLAY_NAME` | No | Bot display name (default: "Yoda Meeting Bot") |
| `WEBHOOK_URL` | No | Public URL for Graph webhook callbacks |

## API Endpoints

### Meetings

| Method | Path | Description |
|---|---|---|
| `POST` | `/api/meetings/join` | Join a Teams meeting by URL |
| `GET` | `/api/meetings/{call_id}` | Get call status |
| `DELETE` | `/api/meetings/{call_id}` | Leave meeting |

### Transcription

| Method | Path | Description |
|---|---|---|
| `POST` | `/api/transcription/start` | Start transcription on active call |
| `GET` | `/api/transcription/list?meeting_id=...` | List transcripts |
| `GET` | `/api/transcription/content?meeting_id=...&transcript_id=...` | Get transcript VTT |

### Events

| Method | Path | Description |
|---|---|---|
| `POST` | `/api/events/subscribe` | Create Graph subscription |
| `GET` | `/api/events/subscriptions` | List active subscriptions |
| `GET` | `/api/events/` | Get received notifications |
| `POST` | `/api/events/webhook` | Graph webhook receiver |

## Architecture

- **No `botbuilder-python`** — deprecated EOL 2025; Graph APIs provide all needed functionality
- **Dual SDK** — `msgraph-sdk` (v1.0) for stable APIs + `msgraph-beta-sdk` for `startTranscription`
- **Service-hosted media** — Microsoft hosts media processing (no local media handling)
- **Transcripts from Graph** — reads from Teams/SharePoint native storage

## Development

```bash
# Run tests
pytest tests/ -v

# Run with auto-reload
uvicorn teams_bot.main:app --reload --host 0.0.0.0 --port 8000

# For webhook testing, expose localhost with ngrok
ngrok http 8000
```
