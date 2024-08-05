from rest_framework import serializers
from .models import (
    Contest,
    ContestSubmission,
    ContestSubmissionImage,
    ContestInvitation,
)
from django.db import transaction, IntegrityError
from user.models import User


class ContestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contest
        fields = "__all__"
        read_only_fields = ["owner", "status"]
    #temp exclude till form update
    def create(self, validated_data):
        # Remove the fields if present in validated_data
        validated_data.pop('round_one_finalists', None)
        validated_data.pop('round_two_finalists', None)
        return super().create(validated_data)

    def update(self, instance, validated_data):
        # Remove the fields if present in validated_data
        validated_data.pop('round_one_finalists', None)
        validated_data.pop('round_two_finalists', None)
        return super().update(instance, validated_data)


class ContestInvitationSerializer(serializers.ModelSerializer):
    designers = serializers.ListField(
        child=serializers.PrimaryKeyRelatedField(queryset=User.objects.all()),
        write_only=True,
    )

    class Meta:
        model = ContestInvitation
        fields = "__all__"
        read_only_fields = ["contest", "status", "designer"]

    @transaction.atomic
    def create(self, validated_data):
        designers = validated_data.pop("designers")
        invitations = []
        for designer in designers:
            invitations.append(
                ContestInvitation(
                    contest_id=validated_data.get("contest"), designer=designer
                )
            )
        try:
            invitations_objs = ContestInvitation.objects.bulk_create(invitations)
        except IntegrityError:
            raise serializers.ValidationError(
                {
                    "detail": "Invitation to some designers already exists for this contest"
                }
            )
        return invitations_objs


class ContestSubmissionImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContestSubmissionImage
        fields = "__all__"
        read_only_fields = ["contest_submission"]


class ContestSubmissionSerializer(serializers.ModelSerializer):
    images_list = serializers.ListField(child=serializers.ImageField(), write_only=True)
    images = ContestSubmissionImageSerializer(many=True, read_only=True)

    class Meta:
        model = ContestSubmission
        exclude = ["is_deleted"]
        read_only_fields = [
            "contest",
            "designer",
            "created_at",
            "updated_at",
            "is_winner",
        ]

    @transaction.atomic
    def create(self, validated_data):
        images = validated_data.pop("images_list")
        contest_submission = super().create(validated_data)
        contest_submission_images = []
        for image in images:
            ContestSubmissionImage(contest_submission=contest_submission, image=image)
        ContestSubmissionImage.objects.bulk_create(contest_submission_images)
        return contest_submission
