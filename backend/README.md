# Django REST API (portfolio content)

SQLite database with seeded content matching the Next.js portfolio UI.

## Setup

```powershell
cd backend
python -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py seed_portfolio
python manage.py runserver 8000
```

**Admin (CRUD in browser):** http://127.0.0.1:8000/admin/  
Login: `maruf` / `maruf123` (created on first seed).

Lists (skills, technologies, highlights) use **normal text boxes / inlines** — no JSON fields. Long text uses multi-line textareas.

## REST API

| Method | URL | Notes |
|--------|-----|--------|
| GET | `/api/v1/portfolio/` | Full site bundle (what Next.js uses) |
| GET/POST/PUT/PATCH/DELETE | `/api/v1/projects/` | Projects CRUD |
| | `/api/v1/education/` | Education |
| | `/api/v1/skill-groups/` | Skill groups (nested `items` on GET) |
| | `/api/v1/skill-items/` | Skill badges |
| | `/api/v1/experiences/` | Work experience |
| | `/api/v1/courses/` | Courses |
| | `/api/v1/achievements/` | Achievements |
| | `/api/v1/research-publications/` | Research & publications |
| | `/api/v1/profile/` | Hero / contact profile |
| | `/api/v1/social-links/` | Home / education / contact links |

**Read:** public. **Write (POST/PUT/PATCH/DELETE):** Django staff user (session login in admin, or HTTP Basic as staff).

Re-seed from JSON:

```powershell
python manage.py seed_portfolio
```

Edit source data in `portfolio/seed_data.json` before re-seeding.

## Frontend

In `Portfolio/.env.local`:

```
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

Run Next.js: `npm run dev` (port 3000). CORS is allowed for localhost:3000.