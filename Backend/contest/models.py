# from django.db import models
# from djmoney.models.fields import MoneyField
# from django.utils import timezone
# from django.db.models import Q
# from django.core.validators import MinValueValidator, MaxValueValidator
# from core.models import SiteSettings, DesignStyle


# class Package(models.Model):
#     class EligibleDesigners(models.TextChoices):
#         ALL = "ALL", "All"
#         MIDDLE = "MIDDLE", "Middle"
#         ADVANCED = "ADVANCED", "Advanced"

#     name = models.CharField(max_length=50)
#     description = models.TextField()
#     price = MoneyField(max_digits=10, decimal_places=2, default_currency="USD")
#     eligible_designers = models.CharField(
#         choices=EligibleDesigners.choices, max_length=20
#     )
#     priority_support = models.BooleanField(default=False)
#     number_of_entries = models.PositiveIntegerField(default=0)
#     dedicated_director = models.BooleanField(default=False)


# class Contest(models.Model):
#     class Status(models.TextChoices):
#         OPENED = "OPENED", "Opened"
#         CANCELLED = "CANCELLED", "Cancelled"
#         COMPLETED = "COMPLETED", "Completed"

#     class ContestExtension(models.TextChoices):
#         DAY = "DAY", "Day"
#         TWO_DAYS = "TWO_DAYS", "Two Days"

#     class RoundStatus(models.TextChoices):
#         PENDING = "PENDING", "Pending"
#         STOPPED = "STOPPED", "Stopped"
# #defaultowner&name added temp
#     owner = models.ForeignKey("user.User", on_delete=models.CASCADE , default=4)
#     name = models.CharField(max_length=50 , default="user")
#     languages = models.CharField(max_length=150)
#     description = models.TextField()
#     category = models.ForeignKey("core.Category", on_delete=models.RESTRICT)
#     industry = models.ForeignKey("core.Industry", on_delete=models.RESTRICT)
#     url = models.URLField()
#     reference = models.URLField()
#     #logo = models.ImageField(upload_to="contest_logos/", blank=True, null=True)
#     logo = models.TextField(null=True)
#     portfolio_allowed = models.BooleanField(default=True)
#     size = models.CharField(max_length=50, blank=True, null=True)
#     feature_text = models.TextField(blank=True, null=True)
#     classic_to_modern = models.SmallIntegerField(
#         validators=[MinValueValidator(1), MaxValueValidator(10)], default=5
#     )
#     playful_to_serious = models.SmallIntegerField(
#         validators=[MinValueValidator(1), MaxValueValidator(10)], default=5
#     )
#     geometrical_to_organic = models.SmallIntegerField(
#         validators=[MinValueValidator(1), MaxValueValidator(10)], default=5
#     )
#     feminine_to_masculine = models.SmallIntegerField(
#         validators=[MinValueValidator(1), MaxValueValidator(10)], default=5
#     )
#     economical_to_luxurious = models.SmallIntegerField(
#         validators=[MinValueValidator(1), MaxValueValidator(10)], default=5
#     )
#     mature_to_youthful = models.SmallIntegerField(
#         validators=[MinValueValidator(1), MaxValueValidator(10)], default=5
#     )
#     handcrafted_to_minimalist = models.SmallIntegerField(
#         validators=[MinValueValidator(1), MaxValueValidator(10)], default=5
#     )
#     color_palette = models.ForeignKey(
#         "core.ColorPalette", on_delete=models.SET_NULL, blank=True, null=True
#     )
#     status = models.CharField(
#         max_length=9, choices=Status.choices, default=Status.OPENED
#     )
#     package = models.ForeignKey(Package, on_delete=models.RESTRICT, null=True)
#     start_date = models.DateTimeField()
#     end_date = models.DateTimeField()
#     round_one_start_date = models.DateTimeField()
#     round_one_end_date = models.DateTimeField()
#     round_one_finalists = models.ManyToManyField(
#         "user.User", related_name="round_one_finalists"
#     )
#     round_one_status = models.CharField(
#         choices=RoundStatus.choices, max_length=8, default=RoundStatus.PENDING
#     )
#     round_two_start_date = models.DateTimeField(blank=True, null=True)
#     round_two_end_date = models.DateTimeField(blank=True, null=True)
#     round_two_finalists = models.ManyToManyField(
#         "user.User", related_name="round_two_finalists", blank=True
#     )
#     round_two_status = models.CharField(
#         choices=RoundStatus.choices, max_length=8, blank=True, null=True
#     )
#     contest_extension = models.CharField(
#         choices=ContestExtension.choices, max_length=9, blank=True, null=True
#     )
#     guarantee = models.BooleanField(default=False)
#     promote_to_top = models.BooleanField(default=False)
#     NDA = models.BooleanField(default=False)
#     blind = models.BooleanField(default=False)
#     urgent = models.BooleanField(default=False)
#     is_listed = models.BooleanField(default=True)
#     released = models.BooleanField(
#         default=False, help_text="Release the reward to the the winner"
#     )
#     created_at = models.DateTimeField(editable=False)
#     updated_at = models.DateTimeField(editable=False)

#     class Meta:
#         ordering = ["-promote_to_top", "-created_at"]

#     def save(self, *args, **kwargs):
#         if self.urgent:
#             self.round_two_start_date = None
#             self.round_two_end_date = None
#             self.round_two_status = None
#             self.round_two_finalists.clear()

#         elif self.round_two_start_date is None:
#             raise ValueError("Round two start date is required")

#         elif self.round_two_end_date is None:
#             raise ValueError("Round two end date is required")

#         elif self.round_two_status is None:
#             self.round_two_status = self.RoundStatus.PENDING

#         if not self.id:
#             self.created_at = timezone.now()
#         self.updated_at = timezone.now()
#         return super().save(*args, **kwargs)

#     @property
#     def services_total(self):
#         site_settings = SiteSettings.objects.first()
#         total = 0
#         if self.guarentee:
#             total += site_settings.guraranteed_project_fee
#         if self.promote_to_top:
#             total += site_settings.promoted_project_fee
#         if self.nda:
#             total += site_settings.nda_project_fee
#         return total


# class ContestRound(models.Model):
#     contest = models.ForeignKey(Contest, on_delete=models.CASCADE)
#     start_date = models.DateTimeField()
#     end_date = models.DateTimeField()
#     finalists = models.ManyToManyField("user.User")


# def limit_invitations(pk):
#     """Limit invitations to 5 per project"""
#     return Contest.objects.filter(contest__id=pk).count() <= 5


# class ContestInvitation(models.Model):
#     class Status(models.TextChoices):
#         PENDING = "PENDING", "Pending"
#         ACCEPTED = "ACCEPTED", "Accepted"
#         DECLINED = "DECLINED", "Declined"

#     contest = models.ForeignKey(
#         Contest, on_delete=models.CASCADE, validators=[limit_invitations]
#     )
#     designer = models.ForeignKey("user.User", on_delete=models.CASCADE)
#     status = models.CharField(
#         max_length=8, choices=Status.choices, default=Status.PENDING
#     )

#     class Meta:
#         constraints = [
#             models.UniqueConstraint(
#                 fields=["contest", "designer"], name="unique_contest_invitation"
#             ),
#         ]


# class ContestSubmissionImage(models.Model):
#     contest_submission = models.ForeignKey(
#         "ContestSubmission", on_delete=models.CASCADE
#     )
#     image = models.ImageField(upload_to="contest_submission_images/")


# class ContestSubmission(models.Model):
#     contest = models.ForeignKey(Contest, on_delete=models.CASCADE)
#     designer = models.ForeignKey("user.User", on_delete=models.CASCADE)
#     created_at = models.DateTimeField(editable=False)
#     updated_at = models.DateTimeField(editable=False)
#     is_winner = models.BooleanField(default=False)
#     is_deleted = models.BooleanField(default=False)

#     class Meta:
#         constraints = [
#             models.UniqueConstraint(
#                 fields=["contest", "designer"], name="unique_contest_submission"
#             ),
#             models.UniqueConstraint(
#                 fields=["contest"],
#                 condition=Q(is_winner=True),
#                 name="unique_contest_winner",
#             ),
#         ]

#     def save(self, *args, **kwargs):
#         if not self.pk:
#             self.created_at = timezone.now()
#         self.updated_at = timezone.now()
#         super().save(*args, **kwargs)


# class LogoContest(Contest):
#     design_styles = models.ManyToManyField(DesignStyle)


############## this is a new temp model for testing ############################


from django.db import models
from djmoney.models.fields import MoneyField
from django.utils import timezone
from django.db.models import Q
from django.core.validators import MinValueValidator, MaxValueValidator
from core.models import SiteSettings, DesignStyle


class Package(models.Model):
    class EligibleDesigners(models.TextChoices):
        ALL = "ALL", "All"
        MIDDLE = "MIDDLE", "Middle"
        ADVANCED = "ADVANCED", "Advanced"

    name = models.CharField(max_length=50)
    description = models.TextField()
    price = MoneyField(max_digits=10, decimal_places=2, default_currency="USD")
    eligible_designers = models.CharField(
        choices=EligibleDesigners.choices, max_length=20
    )
    priority_support = models.BooleanField(default=False)
    number_of_entries = models.PositiveIntegerField(default=0)
    dedicated_director = models.BooleanField(default=False)


class Contest(models.Model):
    class Status(models.TextChoices):
        OPENED = "OPENED", "Opened"
        CANCELLED = "CANCELLED", "Cancelled"
        COMPLETED = "COMPLETED", "Completed"

    class ContestExtension(models.TextChoices):
        DAY = "DAY", "Day"
        TWO_DAYS = "TWO_DAYS", "Two Days"

    class RoundStatus(models.TextChoices):
        PENDING = "PENDING", "Pending"
        STOPPED = "STOPPED", "Stopped"

    owner = models.ForeignKey("user.User", on_delete=models.CASCADE, default=4)
    name = models.CharField(max_length=50, default="user")
    languages = models.CharField(max_length=150)
    description = models.TextField()
    category = models.ForeignKey("core.Category", on_delete=models.RESTRICT)
    industry = models.ForeignKey("core.Industry", on_delete=models.RESTRICT)
    url = models.URLField()
    reference = models.URLField()
    logo = models.TextField(null=True)
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
    package = models.ForeignKey(Package, on_delete=models.RESTRICT, null=True)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    round_one_start_date = models.DateTimeField()
    round_one_end_date = models.DateTimeField()
    round_one_finalists = models.ManyToManyField(
        "user.User", related_name="round_one_finalists"
    )
    round_one_status = models.CharField(
        choices=RoundStatus.choices, max_length=8, default=RoundStatus.PENDING
    )
    round_two_start_date = models.DateTimeField(blank=True, null=True)
    round_two_end_date = models.DateTimeField(blank=True, null=True)
    round_two_finalists = models.ManyToManyField(
        "user.User", related_name="round_two_finalists", blank=True
    )
    round_two_status = models.CharField(
        choices=RoundStatus.choices, max_length=8, blank=True, null=True
    )
    contest_extension = models.CharField(
        choices=ContestExtension.choices, max_length=9, blank=True, null=True
    )
    guarantee = models.BooleanField(default=False)
    promote_to_top = models.BooleanField(default=False)
    NDA = models.BooleanField(default=False)
    blind = models.BooleanField(default=False)
    urgent = models.BooleanField(default=False)
    is_listed = models.BooleanField(default=True)
    released = models.BooleanField(
        default=False, help_text="Release the reward to the winner"
    )
    created_at = models.DateTimeField(editable=False)
    updated_at = models.DateTimeField(editable=False)

    class Meta:
        ordering = ["-promote_to_top", "-created_at"]

    def save(self, *args, **kwargs):
        is_new = not self.pk  # Check if this is a new instance
        if is_new:
            self.created_at = timezone.now()
        self.updated_at = timezone.now()

        super().save(*args, **kwargs)

        if is_new:
            # Ensure ID is set before accessing many-to-many fields
            if self.urgent:
                self.round_two_start_date = None
                self.round_two_end_date = None
                self.round_two_status = None
                self.round_two_finalists.set([])

            elif self.round_two_start_date is None:
                raise ValueError("Round two start date is required")

            elif self.round_two_end_date is None:
                raise ValueError("Round two end date is required")

            elif self.round_two_status is None:
                self.round_two_status = self.RoundStatus.PENDING

            super().save(*args, **kwargs)  # Save again to update many-to-many fields

    @property
    def services_total(self):
        site_settings = SiteSettings.objects.first()
        total = 0
        if self.guarantee:
            total += site_settings.guraranteed_project_fee
        if self.promote_to_top:
            total += site_settings.promoted_project_fee
        if self.nda:
            total += site_settings.nda_project_fee
        return total

class ContestRound(models.Model):
    contest = models.ForeignKey(Contest, on_delete=models.CASCADE)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    finalists = models.ManyToManyField("user.User")

def limit_invitations(pk):
    """Limit invitations to 5 per project"""
    return Contest.objects.filter(contest__id=pk).count() <= 5

class ContestInvitation(models.Model):
    class Status(models.TextChoices):
        PENDING = "PENDING", "Pending"
        ACCEPTED = "ACCEPTED", "Accepted"
        DECLINED = "DECLINED", "Declined"

    contest = models.ForeignKey(
        Contest, on_delete=models.CASCADE, validators=[limit_invitations]
    )
    designer = models.ForeignKey("user.User", on_delete=models.CASCADE)
    status = models.CharField(
        max_length=8, choices=Status.choices, default=Status.PENDING
    )

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["contest", "designer"], name="unique_contest_invitation"
            ),
        ]

class ContestSubmissionImage(models.Model):
    contest_submission = models.ForeignKey(
        "ContestSubmission", on_delete=models.CASCADE
    )
    image = models.ImageField(upload_to="contest_submission_images/")

class ContestSubmission(models.Model):
    contest = models.ForeignKey(Contest, on_delete=models.CASCADE)
    designer = models.ForeignKey("user.User", on_delete=models.CASCADE)
    created_at = models.DateTimeField(editable=False)
    updated_at = models.DateTimeField(editable=False)
    is_winner = models.BooleanField(default=False)
    is_deleted = models.BooleanField(default=False)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["contest", "designer"], name="unique_contest_submission"
            ),
            models.UniqueConstraint(
                fields=["contest"],
                condition=Q(is_winner=True),
                name="unique_contest_winner",
            ),
        ]

    def save(self, *args, **kwargs):
        if not self.pk:
            self.created_at = timezone.now()
        self.updated_at = timezone.now()
        super().save(*args, **kwargs)

class LogoContest(Contest):
    design_styles = models.ManyToManyField(DesignStyle)
