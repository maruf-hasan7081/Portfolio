from django.db import models


class Profile(models.Model):
    site_name = models.CharField(max_length=80, default="Maruf")
    welcome_title = models.CharField(max_length=200)
    full_name = models.CharField(max_length=200)
    nickname = models.CharField(max_length=120, blank=True)
    research_interests = models.TextField(blank=True)
    current_study = models.CharField(max_length=255, blank=True)
    photo_url = models.CharField(max_length=500, default="/media/maruf.jpeg")
    cv_pdf_url = models.CharField(
        max_length=500,
        blank=True,
        help_text="Fallback PDF path on the Next.js site (e.g. /media/file.pdf) if no upload below.",
    )
    cv_pdf_file = models.FileField(
        upload_to="cv/",
        blank=True,
        null=True,
        help_text="Upload PDF here — this overrides cv_pdf_url when set.",
    )
    video_cv_url = models.CharField(max_length=500, blank=True)
    video_cv_file = models.FileField(
        upload_to="video_cv/",
        blank=True,
        null=True,
        help_text="Upload MP4 here — overrides video_cv_url when set.",
    )
    video_cv_title = models.CharField(max_length=120, default="Video CV")
    video_cv_subtitle = models.CharField(max_length=255, blank=True)
    resume_section_title = models.CharField(max_length=120, default="My Resume")
    show_video_cv = models.BooleanField(default=True)
    show_resume_section = models.BooleanField(default=True)
    email = models.EmailField(blank=True)
    phone = models.CharField(max_length=40, blank=True)
    location = models.CharField(max_length=120, blank=True)
    contact_intro_title = models.CharField(max_length=120, default="Let's Work Together")
    contact_intro_text = models.TextField(blank=True)
    footer_bio = models.TextField(blank=True)
    copyright_year = models.PositiveIntegerField(default=2026)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Site profile (CV & video)"
        verbose_name_plural = "Site profile (CV & video)"

    def __str__(self):
        return self.full_name

    def resolve_cv_pdf_url(self, request=None):
        if self.cv_pdf_file:
            url = self.cv_pdf_file.url
            if request:
                return request.build_absolute_uri(url)
            return url
        if self.cv_pdf_url:
            return self.cv_pdf_url
        return "/media/MARUF_HASAN_CHOWDHURY-CV.pdf"

    def resolve_video_cv_url(self, request=None):
        if self.video_cv_file:
            url = self.video_cv_file.url
            if request:
                return request.build_absolute_uri(url)
            return url
        return self.video_cv_url or ""


class ProfileDevSkill(models.Model):
    profile = models.ForeignKey(
        Profile, related_name="development_skill_lines", on_delete=models.CASCADE
    )
    line = models.CharField(max_length=255)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["sort_order", "id"]


class SocialLink(models.Model):
    class Placement(models.TextChoices):
        HOME = "home", "Home"
        EDUCATION = "education", "Education"
        CONTACT = "contact", "Contact"

    placement = models.CharField(max_length=20, choices=Placement.choices)
    label = models.CharField(max_length=120)
    url = models.URLField(max_length=500)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["sort_order", "id"]


class Education(models.Model):
    degree = models.CharField(max_length=200)
    institution = models.CharField(max_length=255)
    details = models.CharField(max_length=255)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["sort_order", "id"]


class SkillGroup(models.Model):
    title = models.CharField(max_length=120)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["sort_order", "id"]


class SkillItem(models.Model):
    group = models.ForeignKey(SkillGroup, related_name="items", on_delete=models.CASCADE)
    label = models.CharField(max_length=80)
    is_primary = models.BooleanField(default=False)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["sort_order", "id"]


class Project(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=200, blank=True)
    description = models.TextField(blank=True)
    image_url = models.CharField(max_length=500, blank=True)
    category = models.CharField(max_length=50)
    live_url = models.URLField(max_length=500, blank=True)
    github_url = models.URLField(max_length=500, blank=True)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["sort_order", "id"]


class Experience(models.Model):
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=255)
    badge = models.CharField(max_length=80, blank=True)
    date_range = models.CharField(max_length=120, blank=True)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["sort_order", "id"]


class ExperienceHighlight(models.Model):
    experience = models.ForeignKey(
        Experience, related_name="highlight_lines", on_delete=models.CASCADE
    )
    text = models.TextField()
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["sort_order", "id"]


class ExperienceLink(models.Model):
    experience = models.ForeignKey(
        Experience, related_name="action_links", on_delete=models.CASCADE
    )
    label = models.CharField(max_length=120)
    url = models.URLField(max_length=500)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["sort_order", "id"]


class Course(models.Model):
    title = models.CharField(max_length=200)
    provider = models.CharField(max_length=200)
    status = models.CharField(max_length=80, blank=True)
    duration_text = models.CharField(max_length=255, blank=True)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["sort_order", "id"]


class CourseTechnology(models.Model):
    course = models.ForeignKey(Course, related_name="technologies", on_delete=models.CASCADE)
    label = models.CharField(max_length=80)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["sort_order", "id"]

    def __str__(self):
        return self.label


class PersonalInfoPage(models.Model):
    class PageKind(models.TextChoices):
        FAMILY = "family", "Family information (home)"
        PERSONAL_LIFE = "personal_life", "Personal life (nav page)"

    slug = models.SlugField(max_length=80, unique=True, default="family-information")
    page_kind = models.CharField(
        max_length=20,
        choices=PageKind.choices,
        default=PageKind.FAMILY,
        help_text="Family and personal life stay on separate pages.",
    )
    title = models.CharField(max_length=200, default="Family Information")
    subtitle = models.TextField(
        blank=True,
        default="Family and personal details (managed from Django admin).",
    )
    home_summary = models.TextField(
        blank=True,
        help_text="Short intro on the main portfolio page (not the full detail list).",
    )
    home_image = models.FileField(
        upload_to="personal_info/home/",
        blank=True,
        null=True,
        help_text="Teaser image on the home page section.",
    )
    home_image_url = models.CharField(
        max_length=500,
        blank=True,
        help_text="Or path on the Next.js site (e.g. /media/maruf.jpeg) if no upload.",
    )
    show_on_home = models.BooleanField(
        default=True,
        help_text="Show the Personal Information section on the main page.",
    )

    class Meta:
        verbose_name = "★ Personal Information"
        verbose_name_plural = "★ Personal Information"

    def __str__(self):
        return self.title

    def resolve_home_image_url(self, request=None):
        if self.home_image:
            url = self.home_image.url
            if request:
                return request.build_absolute_uri(url)
            return url
        return self.home_image_url or ""


class PersonalInfoSection(models.Model):
    page = models.ForeignKey(
        PersonalInfoPage, related_name="sections", on_delete=models.CASCADE
    )
    title = models.CharField(max_length=120)
    description = models.TextField(
        blank=True,
        help_text="Optional longer text — shown only on the full Personal Info page.",
    )
    image = models.FileField(
        upload_to="personal_info/sections/",
        blank=True,
        null=True,
        help_text="Optional image for this section on the detail page.",
    )
    image_url = models.CharField(
        max_length=500,
        blank=True,
        help_text="Or image path on the Next.js site (e.g. /media/photo.jpg).",
    )
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["sort_order", "id"]
        verbose_name = "Personal info — section"
        verbose_name_plural = "Personal info — sections (add fields here)"

    def __str__(self):
        return self.title

    def resolve_image_url(self, request=None):
        if self.image:
            url = self.image.url
            if request:
                return request.build_absolute_uri(url)
            return url
        return self.image_url or ""


class PersonalInfoEntry(models.Model):
    section = models.ForeignKey(
        PersonalInfoSection, related_name="entries", on_delete=models.CASCADE
    )
    label = models.CharField(max_length=200)
    value = models.TextField(blank=True)
    image = models.FileField(
        upload_to="personal_info/members/",
        blank=True,
        null=True,
        help_text="Optional photo (e.g. family member on family page).",
    )
    image_url = models.CharField(
        max_length=500,
        blank=True,
        default="",
        help_text="Or path on the Next.js site (e.g. /media/father.jpg).",
    )
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["sort_order", "id"]
        verbose_name = "Personal info field"
        verbose_name_plural = "Personal info fields"

    def __str__(self):
        return self.label

    def resolve_image_url(self, request=None):
        if self.image:
            url = self.image.url
            if request:
                return request.build_absolute_uri(url)
            return url
        return self.image_url or ""


class ResearchPublication(models.Model):
    class PublicationType(models.TextChoices):
        JOURNAL = "journal", "Journal"
        CONFERENCE = "conference", "Conference"

    title = models.CharField(max_length=500)
    publication_type = models.CharField(
        max_length=20, choices=PublicationType.choices, default=PublicationType.JOURNAL
    )
    journal_name = models.CharField(max_length=255, blank=True)
    conference_name = models.CharField(max_length=255, blank=True)
    doi = models.CharField(max_length=120, blank=True)
    year = models.PositiveIntegerField(null=True, blank=True)
    authors = models.CharField(max_length=500, blank=True)
    abstract = models.TextField(blank=True)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["sort_order", "id"]
        verbose_name = "Research paper"
        verbose_name_plural = "★ Research & publications"

    def __str__(self):
        return self.title


class ContactMessage(models.Model):
    name = models.CharField(max_length=120)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    email_sent = models.BooleanField(default=False)
    email_error = models.CharField(max_length=500, blank=True)

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "Contact message"
        verbose_name_plural = "★ Contact form messages"

    def __str__(self):
        return f"{self.name} ({self.email})"


class Achievement(models.Model):
    emoji = models.CharField(max_length=8, default="🏆")
    title = models.CharField(max_length=200)
    description = models.TextField()
    certificate_url = models.URLField(max_length=500, blank=True)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["sort_order", "id"]