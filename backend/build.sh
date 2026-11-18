#!/usr/bin/env bash
set -o errexit

pip install -r requirements.txt
python manage.py migrate --noinput

if [ "${PORTFOLIO_SEED_ON_DEPLOY:-1}" = "1" ]; then
  python manage.py seed_portfolio --admin-password "${SEED_ADMIN_PASSWORD:-maruf123}"
fi

python manage.py collectstatic --noinput