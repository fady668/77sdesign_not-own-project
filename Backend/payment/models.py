from django.db import models
from django.utils import timezone
import uuid


class Invoice(models.Model):
    class Status(models.TextChoices):
        PENDING = "PENDING", "Pending"
        PAID = "PAID", "Paid"
        FAILED = "FAILED", "Failed"

    class PaymentMethod(models.TextChoices):
        CREDIT_CARD = "CREDIT_CARD", "Credit Card"
        PAYPAL = "PAYPAL", "PayPal"

    reference = models.UUIDField(unique=True, default=uuid.uuid4, editable=False)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(
        max_length=7, choices=Status.choices, default=Status.PENDING
    )
    payment_method = models.CharField(choices=PaymentMethod.choices, max_length=11)

    # Third party tokens if exists
    payer_id = models.CharField(max_length=100, blank=True, null=True)
    order_id = models.CharField(max_length=100, blank=True, null=True)

    created_at = models.DateTimeField(editable=False)
    updated_at = models.DateTimeField(editable=False)

    class Meta:
        abstract = True


class FullProjectInvoice(Invoice):
    project = models.OneToOneField("project.Project", on_delete=models.CASCADE)

    class Meta:
        ordering = ["-updated_at"]

    def save(self, *args, **kwargs):
        if not self.id:
            self.created_at = timezone.now()
        self.updated_at = timezone.now()
        return super().save(*args, **kwargs)
