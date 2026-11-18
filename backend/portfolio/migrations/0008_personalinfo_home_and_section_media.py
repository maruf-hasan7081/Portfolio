from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("portfolio", "0007_profile_cv_pdf_file_profile_updated_at_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="personalinfopage",
            name="home_image",
            field=models.FileField(
                blank=True,
                help_text="Teaser image on the home page section.",
                null=True,
                upload_to="personal_info/home/",
            ),
        ),
        migrations.AddField(
            model_name="personalinfopage",
            name="home_image_url",
            field=models.CharField(
                blank=True,
                help_text="Or path on the Next.js site (e.g. /media/maruf.jpeg) if no upload.",
                max_length=500,
            ),
        ),
        migrations.AddField(
            model_name="personalinfopage",
            name="home_summary",
            field=models.TextField(
                blank=True,
                help_text="Short intro on the main portfolio page (not the full detail list).",
            ),
        ),
        migrations.AddField(
            model_name="personalinfopage",
            name="show_on_home",
            field=models.BooleanField(
                default=True,
                help_text="Show the Personal Information section on the main page.",
            ),
        ),
        migrations.AddField(
            model_name="personalinfosection",
            name="description",
            field=models.TextField(
                blank=True,
                help_text="Optional longer text — shown only on the full Personal Info page.",
            ),
        ),
        migrations.AddField(
            model_name="personalinfosection",
            name="image",
            field=models.FileField(
                blank=True,
                help_text="Optional image for this section on the detail page.",
                null=True,
                upload_to="personal_info/sections/",
            ),
        ),
        migrations.AddField(
            model_name="personalinfosection",
            name="image_url",
            field=models.CharField(
                blank=True,
                help_text="Or image path on the Next.js site (e.g. /media/photo.jpg).",
                max_length=500,
            ),
        ),
    ]