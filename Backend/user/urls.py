from django.urls import path
from .views import (
    LoginView,
    RegisterView,
    ConfirmEmailView,
    GoogleAuthView,
    FacebookAuthView,
    get_user_details,
    DesignerProfileListCreateAPIView,
    DesignerProfileRetrieveUpdateAPIView,
    ClientProfileCreateAPIView,
    ClientProfileRetrieveUpdateAPIView,
    UserVerficationAPIView,
    DesignerSubmitSampleAPIView,

)
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path("login/", LoginView.as_view(), name="login"),
    path("refresh/", TokenRefreshView.as_view(), name="refresh"),
    path("details/", get_user_details, name="user_details"),
    path("register/", RegisterView.as_view(), name="register"),
    path("verify/", UserVerficationAPIView.as_view(), name="user_verify"),
    path(
        "confirm-email/<str:email>/<str:token>/",
        ConfirmEmailView.as_view(),
        name="confirm_email",
    ),
    path("auth/google/", GoogleAuthView.as_view(), name="google_auth"),
    path("auth/facebook/", FacebookAuthView.as_view(), name="facebook_auth"),
    path(
        "profile/designer/",
        DesignerProfileListCreateAPIView.as_view(),
        name="designer_profile_create",
    ),
    path(
        "profile/designer/<int:user__pk>",
        DesignerProfileRetrieveUpdateAPIView.as_view(),
        name="designerprofile-detail",
    ),
    path("profile/designer/samples/", DesignerSubmitSampleAPIView.as_view()),
    path(
        "profile/client/",
        ClientProfileCreateAPIView.as_view(),
        name="client_profile_create",
    ),
    path(
        "profile/client/<int:user__pk>",
        ClientProfileRetrieveUpdateAPIView.as_view(),
        name="client_profile_retrieve",
    ),
    # path("profile/client/convert/<int:user__pk>",)
]
