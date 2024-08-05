from django.core.exceptions import ValidationError
from django.conf import settings
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from google.oauth2 import id_token
from google.auth.transport import requests
from django.contrib.auth import authenticate, login
from .models import User
import facebook
from firebase_admin.messaging import Message, Notification
from fcm_django.models import FCMDevice
from django.contrib.auth.hashers import make_password

from django.http import JsonResponse
import traceback

class Google:
    @staticmethod
    def validate(auth_token: str) -> dict | ValueError:
        try:
            id_info = id_token.verify_oauth2_token(
                auth_token, requests.Request(), settings.GOOGLE_CLIENT_ID
            )
            if id_info["iss"] not in [
                "accounts.google.com",
                "https://accounts.google.com",
            ]:
                raise ValueError("Wrong issuer.")
            return id_info
        except ValueError:
            raise ValueError("Invalid token.")


def create_user(
    email: str,
    user_type: User.UserType,
    password: str | None = None,
    auth_provider=User.AuthProvider.EMAIL,
) -> tuple[User, bool]:
    """Create user if not exists, return user and is_created"""
    # if User.objects.filter(email=email).exists():
    #     # auth_user = authenticate(
    #     #     email=email, password=password or make_password_for_third_party_auth(email)
    #     # )
    #     # return auth_user, False
    #     return JsonResponse(
    #         {"error": "email exists before"}),False
    # if user_type is None:
    #     raise ValidationError("User type is required.")
    # if password is None:
    #     user = User.objects.create_user(
    #         email=email,
    #         user_type=user_type,
    #         password=make_password_for_third_party_auth(email),
    #         password_hashed=True,
    #         auth_provider=auth_provider,
    #     )
    # else:
    user = User.objects.create_user(
        email=email,
        user_type=user_type,
        password=password,
        auth_provider=auth_provider,
    )
    return user, True


class Facebook:
    @staticmethod
    def validate(auth_token: str) -> dict | ValueError:
        try:
            graph = facebook.GraphAPI(access_token=auth_token)
            profile = graph.request("/me?fields=name,email")
            return profile
        except ValueError:
            raise ValueError("Invalid token.")


def make_password_for_third_party_auth(email: str) -> str:
    return make_password(email, salt=settings.SOCIAL_SECRET_KEY)


def send_notification(user: User, title: str, message: str, topic: str = None):
    try:
        message = Message(
            notification=Notification(
                title=title,
                body=message,
            ),
            topic=topic,
        )
        if user is None:
            FCMDevice.objects.all().send_message(message)
        else:
            FCMDevice.objects.filter(user=user).send_message(message)
    except Exception as e:
        raise e


def send_emailo(to_email: str, subject: str, template: str, context: dict):
    try:
        print('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
        subject, from_email, to = subject, settings.EMAIL_HOST_USER, to_email
        print(to_email, subject, template, context)
        html_content = render_to_string(template, context)
        text_content = strip_tags(html_content)
        msg = EmailMultiAlternatives(subject, text_content, from_email, [to])
        msg.attach_alternative(html_content, "text/html")
        msg.send()
    except Exception as e:
        traceback.print_exc()

        print('errrrorrr', )
