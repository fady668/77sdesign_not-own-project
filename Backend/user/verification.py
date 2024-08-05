from django.conf import settings
from django.core.cache import cache
from django.core.signing import Signer
import jwt
import datetime as dt
from Design77s.logging import logger
from .tasks import send_email_task


class Verification:
    exp = dt.datetime.utcnow() + dt.timedelta(minutes=30)
    signer = Signer(settings.SECRET_KEY)

    @classmethod
    def generate_token(cls, payload: dict, key: str) -> str:
        token = jwt.encode(
            {"exp": cls.exp, **payload}, settings.SECRET_KEY, algorithm="HS256"
        )
        cls.__set_token(key, token)
        logger.info(f"Generated token for {key}: {token}")
        return token

    @classmethod
    def __set_token(cls, key: str, token: str):
        signed_key = cls.signer.sign_object(key)
        cache.set(signed_key, token, cls.exp.second)
        logger.info(f"Token set in cache with key {signed_key}")

    @classmethod
    def __get_token(cls, key: str) -> str:
        signed_key = cls.signer.sign_object(key)
        token = cache.get(signed_key)
        logger.info(f"Retrieved token from cache with key {signed_key}: {token}")
        return token

    @classmethod
    def validate_token(cls, key: str, token: str) -> dict | None:
        try:
            key_unsigned = cls.signer.unsign_object(key)
            cached_token = cls.__get_token(key)
            if cached_token != token:
                logger.warning(f"Invalid token for key {key}")
                return None
            decoded_token = jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])
            if decoded_token["email"] == key_unsigned:
                cache.delete(key)
                logger.info(f"Token validated and deleted for key {key}")
                return decoded_token
            logger.warning(f"Email mismatch for key {key}")
            return None
        except jwt.ExpiredSignatureError as e:
            logger.error(f"Token expired for key {key}: {e}")
            return None
        except Exception as e:
            logger.error(f"Error validating token for key {key}: {e}")
            return None

    @classmethod
    def send_email(cls, email: str):
        try:
            token = cls.generate_token({"email": email}, key=email)
            url = f"{settings.SITE_URL}/confirm_email?k={cls.signer.sign_object(email)}&t={token}"
            subject, from_email, to = "Email Verification", settings.EMAIL_HOST_USER, email
            send_email_task.delay(to, subject, "email_confirm.html", {"confirm_url": url})
            logger.info(f"Verification email sent to {email} with URL {url}")
        except Exception as e:
            logger.error(f"Error sending email to {email}: {e}")
