from django.conf import settings
from rest_framework import serializers
from .models import User, DesignerProfile, ClientProfile, UserVerification, SampleDesign
from .utils import Google, Facebook
from core.models import Category
from core.serializers import DynamicFieldsModelSerializer
from Design77s.logging import logger
from django.db import IntegrityError
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.http import JsonResponse
from rest_framework import status
import base64
from urllib.parse import urlparse

class LoginTokenSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data["access"] = str(refresh.access_token)
        data["refresh"] = str(refresh)

        data["user"] = UserSerializer(self.user).data

        return data


class RegisterSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(max_length=128, write_only=True)
    user_type = serializers.CharField(write_only=True)



class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(max_length=128, write_only=True)


class GoogleAuthSerializer(serializers.Serializer):
    auth_token = serializers.CharField(write_only=True)
    user_type = serializers.ChoiceField(
        choices=User.UserType.choices, write_only=True, required=False
    )

    def validate_auth_token(self, auth_token):
        user_data = Google.validate(auth_token)
        try:
            user_data["sub"]
        except KeyError:
            raise serializers.ValidationError(
                "The token is either invalid or expired. Please login again."
            )
        if user_data["aud"] != settings.GOOGLE_CLIENT_ID:
            raise serializers.ValidationError("Invalid user.")
        return user_data


class FacebookAuthSerializer(serializers.Serializer):
    access_token = serializers.CharField(max_length=255, write_only=True)
    user_type = serializers.ChoiceField(
        choices=User.UserType.choices, write_only=True, required=False
    )

    def validate_access_token(self, access_token):
        user_data = Facebook.validate(access_token)
        print(user_data)
        try:
            user_data["email"]
            user_data["name"]
        except KeyError:
            raise serializers.ValidationError(
                "The token is either invalid or expired. Please login again."
            )
        return user_data


class UserSerializer(serializers.ModelSerializer):
    profile_completed = serializers.SerializerMethodField()
    verification_status = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = (
            "id",
            "email",
            "username",
            "user_type",
            "password",
            "is_verified",
            "date_joined",
            "profile_completed",
            "verification_status"
        )
        extra_kwargs = {"password": {"write_only": True}}

    def get_profile_completed(self, obj):
        if obj.profile:
            return True
        return False

    def get_verification_status(self, obj):
        try:
            verification = UserVerification.objects.get(user=obj)
            return verification.get_status_display()
        except UserVerification.DoesNotExist:
            return "not_verified"


class SampleDesignsSubmitSerializer(serializers.Serializer):
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())
    samples = serializers.ListField(
        child=serializers.ImageField(max_length=None, use_url=True)
    )

    def create(self, validated_data):
        request = self.context.get("request")
        samples = validated_data.get("samples")
        category = validated_data.get("category")
        samples_list = []
        for sample in samples:
            obj = SampleDesign.objects.create(
                profile=self.context["request"].user.profile,
                category=category,
                image=sample,
            )
            samples_list.append(request.build_absolute_uri(obj.image.url))
        validated_data["samples"] = samples_list
        print(validated_data)
        return validated_data


class SampleDesignSerializer(serializers.ModelSerializer):
    class Meta:
        model = SampleDesign
        fields = ["id", "image", "category"]


class DesignerProfileSerializer(DynamicFieldsModelSerializer):
    user = UserSerializer(read_only=True)
    sample_designs = SampleDesignSerializer(read_only=True, many=True)

    class Meta:
        model = DesignerProfile
        fields = "__all__"
        read_only_fields = ("rating",)

    def get_avatar(self, obj):
        if obj.avatar:
            with open(obj.avatar.path, "rb") as image_file:
                encoded_string = base64.b64encode(image_file.read())
                return encoded_string.decode("utf-8")
        return None


    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['avatar'] = self.get_avatar(instance)

        return representation

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        sample_designs = representation.get('sample_designs')
        representation['avatar'] = self.get_avatar(instance)
        if sample_designs:
            for sample_design in sample_designs:
                image_path = sample_design.get('image')
                if image_path:
                    # Remove protocol and hostname from the URL
                    relative_path = image_path.split('/media/', 1)[-1]
                    with open(settings.MEDIA_ROOT + '/' +relative_path, "rb") as image_file:
                        encoded_string = base64.b64encode(image_file.read())
                        sample_design['image'] = encoded_string.decode("utf-8")
        return representation
    def create(self, validated_data):
        try:
            profile, created = DesignerProfile.objects.get_or_create(
                user=self.context["request"].user, defaults=validated_data
            )
            if not created:
                raise serializers.ValidationError(
                    {"detail": "The user already has a designer profile."}
                )
            return profile
        except IntegrityError as e:
            logger.error(e)
            raise serializers.ValidationError({"detail": "Error creating profile."})


class ClientProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = ClientProfile
        fields = "__all__"
    def get_avatar(self, obj):
        if obj.avatar:
            with open(obj.avatar.path, "rb") as image_file:
                encoded_string = base64.b64encode(image_file.read())
                return encoded_string.decode("utf-8")
        return None

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['avatar'] = self.get_avatar(instance)
        return representation
    def create(self, validated_data):
        try:
            profile, created = ClientProfile.objects.get_or_create(
                user=self.context["request"].user, defaults=validated_data
            )
            if not created:
                raise serializers.ValidationError(
                    {"detail": "The user already has a client profile."}
                )
            return profile
        except IntegrityError as e:
            logger.error(e)
            raise serializers.ValidationError({"detail": "Error creating profile."})


class UserVerificationSerializer(serializers.ModelSerializer):
    id_card = serializers.ImageField(max_length=None, use_url=True)

    class Meta:
        model = UserVerification
        fields = "__all__"
        read_only_fields = ("user",)
