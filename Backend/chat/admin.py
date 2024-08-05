from django.contrib import admin
from .models import ChatMessage


class ChatMessageAdmin(admin.ModelAdmin):
    list_display = ("room", "id", "message", "reply_to", "timestamp")
    list_filter = ("room",)
    search_fields = ("room", "message", "reply_to", "timestamp")


admin.site.register(ChatMessage, ChatMessageAdmin)
