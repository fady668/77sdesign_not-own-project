from django.contrib import admin
from .models import (
    Category,
    Industry,
    ColorPalette,
    SiteSettings,
    Dispute,
    DesignStyle,
    DesignStyleSample,
)

admin.site.register(Category)
admin.site.register(Industry)
admin.site.register(ColorPalette)


class SiteSettingsAdmin(admin.ModelAdmin):
    def has_add_permission(self, request):
        return False

    def has_delete_permission(self, request, obj=None):
        return False


admin.site.register(SiteSettings, SiteSettingsAdmin)
admin.site.register(Dispute)


class DesignStyleSampleInline(admin.StackedInline):
    model = DesignStyleSample
    extra = 1


class DesignStyleAdmin(admin.ModelAdmin):
    inlines = [DesignStyleSampleInline]


admin.site.register(DesignStyle, DesignStyleAdmin)
