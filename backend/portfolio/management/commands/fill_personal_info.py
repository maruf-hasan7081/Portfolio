"""Load family_information and personal_information from seed_data.json (no full DB wipe)."""

import json
from pathlib import Path

from django.core.management.base import BaseCommand

from portfolio.models import PersonalInfoEntry, PersonalInfoPage, PersonalInfoSection


def upsert_page(payload):
    payload = dict(payload)
    sections_data = payload.pop("sections", [])
    slug = payload.get("slug")
    if not slug:
        raise ValueError("personal info page missing slug")

    page, _ = PersonalInfoPage.objects.update_or_create(slug=slug, defaults=payload)
    page.sections.all().delete()

    for section in sections_data:
        section = dict(section)
        entries = section.pop("entries", [])
        sec = PersonalInfoSection.objects.create(page=page, **section)
        for entry in entries:
            row = dict(entry)
            row.setdefault("image_url", "")
            PersonalInfoEntry.objects.create(section=sec, **row)

    return page, len(sections_data)


class Command(BaseCommand):
    help = "Sync Family + Personal pages from seed_data.json"

    def handle(self, *args, **options):
        seed_path = Path(__file__).resolve().parents[2] / "seed_data.json"
        with open(seed_path, encoding="utf-8") as f:
            data = json.load(f)

        for key in ("family_information", "personal_information"):
            block = data.get(key)
            if not block:
                self.stdout.write(self.style.WARNING(f"Skip missing {key}"))
                continue
            page, n_sec = upsert_page(block)
            self.stdout.write(self.style.SUCCESS(f"{key}: {page.title} ({n_sec} sections)"))