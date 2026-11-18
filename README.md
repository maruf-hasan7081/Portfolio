# Maruf Portfolio (Next.js)

Personal portfolio site built with **Next.js** (JavaScript), **Tailwind CSS v4**, and **DaisyUI** (same UI patterns as the original static page).

## Run locally (full stack)

**1. Django API**

```powershell
cd backend
.\venv\Scripts\activate
python manage.py runserver 8000
```

**2. Next.js** (copy `.env.example` → `.env.local`)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Content loads from `GET /api/v1/portfolio/` (falls back to `lib/portfolioFallback.json` if API is down).

**Live deploy (free):** see [DEPLOY.md](./DEPLOY.md) — Vercel (frontend) + Render (API). Content is in `backend/portfolio/seed_data.json` and `public/media/`.

## Build for production

```bash
npm run build
npm start
```

## Project layout

| Path | Purpose |
|------|---------|
| `app/` | Next.js App Router (`layout.js`, `page.js`, `globals.css`) |
| `backend/` | Django REST API + SQLite + seed (`backend/README.md`) |
| `components/` | Dynamic UI (`PortfolioFromData.jsx`) |
| `lib/` | API client + fallback JSON |
| `public/media/` | Images, CV PDF, video (served at `/media/...`) |
| `index.html` | Legacy static version (reference only) |

To refresh JSX from `index.html` after editing the legacy file:

```bash
node scripts/html-to-jsx.mjs
```