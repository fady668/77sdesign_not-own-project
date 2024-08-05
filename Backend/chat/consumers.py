import json
import uuid
from channels.generic.websocket import AsyncJsonWebsocketConsumer, AsyncConsumer
from .models import ChatMessage
from django.utils import timezone
from django.core.cache import cache


class ChatConsumer(AsyncJsonWebsocketConsumer):
    async def connect(self):
        self.user = self.scope["user"]
        self.room_name = self.scope["url_route"]["kwargs"]["room_name"]
        self.room_group_name = f"chat_{self.room_name}"
        self.cached_messages_key = f"{self.room_name}_{self.user.email}__chat_messages"
        self.chat_message_objs = await cache.aget(self.cached_messages_key, [])
        await cache.aset(
            self.cached_messages_key, self.chat_message_objs, timeout=60 * 60 * 24
        )

        await self.channel_layer.group_add(self.room_group_name, self.channel_name)
        await self.accept()

    async def receive(self, text_data=None, bytes_data=None):
        data = json.loads(text_data)
        if "image" in data:
            chat_message_dict = {
                "message_id": str(uuid.uuid4()),
                "image": data["image"],
                "message": data.get("message", None),
                "sender": self.user.email,
            }
            if data.get("reply_to", None):
                chat_message_dict["reply_to"] = data["reply_to"]
            await self.channel_layer.group_send(
                self.room_group_name, {"type": "send_image", **chat_message_dict}
            )
        else:
            try:
                if (message := data.get("message", None)) is not None:
                    chat_message_dict = {
                        "message_id": str(uuid.uuid4()),
                        "message": message,
                        "sender": "test_user",
                        "timestamp": str(timezone.now()),
                    }
                    if data.get("reply_to", None):
                        chat_message_dict["reply_to"] = data["reply_to"]
                    message_dict = chat_message_dict.copy()
                    message_dict.pop("sender")
                    message_dict.update({"room": self.room_name})
                    self.chat_message_objs.append(message_dict)
                    await cache.aset(
                        self.cached_messages_key,
                        self.chat_message_objs,
                        timeout=60 * 60 * 24,
                    )
                    await self.channel_layer.group_send(
                        self.room_group_name,
                        {"type": "chat_message", **chat_message_dict},
                    )
            except AttributeError:  # not a dictionary
                pass

    async def chat_message(self, event):
        message_id = event["message_id"]
        message = event["message"]
        sender = event["sender"]
        reply_to = event.get("reply_to", None)
        await self.send_json(
            content={
                "message_id": message_id,
                "message": message,
                "sender": sender,
                "reply_to": reply_to,
            }
        )

    async def send_image(self, event):
        message_id = event["message_id"]
        image = event["image"]
        message = event["message"]
        sender = event["sender"]
        reply_to = event.get("reply_to", None)
        await self.send_json(
            content={
                "message_id": message_id,
                "image": image,
                "message": message,
                "sender": sender,
                "reply_to": reply_to,
            }
        )

    async def disconnect(self, close_code):
        await self.channel_layer.send(
            "store_chat",
            {
                "type": "save_chat_messages",
                "cache_key": self.cached_messages_key,
            },
        )
        await self.channel_layer.group_discard(self.room_group_name, self.channel_name)


class StoreChatConsumer(AsyncConsumer):
    async def save_chat_messages(self, event):
        print(event)
        if cache_key := event.get("cache_key", None):
            chat_message_dicts = await cache.aget(cache_key, [])
            print(chat_message_dicts)
            chat_message_objs = []
            for chat_message_dict in chat_message_dicts:
                chat_message_objs.append(
                    ChatMessage(
                        id=chat_message_dict["message_id"],
                        room=chat_message_dict["room"],
                        message=chat_message_dict["message"],
                        reply_to=chat_message_dict.get("reply_to", None),
                        sender__email=chat_message_dict["sender"],
                        timestamp=chat_message_dict["timestamp"],
                    )
                )
            await ChatMessage.objects.abulk_create(chat_message_objs)
            await cache.aset(cache_key, [])
