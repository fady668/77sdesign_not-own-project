from rest_framework import generics, permissions, serializers, viewsets
from .models import (
    Project,
    ProjectMilestone,
    ProjectProposal,
    ProjectInvitation,
    ProjectDeliverable,
    ProjectDeliverableAttachment,
    ProjectComment,
    ProjectAttachment,
    ProjectDeliverable,
)
from .serializers import (
    ProjectSerializer,
    ProjectMilestoneSerializer,
    ProjectProposalSerializer,
    ProjectInvitationSerializer,
    ProjectInvitationRespondSerializer,
    ProjectDeliverableSerializer,
    ProjectDeliverableAttachmentSerializer,
    ProjectCommentSerializer,
    ProjectCommentUpdateSerializer,
)
from user.permissions import IsClient, IsOwner, IsOwnerOrReadOnly
from django.db import IntegrityError
import django_filters
from haystack.query import SearchQuerySet
from rest_framework.response import Response
from django.shortcuts import get_object_or_404


class ProductFilter(django_filters.FilterSet):
    min_budget = django_filters.NumberFilter(field_name="budget", lookup_expr="gte")
    max_budget = django_filters.NumberFilter(field_name="budget", lookup_expr="lte")

    class Meta:
        model = Project
        fields = ["category", "industry"]


class ProjectViewSetReadOnly(viewsets.ReadOnlyModelViewSet):
    """List / retrieve projects"""

    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [
        permissions.AllowAny,
    ]
    filterset_class = ProductFilter

    def get_queryset(self):
        if query := self.request.query_params.get("q"):
            results = (
                SearchQuerySet()
                .models(Project)
                .filter(text=query)
                .values_list("pk", flat=True)
            )
            return super().get_queryset().filter(id__in=results, is_listed=True)
        return super().get_queryset()


class ProjectViewSet(viewsets.ModelViewSet):
    """CRUD operations for projects"""

    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [IsClient & IsOwner]

    def get_queryset(self):
        if status := self.request.query_params.get("status"):
            return super().get_queryset().filter(owner=self.request.user, status=status)
        return super().get_queryset().filter(owner=self.request.user)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ProjectMilestoneListCreateView(generics.ListCreateAPIView):
    """List milestones for the project or create a new one"""

    queryset = ProjectMilestone.objects.all()
    serializer_class = ProjectMilestoneSerializer
    pagination_class = None

    def get_queryset(self):
        project = Project.objects.get(id=self.kwargs["project_id"])
        if project.owner != self.request.user and project.designer != self.request.user:
            raise serializers.ValidationError(
                {"message": "You do not have permission to access this resource."}
            )
        return super().get_queryset().filter(project=self.kwargs["project_id"])

    def perform_create(self, serializer):
        project = get_object_or_404(Project, id=self.kwargs["project_id"])
        if project.owner != self.request.user:
            raise serializers.ValidationError(
                {"message": "You are not the owner of this project."}
            )
        serializer.save(project=project)


class ProjectInviteDesignersView(generics.CreateAPIView):
    """Invite designers to the project"""

    queryset = ProjectInvitation.objects.all()
    serializer_class = ProjectInvitationSerializer
    permission_classes = [IsClient]

    def create(self, request, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response({"message": "Invitations sent successfully."})

    def perform_create(self, serializer):
        project = get_object_or_404(Project, id=self.kwargs["project_id"])
        if project.owner != self.request.user:
            raise serializers.ValidationError(
                {"message": "You are not the owner of this project."}
            )
        serializer.save(project=project)


class ProjectDesignerInvitationRespondView(generics.UpdateAPIView):
    """List designer invitations for the project or respond to one"""

    queryset = ProjectInvitation.objects.all()
    serializer_class = ProjectInvitationRespondSerializer

    def get_queryset(self):
        return self.queryset.filter(designer=self.request.user)


class ProjectProposalListCreateAPIView(generics.ListCreateAPIView):
    """List project's proposals or create a new proposal"""

    queryset = ProjectProposal.objects.all()
    serializer_class = ProjectProposalSerializer
    permission_classes = [IsClient & IsOwner]

    def get_queryset(self):
        return self.queryset.filter(project=self.kwargs["project_id"])

    def perform_create(self, serializer):
        project = Project.objects.get(id=self.kwargs["project_id"])
        try:
            serializer.save(designer=self.request.user, project=project)
        except IntegrityError:
            raise serializers.ValidationError(
                {"message": "You have already submitted a proposal for this project."}
            )


class ProjectDeliverableListCreateView(generics.ListCreateAPIView):
    """List designer deliverables for the project or upload them"""

    queryset = ProjectDeliverable.objects.all().prefetch_related("attachments")
    serializer_class = ProjectDeliverableSerializer

    # TODO: Add permission classes

    def get_queryset(self):
        return self.queryset.filter(project=self.kwargs["project_id"])

    def perform_create(self, serializer):
        project = Project.objects.get(id=self.kwargs["project_id"])
        serializer.save(project=project)


class ProjectDeliverableUpdateRetrieveDestroyView(
    generics.RetrieveUpdateDestroyAPIView
):
    """Retrieve, Update or delete a deliverable"""

    queryset = ProjectDeliverable.objects.all()
    serializer_class = ProjectDeliverableSerializer


class ProjectCommentListCreateAPIView(generics.ListCreateAPIView):
    """List project comments or create a new comment"""

    queryset = ProjectComment.objects.all()
    serializer_class = ProjectCommentSerializer

    # TODO: Add permission classes

    def get_queryset(self):
        return self.queryset.filter(project=self.kwargs["project_id"], parent=None)

    def perform_create(self, serializer):
        project = Project.objects.get(id=self.kwargs["project_id"])
        serializer.save(project=project, owner=self.request.user)


class ProjectCommentRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    """Update or delete a comment"""

    queryset = ProjectComment.objects.all()
    serializer_class = ProjectCommentUpdateSerializer
    lookup_field = "pk"
