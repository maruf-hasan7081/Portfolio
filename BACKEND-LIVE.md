# Backend live (Django API)

Frontend: **https://maruf-hasan-chowdhury-profile.netlify.app**

## Option A — Render (free, recommended)

1. Open: [Deploy Blueprint from GitHub](https://dashboard.render.com/blueprint/new?repo=https://github.com/maruf-hasan7081/Portfolio)
2. Connect GitHub if asked → deploy `portfolio-api`
3. After first deploy, open the service → copy the URL (e.g. `https://portfolio-api-xxxx.onrender.com`)
4. **Environment** → add:
   - `DJANGO_ALLOWED_HOSTS` = `portfolio-api-xxxx.onrender.com` (your hostname only)
   - `SEED_ADMIN_PASSWORD` = strong password (admin user `maruf`)
   - Optional email: `EMAIL_HOST_PASSWORD`, `CONTACT_INBOX_EMAIL`, etc.
5. **Netlify** → Site → Environment variables:
   - `NEXT_PUBLIC_API_URL` = `https://portfolio-api-xxxx.onrender.com`
6. Redeploy Netlify (or push a small commit)

`CORS_ALLOWED_ORIGINS` is already set in `render.yaml` for your Netlify URL.

## Option B — Railway CLI

```powershell
cd c:\my_profile\Portfolio\backend
npx @railway/cli login
npx @railway/cli init
npx @railway/cli up
npx @railway/cli domain
```

Set variables in Railway dashboard (same as Render step 4–5).

## Verify

```text
GET https://YOUR-API.onrender.com/api/v1/health/
GET https://YOUR-API.onrender.com/api/v1/portfolio/
```

Admin: `https://YOUR-API.onrender.com/admin/` → `maruf` / your `SEED_ADMIN_PASSWORD`.