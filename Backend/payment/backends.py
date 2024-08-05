from djmoney.contrib.exchange.backends.base import BaseExchangeBackend
from django.conf import settings
from djmoney.contrib.exchange.models import ExchangeBackend, Rate
from django.db.transaction import atomic
from core.models import SiteSettings


class ManualExchangeBackend(BaseExchangeBackend):
    name = "Manual Exchange Backend"
    url = None

    def get_rates(self, **kwargs):
        rate = SiteSettings.objects.first().USD_to_EGP_rate
        return {"USD": 1, "EGP": rate}

    @atomic
    def update_rates(self, **kwargs):
        backend, _ = ExchangeBackend.objects.get_or_create(name=self.name)
        backend.clear_rates()
        params = self.get_params()
        params.update(**kwargs)
        Rate.objects.bulk_create(
            [
                Rate(currency=currency, value=value, backend=backend)
                for currency, value in self.get_rates(**params).items()
            ]
        )
