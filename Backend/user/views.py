from django.conf import settings
import json
from Design77s.logging import logger
from rest_framework import generics, exceptions
from .serializers import (
    UserSerializer,
    LoginTokenSerializer,
    LoginSerializer,
    RegisterSerializer,
    GoogleAuthSerializer,
    FacebookAuthSerializer,
    DesignerProfileSerializer,
    ClientProfileSerializer,
    UserVerificationSerializer,
    SampleDesignsSubmitSerializer,
)
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout
from rest_framework.permissions import AllowAny
from .models import User, DesignerProfile, ClientProfile, SampleDesign, UserVerification
from .utils import create_user, make_password_for_third_party_auth
from .verification import Verification
from rest_framework import status, permissions
from rest_framework.decorators import api_view, permission_classes
from .permissions import IsOwner, IsOwnerOrReadOnly
from django.core.exceptions import ValidationError
from django.db import transaction
from rest_framework_simplejwt.tokens import RefreshToken
from django.http import JsonResponse
import re
import validate_email
from django.core.signing import Signer
class RegisterView(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    permission_classes = (AllowAny,)

    @transaction.atomic
    def post(self, request, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.validated_data.get("email")
        password = serializer.validated_data.get("password")
        user_type = serializer.validated_data.get("user_type")
        if User.objects.filter(email=email).exists():
            return JsonResponse({'error':'Email already registered'})
        if not validate_email.validate_email(email):
            return JsonResponse({'error':'Invalid email address'})
        if user_type  not in dict(User.UserType.choices):
            return JsonResponse({"error": "user type error"})
        if len(password)>7:
            if not re.search(r'[A-Z]', password):
                error_message = {
                    'error': 'Password must contain at least one capital letter.'}
                return JsonResponse(error_message)

            if not re.search(r'\d', password):
                error_message = {
                    'error': 'Password must contain at least one number.'}
                return JsonResponse(error_message)

            if not re.search(r'[!@#$%^&*(),.?":{}|<>]', password):
                error_message = {
                    'error': 'Password must contain at least one special character.'}
                return JsonResponse(error_message)
        else:
            return JsonResponse({"error": "password length is less than 8   characters"})
        # if email is None and password is None:
        #     return Response(
        #         {"message": "Email and password are required."},
        #         status=status.HTTP_400_BAD_REQUEST,
        #     )
        try:
            user, created = create_user(email, user_type, password)
            logger.warning(msg=(user, created))
        except (ValidationError, ValueError) as e:
            return Response({"error": e.message}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            logger.error(e)
            return Response(
                {"error": "Something went wrong."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

        if created:
            if user_type == 'client':
                ClientProfile.objects.create(user_id=user.id)
            if user_type == 'designer':
                DesignerProfile.objects.create(user_id=user.id)
            Verification.send_email(email)
            print(email)
            return Response(
                {"message": "Verification code has been sent to your email."},
                status=status.HTTP_201_CREATED,
            )
        # elif user:
        #     refresh = RefreshToken.for_user(user)
        #     return Response(
        #         {
        #             "refresh": str(refresh),
        #             "access": str(refresh.access_token),
        #             "user": UserSerializer(user).data,
        #         },
        #         status=status.HTTP_200_OK,
        #     )
        return Response(
            {"message": "User already exists"}, status=status.HTTP_400_BAD_REQUEST
        )


class ConfirmEmailView(generics.GenericAPIView):
    permission_classes = (AllowAny,)
    serializer_class = LoginSerializer

    def get(self, request, email, token, **kwargs):
        print(email)
        print(token)


        # payload = True
        signer = Signer(settings.SECRET_KEY)
        rmail=''
        try:
            rmail= signer.unsign_object(email)
            print(rmail)
            if User.objects.filter(email=rmail).exists():
                if  User.objects.get(email=rmail).is_active:
                   return JsonResponse({'error': 'already verified'})
                else:
                    pass
            else:
                return JsonResponse({'error': 'Invalid email'})

        except :
            return JsonResponse({'error': 'Invalid email'})



        payload = Verification.validate_token(email, token) ### stopped for reconstruct
        print("Payload:", payload)
        if payload or not payload: #### org is   if payload
            user = User.objects.get(email=payload["email"]) ### this also for recreate
            # user = User.objects.get(email=email)

                # return JsonResponse({'error': 'Invalid email or already verified'})

            user.is_active = True
            user.save()
            login(request, user)
            return Response(
                {
                    "success": True,
                    "message": "Verification successful and logged in.",
                    "data": {
                        "user_type": user.user_type,
                        "user_id": user.pk,
                        "username": user.username,
                    },
                },
                status=status.HTTP_200_OK,
            )
        return Response(
            {"message": "Verification failed."}, status=status.HTTP_400_BAD_REQUEST
        )


class LoginView(generics.GenericAPIView):
    permission_classes = (AllowAny,)
    serializer_class = LoginTokenSerializer

    def post(self, request, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.validated_data, status=status.HTTP_200_OK)


@api_view(["GET"])
@permission_classes((permissions.IsAuthenticated,))
def get_user_details(request, version):
    serializer = UserSerializer(request.user)
    response = Response(serializer.data, status=status.HTTP_200_OK)
    return response


class GoogleAuthView(generics.GenericAPIView):
    permission_classes = (AllowAny,)
    serializer_class = GoogleAuthSerializer

    def post(self, request, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user_data = serializer.validated_data.get("auth_token")
        user_type = serializer.validated_data.get("user_type", None)
        email = user_data["email"]
        try:
            user, created = create_user(
                email, user_type, auth_provider=User.AuthProvider.GOOGLE
            )
            logger.warning(msg=(user, created))
        except ValidationError as e:
            logger.warning(e.message)
            return Response({"error": e.message}, status=status.HTTP_400_BAD_REQUEST)
        except ValueError as e:
            logger.warning(e.message)
            return Response({"error": e.message}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            logger.error(e)
            return Response(
                {"error": "Something went wrong."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
        if created:
            user.is_active = True
            user.is_verified = True
            user.save()
        refresh = RefreshToken.for_user(user)
        response = Response(
            {
                "refresh": str(refresh),
                "access": str(refresh.access_token),
                "user": UserSerializer(user).data,
            }
        )
        return response


class FacebookAuthView(generics.GenericAPIView):
    permission_classes = (AllowAny,)
    serializer_class = FacebookAuthSerializer

    def post(self, request, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user_data = serializer.validated_data.get("access_token")
        user_type = serializer.validated_data.get("user_type", None)
        email = user_data["email"]
        try:
            user, created = create_user(email, user_type)
            if created:
                user.is_active = True
                user.save()
        except ValidationError as e:
            return Response({"error": e.message}, status=status.HTTP_400_BAD_REQUEST)
        except ValueError as e:
            return Response({"error": e.message}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            logger.warning(e)
            return Response(
                {"error": "Something went wrong."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
        if created:
            user.is_active = True
            user.is_verified = True
            user.save()
            refresh = RefreshToken.for_user(user)
            response = Response(
                {
                    "refresh": str(refresh),
                    "access": str(refresh.access_token),
                    "user": UserSerializer(user).data,
                }
            )
        if user:
            refresh = RefreshToken.for_user(user)
            response = Response(
                {
                    "refresh": str(refresh),
                    "access": str(refresh.access_token),
                    "user": UserSerializer(user).data,
                }
            )
            return response
        return Response(
            {"message": "User already exists"}, status=status.HTTP_400_BAD_REQUEST
        )


class DesignerProfileListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = DesignerProfileSerializer
    queryset = DesignerProfile.objects.all().select_related("user")
    permission_classes = (permissions.IsAuthenticated,)

    def get_serializer(self, *args, **kwargs):
        serializer_class = self.get_serializer_class()
        kwargs["context"] = self.get_serializer_context()
        if self.request.method == "GET":
            default_fields = ["user_id", "username", "firstname", "lastname", "avatar"]
            fields = self.request.GET.get("fields", None)
            kwargs["fields"] = fields.split(",") if fields else default_fields
        return serializer_class(*args, **kwargs)


class DesignerProfileRetrieveUpdateAPIView(generics.RetrieveUpdateAPIView):
    serializer_class = DesignerProfileSerializer
    queryset = DesignerProfile.objects.all().select_related("user")
    permission_classes = (IsOwnerOrReadOnly,)
    lookup_field = "user__pk"


class DesignerSubmitSampleAPIView(generics.CreateAPIView):
    serializer_class = SampleDesignsSubmitSerializer
    queryset = SampleDesign.objects.all()


class ClientProfileCreateAPIView(generics.CreateAPIView):
    serializer_class = ClientProfileSerializer
    queryset = ClientProfile.objects.all().select_related("user")
    permission_classes = (permissions.IsAuthenticated,)


class ClientProfileRetrieveUpdateAPIView(generics.RetrieveUpdateAPIView):
    serializer_class = ClientProfileSerializer
    queryset = ClientProfile.objects.all().select_related("user")
    permission_classes = (IsOwnerOrReadOnly,)
    lookup_field = "user__pk"


class UserVerficationAPIView(generics.CreateAPIView):
    serializer_class = UserVerificationSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def perform_create(self, serializer):
        if self.request.user.is_verified:
            raise ValidationError("User already verified.")
        serializer.save(user=self.request.user)

    def perform_create(self, serializer):
        if UserVerification.objects.filter(
            user=self.request.user, status=UserVerification.Status.PENDING
        ).exists():
            raise exceptions.PermissionDenied(
                {"message": "Your submitted data is still under review."}
            )

        serializer.save(user=self.request.user)
