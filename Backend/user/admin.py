from django.contrib import admin
from .models import User, DesignerProfile, ClientProfile, SampleDesign, UserVerification
from django.contrib.admin.widgets import AdminFileWidget
from django.db import models
from django.utils.safestring import mark_safe

admin.site.register(User)


class AdminImageWidget(AdminFileWidget):
    def render(self, name, value, attrs=None, renderer=None):
        output = []
        if value and getattr(value, "url", None):
            image_url = value.url
            file_name = str(value)
            output.append(
                ' <a href="%s" target="_blank"><img src="%s" alt="%s" width="300"  style="object-fit: cover;"/></a> %s '
                % (image_url, image_url, file_name, "")
            )
        output.append(super(AdminFileWidget, self).render(name, value, attrs))
        return mark_safe("".join(output))


class SampleDesignInline(admin.StackedInline):
    model = SampleDesign
    extra = 0
    formfield_overrides = {models.ImageField: {"widget": AdminImageWidget}}

    def has_delete_permission(self, request, obj=None):
        return False

    def has_add_permission(self, request, obj=None):
        return False


class DesignerProfileAdmin(admin.ModelAdmin):
    list_display = ["firstname", "lastname", "user", "phone"]
    search_fields = ["user__username", "user__email", "phone", "firstname", "lastname"]
    inlines = [SampleDesignInline]


admin.site.register(DesignerProfile, DesignerProfileAdmin)


class ClientProfileAdmin(admin.ModelAdmin):
    list_display = ["firstname", "lastname", "user", "phone"]
    search_fields = ["user__username", "user__email", "phone", "firstname", "lastname"]


admin.site.register(ClientProfile, ClientProfileAdmin)


class UserValidationAdmin(admin.ModelAdmin):
    list_display = ["user", "id_number", "status"]
    search_fields = ["user__username", "user__email", "id_number"]
    list_filter = ["status", "user__user_type"]


admin.site.register(UserVerification, UserValidationAdmin)
