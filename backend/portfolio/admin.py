from django.contrib import admin

from .forms import (
    AchievementAdminForm,
    ExperienceHighlightForm,
    ProfileAdminForm,
    ProjectAdminForm,
    ResearchPublicationAdminForm,
)
from .models import (
    Achievement,
    ContactMessage,
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

# Child models are edited only via inlines on their parent (hidden from sidebar).


class ProfileDevSkillInline(admin.StackedInline):
    model = ProfileDevSkill
    extra = 1
    fields = ("line", "sort_order")
    verbose_name_plural = "Development skills (one line per box)"


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    form = ProfileAdminForm
    inlines = [ProfileDevSkillInline]
    list_display = ("full_name", "site_name", "email")
    fieldsets = (
        ("Hero", {"fields": ("site_name", "welcome_title", "full_name", "nickname", "current_study")}),
        ("About", {"fields": ("research_interests",)}),
        (
            "★ CV & Video (resume on website)",
            {
                "description": "Upload Cv pdf file here, or set Cv pdf url. Save, then refresh the Next.js site.",
                "fields": (
                    "show_resume_section",
                    "resume_section_title",
                    "cv_pdf_file",
                    "cv_pdf_url",
                    "show_video_cv",
                    "video_cv_title",
                    "video_cv_subtitle",
                    "video_cv_file",
                    "video_cv_url",
                    "photo_url",
                ),
            },
        ),
        ("Contact", {"fields": ("email", "phone", "location", "contact_intro_title", "contact_intro_text")}),
        ("Footer", {"fields": ("footer_bio", "copyright_year")}),
    )


class ExperienceHighlightInline(admin.StackedInline):
    model = ExperienceHighlight
    form = ExperienceHighlightForm
    extra = 1
    fields = ("text", "sort_order")
    verbose_name_plural = "Job highlights"


class ExperienceLinkInline(admin.StackedInline):
    model = ExperienceLink
    extra = 1
    fields = ("label", "url", "sort_order")
    verbose_name_plural = "Extra links (offer letter, GitHub…)"


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ("title", "company", "badge", "sort_order")
    list_editable = ("sort_order",)
    inlines = [ExperienceHighlightInline, ExperienceLinkInline]


class CourseTechnologyInline(admin.StackedInline):
    model = CourseTechnology
    extra = 2
    fields = ("label", "sort_order")
    verbose_name_plural = "Technologies (one per line)"


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ("title", "provider", "status", "sort_order")
    list_editable = ("sort_order",)
    inlines = [CourseTechnologyInline]


class SkillItemInline(admin.StackedInline):
    model = SkillItem
    extra = 2
    fields = ("label", "is_primary", "sort_order")


@admin.register(SkillGroup)
class SkillGroupAdmin(admin.ModelAdmin):
    list_display = ("title", "sort_order")
    list_editable = ("sort_order",)
    inlines = [SkillItemInline]


@admin.register(SocialLink)
class SocialLinkAdmin(admin.ModelAdmin):
    list_display = ("label", "placement", "url", "sort_order")
    list_filter = ("placement",)
    list_editable = ("sort_order",)


@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ("degree", "institution", "sort_order")
    list_editable = ("sort_order",)


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    form = ProjectAdminForm
    list_display = ("title", "category", "sort_order")
    list_filter = ("category",)
    list_editable = ("sort_order",)
    fieldsets = (
        (None, {"fields": ("title", "subtitle", "category", "sort_order")}),
        ("Content", {"fields": ("description", "image_url")}),
        ("Links", {"fields": ("live_url", "github_url")}),
    )


class PersonalInfoEntryInline(admin.StackedInline):
    model = PersonalInfoEntry
    extra = 2
    fields = ("label", "value", "image", "image_url", "sort_order")


class PersonalInfoSectionInline(admin.StackedInline):
    model = PersonalInfoSection
    extra = 0
    fields = ("title", "sort_order")
    show_change_link = True
    verbose_name_plural = "Sections (Family, Basic details…) — click ✎ to add fields"


@admin.register(PersonalInfoPage)
class PersonalInfoPageAdmin(admin.ModelAdmin):
    list_display = ("title", "slug", "page_kind", "show_on_home")
    list_filter = ("page_kind",)
    list_editable = ("show_on_home",)
    prepopulated_fields = {"slug": ("title",)}
    inlines = [PersonalInfoSectionInline]
    fieldsets = (
        (None, {"fields": ("title", "slug", "page_kind", "subtitle")}),
        (
            "Home page section (summary only)",
            {
                "description": "Main portfolio shows image + summary. Full fields live on the detail page.",
                "fields": ("show_on_home", "home_summary", "home_image", "home_image_url"),
            },
        ),
    )


@admin.register(PersonalInfoSection)
class PersonalInfoSectionAdmin(admin.ModelAdmin):
    list_display = ("title", "page", "sort_order")
    list_editable = ("sort_order",)
    inlines = [PersonalInfoEntryInline]
    fieldsets = (
        (None, {"fields": ("page", "title", "sort_order")}),
        (
            "Detail page only",
            {"fields": ("description", "image", "image_url")},
        ),
    )


@admin.register(ResearchPublication)
class ResearchPublicationAdmin(admin.ModelAdmin):
    form = ResearchPublicationAdminForm
    list_display = ("title", "publication_type", "year", "sort_order")
    list_filter = ("publication_type",)
    list_editable = ("sort_order",)
    fieldsets = (
        (None, {"fields": ("title", "publication_type", "year", "authors", "sort_order")}),
        (
            "Venue",
            {"fields": ("journal_name", "conference_name")},
        ),
        ("DOI", {"fields": ("doi",)}),
        ("Optional", {"fields": ("abstract",), "classes": ("collapse",)}),
    )


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "created_at", "email_sent")
    list_filter = ("email_sent", "created_at")
    search_fields = ("name", "email", "message")
    readonly_fields = (
        "name",
        "email",
        "message",
        "created_at",
        "email_sent",
        "email_error",
    )

    def has_add_permission(self, request):
        return False


@admin.register(Achievement)
class AchievementAdmin(admin.ModelAdmin):
    form = AchievementAdminForm
    list_display = ("title", "emoji", "sort_order")
    list_editable = ("sort_order",)
    fieldsets = (
        (None, {"fields": ("emoji", "title", "sort_order")}),
        ("Details", {"fields": ("description", "certificate_url")}),
    )