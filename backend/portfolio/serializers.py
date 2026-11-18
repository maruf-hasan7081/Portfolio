from rest_framework import serializers

from .models import (
    Achievement,
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


class SocialLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialLink
        fields = "__all__"


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = "__all__"


class SkillItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = SkillItem
        fields = "__all__"


class SkillGroupSerializer(serializers.ModelSerializer):
    items = SkillItemSerializer(many=True, read_only=True)

    class Meta:
        model = SkillGroup
        fields = "__all__"


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"


class ExperienceHighlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExperienceHighlight
        fields = "__all__"


class ExperienceLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExperienceLink
        fields = "__all__"


class ExperienceSerializer(serializers.ModelSerializer):
    highlights = serializers.SerializerMethodField()
    links = serializers.SerializerMethodField()

    class Meta:
        model = Experience
        fields = "__all__"

    def get_highlights(self, obj):
        return list(obj.highlight_lines.values_list("text", flat=True))

    def get_links(self, obj):
        return [
            {"label": link.label, "url": link.url}
            for link in obj.action_links.all()
        ]


class CourseTechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseTechnology
        fields = "__all__"


class CourseSerializer(serializers.ModelSerializer):
    technologies = serializers.SerializerMethodField()

    class Meta:
        model = Course
        fields = "__all__"

    def get_technologies(self, obj):
        return list(obj.technologies.values_list("label", flat=True))


class AchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievement
        fields = "__all__"


class ResearchPublicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResearchPublication
        fields = "__all__"


class ProfileDevSkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileDevSkill
        fields = "__all__"


class ProfileSerializer(serializers.ModelSerializer):
    development_skills = serializers.SerializerMethodField()

    class Meta:
        model = Profile
        fields = "__all__"

    def get_development_skills(self, obj):
        return list(obj.development_skill_lines.values_list("line", flat=True))

    def to_representation(self, instance):
        data = super().to_representation(instance)
        request = self.context.get("request")
        data["cv_pdf_url"] = instance.resolve_cv_pdf_url(request)
        data["video_cv_url"] = instance.resolve_video_cv_url(request)
        if instance.updated_at:
            data["updated_at"] = instance.updated_at.isoformat()
        return data


class ContactInquirySerializer(serializers.Serializer):
    name = serializers.CharField(min_length=2, max_length=120)
    email = serializers.EmailField(max_length=254)
    message = serializers.CharField(min_length=10, max_length=5000)
    company = serializers.CharField(required=False, allow_blank=True, max_length=200)


class PersonalInfoEntrySerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = PersonalInfoEntry
        fields = ["id", "section", "label", "value", "image_url", "sort_order"]

    def get_image_url(self, obj):
        request = self.context.get("request")
        return obj.resolve_image_url(request)


class PersonalInfoSectionSerializer(serializers.ModelSerializer):
    entries = PersonalInfoEntrySerializer(many=True, read_only=True)
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = PersonalInfoSection
        fields = [
            "id",
            "page",
            "title",
            "description",
            "image_url",
            "sort_order",
            "entries",
        ]

    def get_image_url(self, obj):
        request = self.context.get("request")
        return obj.resolve_image_url(request)


class PersonalInfoPageSerializer(serializers.ModelSerializer):
    sections = PersonalInfoSectionSerializer(many=True, read_only=True)
    home_image_url = serializers.SerializerMethodField()

    class Meta:
        model = PersonalInfoPage
        fields = [
            "id",
            "slug",
            "page_kind",
            "title",
            "subtitle",
            "home_summary",
            "home_image_url",
            "show_on_home",
            "sections",
        ]

    def get_home_image_url(self, obj):
        request = self.context.get("request")
        return obj.resolve_home_image_url(request)