from django.db import models
from django.utils import timezone
import uuid


class ChatMessage(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    room = models.CharField(max_length=255)
    message = models.TextField()
    reply_to = models.CharField(max_length=255, null=True, blank=True)
    sender = models.ForeignKey("user.User", on_delete=models.CASCADE)
    timestamp = models.DateTimeField(editable=False)

    def save(self, *args, **kwargs):
        if not self.id:
            self.timestamp = timezone.now()
        return super().save(*args, **kwargs)
