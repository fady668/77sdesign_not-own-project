from django.db import models
from django.utils import timezone
from django.core.validators import MinValueValidator, MaxValueValidator
from core.utils import is_cmyk
from core.models import SiteSettings
from django.db.models import Q


class Project(models.Model):
    class Status(models.TextChoices):
        OPENED = "OPENED", "Opened"
        CANCELLED = "CANCELLED", "Cancelled"
        COMPLETED = "COMPLETED", "Completed"

    owner = models.ForeignKey("user.User", on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    languages = models.CharField(max_length=150)
    description = models.TextField()
    category = models.ForeignKey("core.Category", on_delete=models.RESTRICT)
    industry = models.ForeignKey("core.Industry", on_delete=models.RESTRICT)
    url = models.URLField()
    reference = models.URLField()
    logo = models.ImageField(upload_to="project_logos/", blank=True, null=True)
    timeline = models.CharField(max_length=50)
    portfolio_allowed = models.BooleanField(default=True)
    size = models.CharField(max_length=50, blank=True, null=True)
    feature_text = models.TextField(blank=True, null=True)
    classic_to_modern = models.SmallIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(10)], default=5
    )
    playful_to_serious = models.SmallIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(10)], default=5
    )
    geometrical_to_organic = models.SmallIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(10)], default=5
    )
    feminine_to_masculine = models.SmallIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(10)], default=5
    )
    economical_to_luxurious = models.SmallIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(10)], default=5
    )
    mature_to_youthful = models.SmallIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(10)], default=5
    )
    handcrafted_to_minimalist = models.SmallIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(10)], default=5
    )
    color_palette = models.ForeignKey(
        "core.ColorPalette", on_delete=models.SET_NULL, blank=True, null=True
    )
    status = models.CharField(
        max_length=9, choices=Status.choices, default=Status.OPENED
    )
    budget = models.DecimalField(max_digits=10, decimal_places=2)
    guarentee = models.BooleanField(default=False)
    promote_to_top = models.BooleanField(default=False)
    NDA = models.BooleanField(default=False)
    is_listed = models.BooleanField(default=True)
    created_at = models.DateTimeField(editable=False)
    updated_at = models.DateTimeField(editable=False)

    class Meta:
        ordering = ["-promote_to_top", "-created_at"]

    def save(self, *args, **kwargs):
        if not self.id:
            self.created_at = timezone.now()
        self.updated_at = timezone.now()
        return super().save(*args, **kwargs)

    @property
    def services_total(self):
        site_settings = SiteSettings.objects.first()
        total = 0
        if self.guarentee:
            total += site_settings.guraranteed_project_fee
        if self.promote_to_top:
            total += site_settings.promoted_project_fee
        if self.nda:
            total += site_settings.nda_project_fee
        return total

    @property
    def designer(self):
        qs = self.projectproposal_set.filter(accepted=True)
        if qs.exists():
            return qs[0].designer
        return None


class ProjectMilestone(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    deadline = models.DateField()


class ProjectAttachment(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    file = models.FileField(upload_to="project_attachments/")


class ProjectProposal(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    designer = models.ForeignKey("user.User", on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    details = models.TextField()
    accepted = models.BooleanField(default=False)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["project", "designer"], name="unique_proposal"
            )
        ]


def limit_invitations(pk):
    """Limit invitations to 5 per project"""
    return ProjectInvitation.objects.filter(project__id=pk).count() <= 5


class ProjectInvitation(models.Model):
    class Status(models.TextChoices):
        PENDING = "PENDING", "Pending"
        ACCEPTED = "ACCEPTED", "Accepted"
        DECLINED = "DECLINED", "Declined"

    project = models.ForeignKey(
        Project, on_delete=models.CASCADE, validators=[limit_invitations]
    )
    designer = models.ForeignKey("user.User", on_delete=models.CASCADE)
    status = models.CharField(
        max_length=8, choices=Status.choices, default=Status.PENDING
    )

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["project", "designer"], name="unique_invitation"
            ),
        ]


class ProjectDeliverable(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)


class ProjectDeliverableAttachment(models.Model):
    deliverable = models.ForeignKey(
        ProjectDeliverable, on_delete=models.CASCADE, related_name="attachments"
    )
    file = models.FileField(upload_to="project_deliverables/")
    printable = models.BooleanField(default=False)
    created_at = models.DateTimeField(editable=False)
    modified_at = models.DateTimeField(editable=False)

    def save(self, *args, **kwargs):
        if not self.id:
            self.created_at = timezone.now()
        self.modified_at = timezone.now()
        if self.printable:
            if not is_cmyk(self.file.path):
                raise ValueError("Only CMYK Images or PDF files can be printable")
        return super().save(*args, **kwargs)


class ProjectComment(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    owner = models.ForeignKey("user.User", on_delete=models.CASCADE)
    parent = models.ForeignKey("self", on_delete=models.CASCADE, blank=True, null=True)
    x = models.FloatField(blank=True, null=True)
    y = models.FloatField(blank=True, null=True)
    comment = models.TextField()
    created_at = models.DateTimeField(editable=False)

    def save(self, *args, **kwargs):
        if self.parent:
            self.x = self.y = None
        elif self.x is None or self.y is None:
            raise ValueError("x and y must be provided for root comment")
        if not self.id:
            self.created_at = timezone.now()
        return super().save(*args, **kwargs)

    class Meta:
        ordering = ["-created_at"]
