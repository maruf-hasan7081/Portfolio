from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("portfolio", "0009_split_family_and_life"),
    ]

    operations = [
        migrations.CreateModel(
            name="ContactMessage",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("name", models.CharField(max_length=120)),
                ("email", models.EmailField(max_length=254)),
                ("message", models.TextField()),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("email_sent", models.BooleanField(default=False)),
                ("email_error", models.CharField(blank=True, max_length=500)),
            ],
            options={
                "verbose_name": "Contact message",
                "verbose_name_plural": "★ Contact form messages",
                "ordering": ["-created_at"],
            },
        ),
    ]