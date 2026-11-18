from django.db import migrations, models


def rename_personal_slug(apps, schema_editor):
    PersonalInfoPage = apps.get_model("portfolio", "PersonalInfoPage")
    PersonalInfoPage.objects.filter(slug="personal-information").update(
        slug="family-information",
        page_kind="family",
        title="Family Information",
    )


class Migration(migrations.Migration):

    dependencies = [
        ("portfolio", "0008_personalinfo_home_and_section_media"),
    ]

    operations = [
        migrations.AddField(
            model_name="personalinfoentry",
            name="image",
            field=models.FileField(
                blank=True,
                help_text="Family member photo (family page only).",
                null=True,
                upload_to="personal_info/members/",
            ),
        ),
        migrations.AddField(
            model_name="personalinfoentry",
            name="image_url",
            field=models.CharField(
                blank=True,
                help_text="Or path on the Next.js site (e.g. /media/father.jpg).",
                max_length=500,
            ),
        ),
        migrations.AddField(
            model_name="personalinfopage",
            name="page_kind",
            field=models.CharField(
                choices=[
                    ("family", "Family information"),
                    ("personal_life", "Personal life (separate)"),
                ],
                default="family",
                help_text="Family and personal life use separate pages — never merge in admin.",
                max_length=20,
            ),
        ),
        migrations.AlterField(
            model_name="personalinfopage",
            name="slug",
            field=models.SlugField(
                default="family-information", max_length=80, unique=True
            ),
        ),
        migrations.AlterField(
            model_name="personalinfopage",
            name="title",
            field=models.CharField(default="Family Information", max_length=200),
        ),
        migrations.RunPython(rename_personal_slug, migrations.RunPython.noop),
    ]