from rest_framework import viewsets
from .models import Contest, ContestSubmission, ContestInvitation
from .serializers import (
    ContestSerializer,
    ContestSubmissionSerializer,
    ContestInvitationSerializer,
)
from user.permissions import IsClient, IsOwner, IsDesigner
from rest_framework import permissions
from rest_framework.response import Response

from rest_framework.permissions import AllowAny
from rest_framework.permissions import BasePermission

######## original code ########
# class ContestClientViewSet(viewsets.ModelViewSet):
#     queryset = Contest.objects.all()
#     serializer_class = ContestSerializer
#     permission_classes = [IsClient & IsOwner]

#     def get_queryset(self):
#         return super().get_queryset().filter(owner=self.request.user)

#     def perform_create(self, serializer):
#         serializer.save(owner=self.request.user)

#Re-code to test #don't forget img upload & user assign
class NoPermission(BasePermission):
    def has_permission(self, request, view):
        return True  # Allow any access
    
class ContestClientViewSet(viewsets.ModelViewSet):
    queryset = Contest.objects.all()
    serializer_class = ContestSerializer
    permission_classes = [NoPermission]

    def perform_create(self, serializer):
        # Save the contest instance first
        contest = serializer.save()

        # Ensure many-to-many fields are set correctly
        if 'round_one_finalists' in self.request.data:
            round_one_finalists_ids = self.request.data['round_one_finalists']
            contest.round_one_finalists.set(round_one_finalists_ids)

        if 'round_two_finalists' in self.request.data:
            round_two_finalists_ids = self.request.data['round_two_finalists']
            contest.round_two_finalists.set(round_two_finalists_ids)

        # Save the contest instance again if necessary
        contest.save()


class ContestInvitationViewSet(viewsets.ModelViewSet):
    queryset = ContestInvitation.objects.all()
    serializer_class = ContestInvitationSerializer
    permission_classes = [IsClient & IsOwner]

    def get_queryset(self):
        return super().get_queryset().filter(contest__owner=self.request.user)

    def perform_create(self, serializer):
        serializer.save(contest=self.kwargs.get("parent_lookup_contest"))

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response({"message": "Invitations sent successfully."}, status=201)


class ContestReadOnlyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Contest.objects.all()
    serializer_class = ContestSerializer
    permission_classes = (permissions.AllowAny,)


class ContestSubmissionViewSet(viewsets.ModelViewSet):
    queryset = ContestSubmission.objects.all()
    serializer_class = ContestSubmissionSerializer
    permission_classes = [IsDesigner]
    lookup_field = "contest"

    def get_queryset(self):
        return super().get_queryset().filter(contest=self.kwargs[self.lookup_field])

    def perform_create(self, serializer):
        print(self.kwargs)
        serializer.save(
            designer=self.request.user,
            contest_id=self.kwargs["parent_lookup_" + self.lookup_field],
        )
