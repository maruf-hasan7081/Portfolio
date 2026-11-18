# Deploy portfolio (free tier)

Your **content** lives in Git, not in the database file:

| What | Where |
|------|--------|
| Text, skills, projects, family/personal pages | `backend/portfolio/seed_data.json` |
| Photos, CV PDF, video | `public/media/` (served by Next.js at `/media/...`) |

Every production deploy runs `python manage.py seed_portfolio` (see `backend/build.sh`) so the live API matches `seed_data.json`.

**Change content:** edit `seed_data.json` and/or files in `public/media/`, commit, push, redeploy the API (and Vercel for media-only changes).

---

## 1. Push code to GitHub

Repo: `https://github.com/maruf-hasan7081/Portfolio`

Secrets stay local: `.env.local`, `backend/.env`, `EMAIL_HOST_PASSWORD`, etc. are **not** committed.

---

## 2. Backend (Django API) — [Render](https://render.com) (free)

1. Sign in to Render → **New** → **Blueprint** → connect GitHub repo `Portfolio`.
2. Render reads `render.yaml` (free web service). SQLite is recreated on deploy; `seed_data.json` reloads your content each time (`PORTFOLIO_SEED_ON_DEPLOY=1`).
3. After deploy, open the service → copy the URL, e.g. `https://portfolio-api-xxxx.onrender.com`.
4. In Render **Environment**, set (if not auto-filled):

   | Variable | Example |
   |----------|---------|
   | `DJANGO_ALLOWED_HOSTS` | `portfolio-api-xxxx.onrender.com` |
   | `CORS_ALLOWED_ORIGINS` | `https://your-site.vercel.app` |
   | `DJANGO_CSRF_TRUSTED_ORIGINS` | `https://your-site.vercel.app` |
   | `SEED_ADMIN_PASSWORD` | strong password (admin user `maruf`) |

5. Optional email on live API: add `EMAIL_HOST_PASSWORD`, `CONTACT_INBOX_EMAIL`, etc. (same as `.env.example`).

6. Admin: `https://portfolio-api-xxxx.onrender.com/admin/` — login `maruf` / your `SEED_ADMIN_PASSWORD`.

**Note:** Free Render sleeps after ~15 minutes idle; first request may take ~30s.

**Re-seed only when you want:** set `PORTFOLIO_SEED_ON_DEPLOY=0` after the first deploy if you edit content only in admin (otherwise each deploy resets DB content from JSON).

**Persistent database (optional):** create a free DB at [Neon](https://neon.tech), copy `DATABASE_URL` into Render env vars — then contact messages and admin edits survive redeploys.

---

## 3. Frontend (Next.js) — [Vercel](https://vercel.com) (free)

1. Import GitHub repo `Portfolio` on Vercel.
2. Framework: **Next.js**, root directory: `.` (repo root).
3. **Environment variable:**

   ```
   NEXT_PUBLIC_API_URL=https://portfolio-api-xxxx.onrender.com
   ```

   No trailing slash. Redeploy after changing it.

4. Your site: `https://something.vercel.app` — put that exact URL in Render `CORS_ALLOWED_ORIGINS`.

---

## 4. Local vs live

| | Local | Live |
|---|--------|------|
| Site | `http://localhost:3000` | Vercel URL |
| API | `http://127.0.0.1:8000` | Render URL |
| Data refresh | `cd backend && python manage.py seed_portfolio` | automatic on API deploy (if `PORTFOLIO_SEED_ON_DEPLOY=1`) |

---

## Other free options

- **Frontend:** Cloudflare Pages, Netlify (same `NEXT_PUBLIC_API_URL` idea).
- **Backend:** [Railway](https://railway.app), [Fly.io](https://fly.io) (small free credits), [PythonAnywhere](https://www.pythonanywhere.com) (limited free). You still need Postgres or “seed on every deploy” — do not rely on SQLite alone on ephemeral disks.

---

## Large files

`public/media/*.mp4` is included for your Video CV. If GitHub rejects a file (>100MB), host the video on YouTube/Drive and set `video_cv_url` in `seed_data.json` to that URL instead.