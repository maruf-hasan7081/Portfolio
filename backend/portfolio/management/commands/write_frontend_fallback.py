"""Write lib/portfolioFallback.json and lib/personalInfoFallback.json from the database."""

import json
from pathlib import Path

from django.core.management.base import BaseCommand
from django.test import RequestFactory

from portfolio.models import PersonalInfoPage
from portfolio.serializers import PersonalInfoPageSerializer
from portfolio.views import portfolio_bundle


class Command(BaseCommand):
    help = "Export API JSON for Netlify fallback when Django API is unreachable."

    def handle(self, *args, **options):
        root = Path(__file__).resolve().parents[4]
        lib = root / "lib"

        factory = RequestFactory()
        request = factory.get(
            "/api/v1/portfolio/",
            HTTP_HOST="127.0.0.1:8000",
        )

        response = portfolio_bundle(request)
        lib.joinpath("portfolioFallback.json").write_text(
            json.dumps(response.data, ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
        )

        personal = (
            PersonalInfoPage.objects.prefetch_related("sections__entries")
            .filter(slug="personal-information")
            .first()
        )
        if personal:
            payload = PersonalInfoPageSerializer(
                personal,
                context={"request": factory.get("/", HTTP_HOST="127.0.0.1:8000")},
            ).data
            lib.joinpath("personalInfoFallback.json").write_text(
                json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
                encoding="utf-8",
            )

        self.stdout.write(self.style.SUCCESS(f"Wrote fallback JSON under {lib}"))