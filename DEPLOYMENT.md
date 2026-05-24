# AeroEdge deployment

## MongoDB Atlas (`MONGO_URI`)

The error `querySrv ENOTFOUND _mongodb._tcp....mongodb.net` means the cluster hostname in your connection string is wrong or the cluster was deleted/renamed.

1. Open [MongoDB Atlas](https://cloud.mongodb.com/) → your project → **Database** → **Connect** → **Drivers**.
2. Copy the **SRV** connection string. It should look like:

   `mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/...`

3. Set database name to `aeroedge` (or your preferred DB name).
4. URL-encode special characters in the password (`@` → `%40`, `#` → `%23`, etc.).
5. Under **Network Access**, allow `0.0.0.0/0` (or Render’s outbound IPs) so Render can connect.

Set in `backend/.env` locally and in **Render → Environment**:

- `MONGO_URI`
- `PORT=10000`
- `EMAIL_USER` (Gmail address used to send mail)
- `EMAIL_PASS` (Gmail [App Password](https://myaccount.google.com/apppasswords), not your normal login password)
- `NOTIFY_EMAIL=aeroedgetechnologies@gmail.com` (optional; this is the default)

## Render

- **Build command:** `npm install`
- **Start command:** `node backend/server.js`
- **Health check:** `/api/health`

Do not commit real credentials. Use Render environment variables only.

## Local API

```bash
npm install
npm run server
```

Frontend `.env`:

```env
REACT_APP_API_URL=http://localhost:10000
```

For production frontend builds, set `REACT_APP_API_URL` to your Render service URL.
