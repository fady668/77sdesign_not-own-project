from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from .views import *
admin.site.site_header = "77s Designs Admin Panel"
admin.site.site_title = "77s Designs Admin Panel"

urlpatterns = [
    path("admin/", admin.site.urls),
    re_path("^(?P<version>(v1.0))/user/", include("user.urls")),
    re_path("^(?P<version>(v1.0))/core/", include("core.urls")),
    re_path("^(?P<version>(v1.0))/project/", include("project.urls")),
    re_path("^(?P<version>(v1.0))/contest/", include("contest.urls")),
    re_path("^(?P<version>(v1.0))/payment/", include("payment.urls")),
    path("api/schema/", SpectacularAPIView.as_view(), name="schema"),
    path("sendo",sendo),
    path("docs/", SpectacularSwaggerView.as_view(url_name="schema"), name="swagger-ui"),
]
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
