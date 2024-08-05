from django.contrib import admin
from .models import Project, ProjectDeliverable, ProjectMilestone, ProjectInvitation

admin.site.register(ProjectInvitation)


class ProjectDeliverableInline(admin.StackedInline):
    model = ProjectDeliverable
    extra = 0


class ProjectMilestoneInline(admin.StackedInline):
    model = ProjectMilestone
    extra = 0


class ProjectAdmin(admin.ModelAdmin):
    list_display = ["name", "owner", "status"]
    search_fields = ["name", "owner__username", "owner__email", "description"]
    inlines = [ProjectDeliverableInline, ProjectMilestoneInline]


admin.site.register(Project, ProjectAdmin)
