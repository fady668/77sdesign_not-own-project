from django.db.models.signals import post_save
from django.dispatch import receiver
from payment.models import FullProjectInvoice
from .models import Project
from django.db import IntegrityError


@receiver(post_save, sender=Project)
def create_invoice(sender, instance, created, **kwargs):
    if created:
        try:
            FullProjectInvoice.objects.create(project=instance)
        except IntegrityError as e:
            raise e
