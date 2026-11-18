from django.urls import include, path
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r"profile", views.ProfileViewSet, basename="profile")
router.register(r"social-links", views.SocialLinkViewSet, basename="social-link")
router.register(r"education", views.EducationViewSet, basename="education")
router.register(r"skill-groups", views.SkillGroupViewSet, basename="skill-group")
router.register(r"skill-items", views.SkillItemViewSet, basename="skill-item")
router.register(r"projects", views.ProjectViewSet, basename="project")
router.register(r"experiences", views.ExperienceViewSet, basename="experience")
router.register(r"courses", views.CourseViewSet, basename="course")
router.register(r"achievements", views.AchievementViewSet, basename="achievement")
router.register(
    r"research-publications",
    views.ResearchPublicationViewSet,
    basename="research-publication",
)
router.register(r"personal-info-pages", views.PersonalInfoPageViewSet, basename="personal-info-page")
router.register(r"personal-info-sections", views.PersonalInfoSectionViewSet, basename="personal-info-section")
router.register(r"personal-info-entries", views.PersonalInfoEntryViewSet, basename="personal-info-entry")
router.register(r"course-technologies", views.CourseTechnologyViewSet, basename="course-technology")
router.register(r"experience-highlights", views.ExperienceHighlightViewSet, basename="experience-highlight")
router.register(r"experience-links", views.ExperienceLinkViewSet, basename="experience-link")
router.register(r"profile-dev-skills", views.ProfileDevSkillViewSet, basename="profile-dev-skill")

urlpatterns = [
    path("", include(router.urls)),
    path("portfolio/", views.portfolio_bundle, name="portfolio-bundle"),
    path(
        "personal-information/<slug:slug>/",
        views.personal_information_by_slug,
        name="personal-information-slug",
    ),
    path("health/", views.health, name="health"),
    path("contact/", views.contact_inquiry, name="contact-inquiry"),
]