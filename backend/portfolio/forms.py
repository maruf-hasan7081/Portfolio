from django import forms

from .models import Achievement, ExperienceHighlight, Profile, Project, ResearchPublication


class ProfileAdminForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = "__all__"
        widgets = {
            "research_interests": forms.Textarea(attrs={"rows": 4, "placeholder": "AI, ML, NLP…"}),
            "contact_intro_text": forms.Textarea(attrs={"rows": 4}),
            "footer_bio": forms.Textarea(attrs={"rows": 3}),
            "video_cv_subtitle": forms.Textarea(attrs={"rows": 2}),
        }


class ProjectAdminForm(forms.ModelForm):
    class Meta:
        model = Project
        fields = "__all__"
        widgets = {
            "description": forms.Textarea(attrs={"rows": 5, "placeholder": "Short project summary"}),
        }


class AchievementAdminForm(forms.ModelForm):
    class Meta:
        model = Achievement
        fields = "__all__"
        widgets = {
            "description": forms.Textarea(attrs={"rows": 4}),
        }


class ExperienceHighlightForm(forms.ModelForm):
    class Meta:
        model = ExperienceHighlight
        fields = "__all__"
        widgets = {
            "text": forms.Textarea(attrs={"rows": 2, "cols": 60}),
        }


class ResearchPublicationAdminForm(forms.ModelForm):
    class Meta:
        model = ResearchPublication
        fields = "__all__"
        widgets = {
            "title": forms.TextInput(attrs={"class": "vLargeTextField", "size": 80}),
            "abstract": forms.Textarea(attrs={"rows": 3}),
        }