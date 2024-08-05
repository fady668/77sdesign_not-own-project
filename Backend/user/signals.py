from django.db.models.signals import post_migrate, post_save
from django.dispatch import receiver

# from .models import Notification
# from .utils import send_notification


# @receiver(post_save, sender=Notification)
# def handle_notification(sender, instance, **kwargs):
#     send_notification(instance.user, instance.title,
#                       instance.message, instance.topic)
