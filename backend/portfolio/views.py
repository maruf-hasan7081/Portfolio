from django.conf import settings
from django.core.mail import EmailMessage
from rest_framework import permissions, status, viewsets
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response

from .models import (
    Achievement,
    ContactMessage,
    PersonalInfoEntry,
    PersonalInfoPage,
    PersonalInfoSection,
    ResearchPublication,
    Course,
    CourseTechnology,
    Education,
    Experience,
    ExperienceHighlight,
    ExperienceLink,
    Profile,
    ProfileDevSkill,
    Project,
    SkillGroup,
    SkillItem,
    SocialLink,
)
from .serializers import (
    AchievementSerializer,
    ContactInquirySerializer,
    PersonalInfoEntrySerializer,
    PersonalInfoPageSerializer,
    PersonalInfoSectionSerializer,
    ResearchPublicationSerializer,
    CourseSerializer,
    CourseTechnologySerializer,
    EducationSerializer,
    ExperienceHighlightSerializer,
    ExperienceLinkSerializer,
    ExperienceSerializer,
    ProfileDevSkillSerializer,
    ProfileSerializer,
    ProjectSerializer,
    SkillGroupSerializer,
    SkillItemSerializer,
    SocialLinkSerializer,
)


class ReadPublicWriteStaff(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user and request.user.is_staff


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [ReadPublicWriteStaff]


class SocialLinkViewSet(viewsets.ModelViewSet):
    queryset = SocialLink.objects.all()
    serializer_class = SocialLinkSerializer
    permission_classes = [ReadPublicWriteStaff]


class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer
    permission_classes = [ReadPublicWriteStaff]


class SkillGroupViewSet(viewsets.ModelViewSet):
    queryset = SkillGroup.objects.all()
    serializer_class = SkillGroupSerializer
    permission_classes = [ReadPublicWriteStaff]


class SkillItemViewSet(viewsets.ModelViewSet):
    queryset = SkillItem.objects.all()
    serializer_class = SkillItemSerializer
    permission_classes = [ReadPublicWriteStaff]


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [ReadPublicWriteStaff]


class ExperienceViewSet(viewsets.ModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer
    permission_classes = [ReadPublicWriteStaff]


class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [ReadPublicWriteStaff]


class AchievementViewSet(viewsets.ModelViewSet):
    queryset = Achievement.objects.all()
    serializer_class = AchievementSerializer
    permission_classes = [ReadPublicWriteStaff]


class ResearchPublicationViewSet(viewsets.ModelViewSet):
    queryset = ResearchPublication.objects.all()
    serializer_class = ResearchPublicationSerializer
    permission_classes = [ReadPublicWriteStaff]


class CourseTechnologyViewSet(viewsets.ModelViewSet):
    queryset = CourseTechnology.objects.all()
    serializer_class = CourseTechnologySerializer
    permission_classes = [ReadPublicWriteStaff]


class ExperienceHighlightViewSet(viewsets.ModelViewSet):
    queryset = ExperienceHighlight.objects.all()
    serializer_class = ExperienceHighlightSerializer
    permission_classes = [ReadPublicWriteStaff]


class ExperienceLinkViewSet(viewsets.ModelViewSet):
    queryset = ExperienceLink.objects.all()
    serializer_class = ExperienceLinkSerializer
    permission_classes = [ReadPublicWriteStaff]


class ProfileDevSkillViewSet(viewsets.ModelViewSet):
    queryset = ProfileDevSkill.objects.all()
    serializer_class = ProfileDevSkillSerializer
    permission_classes = [ReadPublicWriteStaff]


class PersonalInfoPageViewSet(viewsets.ModelViewSet):
    queryset = PersonalInfoPage.objects.all()
    serializer_class = PersonalInfoPageSerializer
    permission_classes = [ReadPublicWriteStaff]


class PersonalInfoSectionViewSet(viewsets.ModelViewSet):
    queryset = PersonalInfoSection.objects.all()
    serializer_class = PersonalInfoSectionSerializer
    permission_classes = [ReadPublicWriteStaff]


class PersonalInfoEntryViewSet(viewsets.ModelViewSet):
    queryset = PersonalInfoEntry.objects.all()
    serializer_class = PersonalInfoEntrySerializer
    permission_classes = [ReadPublicWriteStaff]


@api_view(["GET"])
@permission_classes([permissions.AllowAny])
def personal_information_by_slug(request, slug):
    page = PersonalInfoPage.objects.filter(slug=slug).first()
    if not page:
        return Response({"detail": "Not found"}, status=404)
    return Response(PersonalInfoPageSerializer(page, context={"request": request}).data)


@api_view(["GET"])
@permission_classes([permissions.AllowAny])
def portfolio_bundle(request):
    profile = Profile.objects.first()
    profile_data = (
        ProfileSerializer(profile, context={"request": request}).data
        if profile
        else None
    )
    return Response(
        {
            "profile": profile_data,
            "social_links": SocialLinkSerializer(SocialLink.objects.all(), many=True).data,
            "education": EducationSerializer(Education.objects.all(), many=True).data,
            "skill_groups": SkillGroupSerializer(SkillGroup.objects.all(), many=True).data,
            "projects": ProjectSerializer(Project.objects.all(), many=True).data,
            "experiences": ExperienceSerializer(Experience.objects.all(), many=True).data,
            "courses": CourseSerializer(Course.objects.all(), many=True).data,
            "achievements": AchievementSerializer(Achievement.objects.all(), many=True).data,
            "research_publications": ResearchPublicationSerializer(
                ResearchPublication.objects.all(), many=True
            ).data,
            "family_information": (
                PersonalInfoPageSerializer(
                    family_page,
                    context={"request": request},
                ).data
                if (
                    family_page := PersonalInfoPage.objects.prefetch_related(
                        "sections__entries"
                    ).filter(slug="family-information").first()
                )
                else None
            ),
        }
    )


@api_view(["GET"])
@permission_classes([permissions.AllowAny])
def health(request):
    return Response({"status": "ok"})


def _contact_inbox_email():
    inbox = (settings.CONTACT_INBOX_EMAIL or "").strip()
    if inbox:
        return inbox
    profile = Profile.objects.first()
    if profile and profile.email:
        return profile.email.strip()
    return ""


@api_view(["POST"])
@authentication_classes([])
@permission_classes([permissions.AllowAny])
def contact_inquiry(request):
    serializer = ContactInquirySerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    data = serializer.validated_data

    if (data.get("company") or "").strip():
        return Response({"ok": True})

    name = data["name"].strip()
    from_email = data["email"].strip()
    message = data["message"].strip()

    inquiry = ContactMessage.objects.create(
        name=name,
        email=from_email,
        message=message,
    )

    to_email = _contact_inbox_email()
    if not to_email:
        return Response(
            {
                "ok": True,
                "detail": "Message saved. View it in Django admin under Contact form messages.",
            }
        )

    body = (
        f"New message from your portfolio contact form.\n\n"
        f"Name: {name}\n"
        f"Reply-To: {from_email}\n\n"
        f"Message:\n{message}\n"
    )

    mail = EmailMessage(
        subject=f"Portfolio contact from {name}",
        body=body,
        from_email=settings.DEFAULT_FROM_EMAIL,
        to=[to_email],
        reply_to=[from_email],
    )
    try:
        mail.send(fail_silently=False)
    except Exception as exc:
        inquiry.email_error = str(exc)[:500]
        inquiry.save(update_fields=["email_error"])
        return Response(
            {
                "ok": True,
                "detail": (
                    "Message saved. Email was not sent yet — check SMTP or read it in Django admin."
                ),
            }
        )

    inquiry.email_sent = True
    inquiry.save(update_fields=["email_sent"])
    return Response({"ok": True, "detail": "Message sent."})