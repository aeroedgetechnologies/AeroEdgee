# AeroEdge deployment

## MongoDB Atlas (`MONGO_URI`)

The error `querySrv ENOTFOUND _mongodb._tcp....mongodb.net` means the cluster hostname in your connection string is wrong or the cluster was deleted/renamed.

1. Open [MongoDB Atlas](https://cloud.mongodb.com/) → your project → **Database** → **Connect** → **Drivers**.
2. Copy the **SRV** connection string. It should look like:

   `mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/...`

3. Set database name to `aeroedge` (or your preferred DB name).
4. URL-encode special characters in the password (`@` → `%40`, `#` → `%23`, etc.).
5. Under **Network Access**, allow `0.0.0.0/0` (or Render’s outbound IPs) so Render can connect.

### Render (required for contact form leads)

In **Render Dashboard → your service → Environment**, add:

| Key | Example / notes |
|-----|-----------------|
| `MONGO_URI` | Full Atlas SRV string (copy from Atlas Connect) |
| `RESEND_API_KEY` | API key from [Resend](https://resend.com/api-keys) |
| `PORT` | `10000` (Render sets this automatically; optional) |

After saving, click **Manual Deploy**. Check logs for `MongoDB Connected`, `MongoDB save successful`, and `Email sent successfully`.

Test: `https://aeroedgee.onrender.com/api/health` should show `"mongoConnected": true` and `"emailConfigured": true`.

Set in `backend/.env` locally and in **Render → Environment**:

- `MONGO_URI`
- `PORT=10000`
- `RESEND_API_KEY` (from [Resend](https://resend.com/api-keys); do not commit the real key)

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
