import json
from pathlib import Path

from django.contrib.auth.models import User
from django.core.management.base import BaseCommand

from portfolio.models import (
    Achievement,
    Course,
    CourseTechnology,
    Education,
    Experience,
    ExperienceHighlight,
    ExperienceLink,
    PersonalInfoEntry,
    PersonalInfoPage,
    PersonalInfoSection,
    Profile,
    ProfileDevSkill,
    Project,
    ResearchPublication,
    SkillGroup,
    SkillItem,
    SocialLink,
)


class Command(BaseCommand):
    help = "Load portfolio content from seed_data.json (wipes existing portfolio rows)."

    def add_arguments(self, parser):
        parser.add_argument(
            "--admin-password",
            default="maruf123",
            help="Password for admin user maruf (created if missing).",
        )

    def handle(self, *args, **options):
        path = Path(__file__).resolve().parent.parent.parent / "seed_data.json"
        data = json.loads(path.read_text(encoding="utf-8"))

        for model in (
            PersonalInfoEntry,
            PersonalInfoSection,
            PersonalInfoPage,
            CourseTechnology,
            ExperienceHighlight,
            ExperienceLink,
            ProfileDevSkill,
            Achievement,
            ResearchPublication,
            Course,
            Experience,
            Project,
            SkillItem,
            SkillGroup,
            SocialLink,
            Education,
            Profile,
        ):
            model.objects.all().delete()

        profile_data = dict(data["profile"])
        dev_skills = profile_data.pop("development_skills", [])
        profile = Profile.objects.create(**profile_data)
        for i, line in enumerate(dev_skills, start=1):
            ProfileDevSkill.objects.create(profile=profile, line=line, sort_order=i)

        for row in data["social_links"]:
            SocialLink.objects.create(**row)

        for row in data["education"]:
            Education.objects.create(**row)

        for group in data["skill_groups"]:
            items = group.pop("items", [])
            skill_group = SkillGroup.objects.create(
                title=group["title"], sort_order=group["sort_order"]
            )
            for item in items:
                SkillItem.objects.create(group=skill_group, **item)

        for row in data["projects"]:
            Project.objects.create(**row)

        for row in data["experiences"]:
            row = dict(row)
            highlights = row.pop("highlights", [])
            links = row.pop("links", [])
            exp = Experience.objects.create(**row)
            for i, text in enumerate(highlights, start=1):
                ExperienceHighlight.objects.create(
                    experience=exp, text=text, sort_order=i
                )
            for i, link in enumerate(links, start=1):
                ExperienceLink.objects.create(
                    experience=exp,
                    label=link["label"],
                    url=link["url"],
                    sort_order=i,
                )

        for row in data["courses"]:
            row = dict(row)
            technologies = row.pop("technologies", [])
            course = Course.objects.create(**row)
            for i, label in enumerate(technologies, start=1):
                CourseTechnology.objects.create(
                    course=course, label=label, sort_order=i
                )

        for key in ("family_information", "personal_information"):
            block = data.get(key)
            if not block:
                continue
            block = dict(block)
            sections = block.pop("sections", [])
            page = PersonalInfoPage.objects.create(**block)
            for section in sections:
                section = dict(section)
                entries = section.pop("entries", [])
                sec = PersonalInfoSection.objects.create(page=page, **section)
                for entry in entries:
                    PersonalInfoEntry.objects.create(section=sec, **entry)

        for row in data.get("research_publications", []):
            ResearchPublication.objects.create(**row)

        for row in data["achievements"]:
            Achievement.objects.create(**row)

        user, created = User.objects.get_or_create(
            username="maruf",
            defaults={"email": data["profile"]["email"], "is_staff": True},
        )
        if created:
            user.set_password(options["admin_password"])
            user.is_superuser = True
            user.save()
            self.stdout.write(
                self.style.SUCCESS(
                    f"Admin user created: maruf / {options['admin_password']}"
                )
            )
        else:
            self.stdout.write("Admin user maruf already exists (unchanged).")

        self.stdout.write(self.style.SUCCESS("Portfolio seeded from seed_data.json"))