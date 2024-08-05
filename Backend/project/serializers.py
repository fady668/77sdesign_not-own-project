from django.utils import timezone
from rest_framework import serializers
from .models import (
    Project,
    ProjectProposal,
    ProjectDeliverable,
    ProjectDeliverableAttachment,
    ProjectComment,
    ProjectMilestone,
    ProjectInvitation,
)
from core.serializers import DynamicFieldsModelSerializer
from django.db import transaction
from user.models import User


class ProjectSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"
        read_only_fields = ["owner", "status"]


class ProjectInvitationSerializer(serializers.ModelSerializer):
    designers = serializers.ListField(
        child=serializers.PrimaryKeyRelatedField(queryset=User.objects.all()),
        write_only=True,
    )

    class Meta:
        model = ProjectInvitation
        exclude = [
            "designer",
        ]
        read_only_fields = ["project", "status"]

    @transaction.atomic
    def create(self, validated_data):
        designers = validated_data.pop("designers")
        invitations = []
        for designer in designers:
            try:
                user = User.objects.get(id=designer.id)
            except User.DoesNotExist:
                raise serializers.ValidationError(
                    {"detail": f"Designer with id {designer.id} does not exist"}
                )
            if not user.is_designer:
                raise serializers.ValidationError(
                    {"detail": f"Designer with id {designer.id} does not exist"}
                )
            invitations.append(
                ProjectInvitation(project=validated_data["project"], designer=designer)
            )

        invitations = ProjectInvitation.objects.bulk_create(invitations)
        return invitations


class ProjectInvitationRespondSerializer(serializers.ModelSerializer):
    accepted = serializers.BooleanField(write_only=True)

    class Meta:
        model = ProjectInvitation
        exclude = [
            "designer",
        ]
        read_only_fields = ["project", "status"]

    def update(self, instance, validated_data):
        instance.status = (
            ProjectInvitation.Status.ACCEPTED
            if validated_data.get("accepted")
            else ProjectInvitation.Status.DECLINED
        )
        instance.save()
        return instance


class ProjectProposalSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectProposal
        fields = "__all__"
        read_only_fields = ["project", "designer"]


class ProjectMilestoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectMilestone
        fields = ["name", "amount", "deadline"]


class ProjectDeliverableAttachmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectDeliverableAttachment
        exclude = [
            "deliverable",
        ]
        read_only_fields = ["created_at", "updated_at"]


class ProjectDeliverableSerializer(serializers.ModelSerializer):
    attachments = ProjectDeliverableAttachmentSerializer(many=True)

    class Meta:
        model = ProjectDeliverable
        fields = "__all__"
        read_only_fields = ["project", "designer"]

    @transaction.atomic
    def create(self, validated_data):
        attachments = validated_data.pop("attachments")
        deliverable = ProjectDeliverable.objects.create(**validated_data)
        ProjectDeliverableAttachment.objects.bulk_create(
            [
                ProjectDeliverableAttachment(
                    deliverable=deliverable,
                    **attachment,
                    created_at=timezone.now(),
                    modified_at=timezone.now(),
                )
                for attachment in attachments
            ]
        )
        return deliverable

    @transaction.atomic
    def update(self, instance, validated_data):
        attachments = validated_data.pop("attachments")
        instance.name = validated_data.get("name", instance.name)
        instance.description = validated_data.get("description", instance.description)
        instance.save()
        ProjectDeliverableAttachment.objects.bulk_create(
            [
                ProjectDeliverableAttachment(
                    deliverable=instance,
                    **attachment,
                    created_at=timezone.now(),
                    modified_at=timezone.now(),
                )
                for attachment in attachments
            ]
        )
        return instance


class ProjectCommentReplySerialzier(serializers.ModelSerializer):
    class Meta:
        model = ProjectComment
        exclude = [
            "parent",
        ]
        read_only_fields = ["project", "owner"]
        ordering = [
            "-created_at",
        ]


class ProjectCommentSerializer(serializers.ModelSerializer):
    replies = serializers.SerializerMethodField()

    class Meta:
        model = ProjectComment
        fields = "__all__"
        read_only_fields = ["project", "owner"]
        write_only_fields = [
            "parent",
        ]
        ordering = [
            "-created_at",
        ]

    def get_replies(self, obj):
        replies = ProjectComment.objects.filter(parent=obj)
        serializer = ProjectCommentReplySerialzier(replies, many=True)
        return serializer.data


class ProjectCommentUpdateSerializer(serializers.ModelSerializer):
    replies = serializers.SerializerMethodField()

    class Meta:
        model = ProjectComment
        fields = "__all__"
        read_only_fields = ["project", "owner", "parent", "x", "y"]
        ordering = [
            "-created_at",
        ]

    def get_replies(self, obj):
        replies = ProjectComment.objects.filter(parent=obj)
        serializer = ProjectCommentReplySerialzier(replies, many=True)
        return serializer.data
