import os
from channels.routing import ProtocolTypeRouter, URLRouter, ChannelNameRouter
from channels.security.websocket import AllowedHostsOriginValidator
from chat.middlewares import JWTAuthMiddlewareStack
from chat import routing, consumers
from django.core.asgi import get_asgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "Design77s.settings.development")

application = ProtocolTypeRouter(
    {
        "http": get_asgi_application(),
        "websocket": AllowedHostsOriginValidator(
            JWTAuthMiddlewareStack(URLRouter(routing.websocket_urlpatterns))
        ),
        "channel": ChannelNameRouter(
            {
                "store_chat": consumers.StoreChatConsumer.as_asgi(),
            }
        ),
    }
)
