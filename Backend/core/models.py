from django.core.exceptions import ValidationError
from django.db import models
from django.utils.translation import gettext_lazy as _
from djmoney.models.fields import MoneyField
from djmoney.money import Money


class SVGField(models.FileField):
    """
    A file upload field that only accepts SVG files.
    """

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def clean(self, *args, **kwargs):
        data = super().clean(*args, **kwargs)
        file = data.file
        content_type = file.content_type
        if content_type != "image/svg+xml":
            raise ValidationError(_("Filetype not supported."))
        return data


class Category(models.Model):
    parent = models.ForeignKey("self", on_delete=models.CASCADE, null=True, blank=True)
    name = models.CharField(max_length=255)
    description = models.TextField()
    #icon = SVGField(upload_to="category_icons/")

    guaranteed_project_fee = MoneyField(
        max_digits=10,
        decimal_places=5,
        default_currency="USD",
        default=Money(15, "USD"),
    )
    promoted_project_fee = MoneyField(
        max_digits=10,
        decimal_places=5,
        default_currency="USD",
        default=Money(35, "USD"),
    )
    promoted_project_duration = models.PositiveIntegerField(default=3)

    nda_project_fee = MoneyField(
        max_digits=10,
        decimal_places=5,
        default_currency="USD",
        default=Money(20, "USD"),
    )
    guaranteed_contest_fee = MoneyField(
        max_digits=10,
        decimal_places=5,
        default_currency="USD",
        default=Money(15, "USD"),
    )
    promoted_contest_fee = MoneyField(
        max_digits=10,
        decimal_places=5,
        default_currency="USD",
        default=Money(35, "USD"),
    )
    promoted_contest_duration = models.PositiveIntegerField(default=3)
    nda_contest_fee = MoneyField(
        max_digits=10,
        decimal_places=5,
        default_currency="USD",
        default=Money(20, "USD"),
    )

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name


class Industry(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    icon = SVGField(upload_to="industry_icons/")

    class Meta:
        verbose_name_plural = "Industries"

    def __str__(self):
        return self.name


class ColorPalette(models.Model):
    name = models.CharField(max_length=50)
    image = models.ImageField(upload_to="color_palettes/")


class DesignStyle(models.Model):
    name = models.CharField(max_length=50)


class DesignStyleSample(models.Model):
    design_style = models.ForeignKey(DesignStyle, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="design_style_samples/")


class SiteSettings(models.Model):
    heading = models.CharField(max_length=80, blank=True, null=True)
    facebook_url = models.URLField(blank=True, null=True)
    instagram_url = models.URLField(blank=True, null=True)
    twitter_url = models.URLField(blank=True, null=True)
    behance_url = models.URLField(blank=True, null=True)
    USD_to_EGP_rate = models.DecimalField(max_digits=10, decimal_places=5)
    egyptians_discount = models.FloatField(default=0.0)

    class Meta:
        verbose_name_plural = "Site Settings"

    def save(self, *args, **kwargs):
        if not self.id and SiteSettings.objects.exists():
            raise ValidationError("There is can be only one SiteSettings instance")
        return super().save(*args, **kwargs)


class Dispute(models.Model):
    class DisputeStatus(models.TextChoices):
        PENDING = "PENDING", "Pending"
        WITHDRAWN = "WITHDRAWN", "WITHDRAWN"
        REJECTED = "REJECTED", "Rejected"

    class DisputeType(models.TextChoices):
        PROJECT = "PROJECT", "Project"
        CONTEST = "CONTEST", "Contest"

    class DisputeReason(models.TextChoices):
        COPIED_DESIGN = "COPIED_DESIGN", "Copied Design"
        STOCK_IMAGE = "STOCK_IMAGE", "Stock Image"
        INAPPROPRIATE_CONTENT = "INAPPROPRIATE_CONTENT", "Inappropriate Content"

    dispute_type = models.CharField(max_length=7, choices=DisputeType.choices)
    reason = models.CharField(max_length=23, choices=DisputeReason.choices)
    design = models.CharField(max_length=255)
    comment = models.TextField(blank=True, null=True)
    clarification = models.TextField(blank=True, null=True)
    status = models.CharField(
        max_length=9, choices=DisputeStatus.choices, default=DisputeStatus.PENDING
    )
