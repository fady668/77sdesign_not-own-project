from django.urls import path
from .views import (
    ContestClientViewSet,
    ContestReadOnlyViewSet,
    ContestSubmissionViewSet,
    ContestInvitationViewSet,
)
from rest_framework_extensions.routers import ExtendedDefaultRouter
from rest_framework.routers import DefaultRouter

router = ExtendedDefaultRouter()
router.register("client", ContestClientViewSet, basename="contest_client")
contest = router.register("", ContestReadOnlyViewSet, basename="contest")
contest.register(
    "invitation",
    ContestInvitationViewSet,
    basename="contest_invitation",
    parents_query_lookups=["contest"],
)
contest.register(
    "submission",
    ContestSubmissionViewSet,
    basename="contest_submission",
    parents_query_lookups=["contest"],
)
urlpatterns = []
urlpatterns += router.urls
