from django.contrib import admin
from .models import Contest, Package, ContestInvitation, LogoContest


class ContestAdmin(admin.ModelAdmin):
    list_display = ["name", "owner", "status"]
    search_fields = ["name", "owner__username", "owner__email", "description"]


admin.site.register(Package)
admin.site.register(Contest, ContestAdmin)
admin.site.register(ContestInvitation)
admin.site.register(LogoContest)
