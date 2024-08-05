import pytz
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinValueValidator, MaxValueValidator
from .managers import UserManager


class User(AbstractUser):
    class UserType(models.TextChoices):
        STAFF = "staff"
        CLIENT = "client"
        DESIGNER = "designer"
        BOTH = "both"

    class AuthProvider(models.TextChoices):
        GOOGLE = "google"
        FACEBOOK = "facebook"
        EMAIL = "email"

    email = models.EmailField(unique=True)
    username = models.CharField(max_length=150, unique=True, blank=True, null=True)
    first_name = None
    last_name = None
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    user_type = models.CharField(
        max_length=8, choices=UserType.choices, default=None, blank=True, null=True
    )

    is_verified = models.BooleanField(default=False)

    auth_provider = models.CharField(
        choices=AuthProvider.choices, max_length=10, default=AuthProvider.EMAIL
    )
    backend = models.CharField(
        max_length=50, default="django.contrib.auth.backends.ModelBackend"
    )

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def save(self, *args, **kwargs):
        if self.auth_provider != "email":
            self.backend = "user.backends.ThirdPartyAuthBackend"
        if self.pk is None:
            try:
                self.username = self.email.split("@")[0] + str(
                    User.objects.latest("id").id + 1
                )
            except User.DoesNotExist:
                self.username = self.email.split("@")[0]
        super().save(*args, **kwargs)

    def get_full_name(self):
        # The user is identified by their email address
        return self.email

    def get_short_name(self):
        # The user is identified by their username
        return self.username

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_designer(self):
        return DesignerProfile.objects.filter(user=self).exists()

    @property
    def is_client(self):
        return ClientProfile.objects.filter(user=self).exists()

    @property
    def profile(self, user_type: UserType = None):
        if (self.user_type or user_type) == self.UserType.DESIGNER:
            qs = DesignerProfile.objects.filter(user=self)
            if qs.exists():
                return qs[0]
        elif (self.user_type or user_type) == self.UserType.CLIENT:
            qs = ClientProfile.objects.filter(user=self)
            if qs.exists():
                return qs[0]
        return None


class Profile(models.Model):
    TIMEZONE_CHOICES = [(tz, tz) for tz in pytz.common_timezones]
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    city = models.CharField(max_length=20)
    timezone = models.CharField(max_length=50, choices=TIMEZONE_CHOICES)
    address = models.CharField(max_length=100)
    state = models.CharField(max_length=50)
    zip_code = models.CharField(max_length=30)
    phone = models.CharField(max_length=50)
    languages = models.CharField(max_length=50)
    bio = models.TextField()
    avatar = models.ImageField(upload_to="avatars/", blank=True, null=True)
    id_card = models.ImageField(upload_to="id_cards/", blank=True, null=True)
    rating = models.PositiveSmallIntegerField(default=0)

    class Meta:
        abstract = True


class DesignerProfile(Profile):
    class Gender(models.TextChoices):
        MALE = "M", "Male"
        FEMALE = "F", "Female"

    class Level(models.TextChoices):
        Entry = "Entry", "Entry"
        MIDDLE = "Middle", "Middle"
        ADVANCED = "Advanced", "Advanced"

    gender = models.CharField(max_length=1, choices=Gender.choices)
    birth_date = models.DateField(auto_now_add=True)
    available = models.BooleanField(default=True)
    notify = models.BooleanField(default=True)
    email_comments_messages = models.BooleanField(default=False)
    email_remind_deadlines = models.BooleanField(default=False)
    email_winner = models.BooleanField(default=False)
    level = models.CharField(max_length=8, choices=Level.choices, default=Level.Entry)
    rating = models.DecimalField(
        default=0,
        max_digits=2,
        decimal_places=1,
        validators=[MinValueValidator(0), MaxValueValidator(5)],
    )

    class Meta:
        ordering = ["-rating"]

    def save(self, *args, **kwargs):
        if self.pk is None:
            self.user.user_type = self.user.user_type
        super().save(*args, **kwargs)


class SocialMediaLink(models.Model):
    profile = models.OneToOneField(DesignerProfile, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    url = models.URLField()


class PortfolioLink(models.Model):
    profile = models.OneToOneField(DesignerProfile, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    url = models.URLField()


class SampleDesign(models.Model):
    category = models.ForeignKey("core.Category", on_delete=models.CASCADE)
    profile = models.ForeignKey(
        DesignerProfile, on_delete=models.CASCADE, related_name="sample_designs"
    )
    # title = models.CharField(max_length=50)
    image = models.ImageField(upload_to="sample_designs/")


class ClientProfile(Profile):
    def save(self, *args, **kwargs):
        if self.pk is None:
            self.user.user_type = self.user.user_type
        super().save(*args, **kwargs)


class UserVerification(models.Model):
    class Status(models.TextChoices):
        PENDING = "P", "Pending"
        APPROVED = "A", "Approved"
        REJECTED = "R", "Rejected"
        BLOCKED = "B", "Blocked"

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    id_card = models.ImageField(upload_to="id_cards/")
    id_number = models.CharField(max_length=50)
    status = models.CharField(
        max_length=1, choices=Status.choices, default=Status.PENDING
    )
    reason = models.TextField(blank=True, null=True)

    def save(self, *args, **kwargs):
        if self.status == self.Status.BLOCKED:
            self.user.is_active = False
            self.user.save()
        if self.status == self.Status.APPROVED:
            self.user.is_verified = True
            self.user.save()
        super().save(*args, **kwargs)
