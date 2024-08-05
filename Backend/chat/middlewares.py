from django.conf import settings
from django.db import close_old_connections
from rest_framework_simplejwt.tokens import UntypedToken
from rest_framework_simplejwt.exceptions import InvalidToken, TokenError
from django.contrib.auth import get_user_model
import jwt
from channels.middleware import BaseMiddleware


class JWTAuthMiddlewareStack(BaseMiddleware):
    def __init__(self, inner):
        self.inner = inner

    async def __call__(self, scope, receive, send):
        close_old_connections()
        access_token: str = dict(scope["headers"])[b"access"].decode()

        try:
            UntypedToken(access_token)
        except (InvalidToken, TokenError) as e:
            raise e

        decoded_data: dict = jwt.decode(
            access_token, settings.SECRET_KEY, algorithms=["HS256"]
        )
        user = await get_user_model().objects.aget(id=decoded_data["user_id"])
        scope.update({"user": user})
        await super().__call__(scope, receive, send)
