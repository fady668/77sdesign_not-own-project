from django.urls import path
from .views import (
    ProjectProposalListCreateAPIView,
    ProjectDeliverableListCreateView,
    ProjectDeliverableUpdateRetrieveDestroyView,
    ProjectCommentListCreateAPIView,
    ProjectCommentRetrieveUpdateDestroyAPIView,
    ProjectViewSet,
    ProjectViewSetReadOnly,
    ProjectMilestoneListCreateView,
    ProjectInviteDesignersView,
    ProjectDesignerInvitationRespondView,
)
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("client", ProjectViewSet, basename="client_project")
router.register("", ProjectViewSetReadOnly, basename="project")

urlpatterns = [
    path("<int:project_id>/invitation/", ProjectInviteDesignersView.as_view()),
    path(
        "designer/invitations/<int:pk>", ProjectDesignerInvitationRespondView.as_view()
    ),
    path("<int:project_id>/proposals/", ProjectProposalListCreateAPIView.as_view()),
    path("<int:project_id>/deliverables/", ProjectDeliverableListCreateView.as_view()),
    path(
        "<int:project_id>/deliverables/<int:pk>/",
        ProjectDeliverableUpdateRetrieveDestroyView.as_view(),
    ),
    path("<int:project_id>/comments/", ProjectCommentListCreateAPIView.as_view()),
    path(
        "<int:project_id>/comments/<int:pk>/",
        ProjectCommentRetrieveUpdateDestroyAPIView.as_view(),
    ),
    path("<int:project_id>/milestones/", ProjectMilestoneListCreateView.as_view()),
]
urlpatterns += router.urls
