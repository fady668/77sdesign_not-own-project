from django.db.models.signals import post_migrate, post_save
from django.dispatch import receiver
from .models import SiteSettings
from payment.backends import ManualExchangeBackend


@receiver(post_migrate)
def create_site_settings(sender, **kwargs):
    SiteSettings.objects.update_or_create(id=1, defaults={"USD_to_EGP_rate": 0.0032})


@receiver(post_save, sender=SiteSettings)
def update_exchange_rates(sender, instance, **kwargs):
    ManualExchangeBackend().update_rates()
