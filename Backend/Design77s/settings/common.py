import os
from pathlib import Path
from ..logging import ColorFormatter
import moneyed
from firebase_admin import initialize_app

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent.parent

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
# SECRET_KEY = open(os.path.join(BASE_DIR.parent, "run", "SECRET.key")).read().strip()
SECRET_KEY = 'django-insecure-kcq_&*5s$j2^t8hq3=qwsf7)o5@)os&ay9_16ywa%u15z$pm5c'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

# Application definition
INSTALLED_APPS = [
    "daphne",
    "channels",
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "corsheaders",
    "haystack",
    "rest_framework",
    "user",
    "core",
    "project",
    "sslserver",
    "django_filters",
    "payment",
    "djmoney",
    "djmoney.contrib.exchange",
    "fcm_django",
    "contest",
    "drf_spectacular",
    "drf_spectacular_sidecar",
    "chat",
    "django_extensions",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "Design77s.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [BASE_DIR / "templates"],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "Design77s.wsgi.application"
ASGI_APPLICATION = "Design77s.asgi.application"

# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# DB_HOST = os.getenv("DB_HOST", "localhost")
# DB_NAME = os.getenv("DB_NAME", "77designs")
# DB_USER = os.getenv("DB_USER", "postgres")
# DB_PASSWORD = os.getenv("DB_PASSWORD", "postgres")
# DB_PORT = int(os.getenv("DB_PORT", 5432))
# DATABASES = {
#     "default": {
#         "ENGINE": "django.db.backends.postgresql",
#         "NAME": DB_NAME,
#         "USER": DB_USER,
#         "PASSWORD": DB_PASSWORD,
#         "HOST": DB_HOST,
#         "PORT": DB_PORT,
#     }
# }

# Password validation
# https://docs.djangoproject.com/en/4.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]

# Internationalization
# https://docs.djangoproject.com/en/4.1/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_TZ = True

# Static files
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')  # This should be different from STATICFILES_DIRS
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),  # This is your development static directory
]
STATIC_URL = '/static/'

# Media files
MEDIA_URL = "media/"
MEDIA_ROOT = os.path.join(BASE_DIR, "media")

# Default primary key field type
# https://docs.djangoproject.com/en/4.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

AUTH_USER_MODEL = "user.User"

AUTHENTICATION_BACKENDS = [
    "django.contrib.auth.backends.ModelBackend",
    "user.backends.ThirdPartyAuthBackend",
]

REDIS_HOST = os.getenv("REDIS_HOST", "localhost")
REDIS_PORT = os.getenv("REDIS_PORT", 6379)
REDIS_URL = f"redis://{REDIS_HOST}:{REDIS_PORT}/1"

# CACHES = {
#     "default": {
#         "BACKEND": "django.core.cache.backends.redis.RedisCache",
#         "LOCATION": REDIS_URL,
#     },
#     "async": {
#         "BACKEND": "django_async_redis.cache.RedisCache",
#         "LOCATION": REDIS_URL,
#         "OPTIONS": {
#             "CLIENT_CLASS": "django_async_redis.client.DefaultClient",
#         },
#     },
# }
CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
    }
}


HAYSTACK_CONNECTIONS = {
    "default": {
        "ENGINE": "haystack.backends.whoosh_backend.WhooshEngine",
        "PATH": os.path.join(os.path.dirname(__file__), "whoosh_index"),
    },
}

HAYSTACK_SIGNAL_PROCESSOR = "haystack.signals.RealtimeSignalProcessor"

# Channels
CHANNEL_LAYERS = {
    "default": {
        "BACKEND": "channels_redis.core.RedisChannelLayer",
        "CONFIG": {
            "hosts": [(REDIS_HOST, REDIS_PORT)],
        },
    },
}
# DRF
REST_FRAMEWORK = {
    # "DEFAULT_PERMISSION_CLASSES": [
    #     "user.permissions.IsVerified",
    # ],
    # "DEFAULT_AUTHENTICATION_CLASSES": [
    #     "rest_framework_simplejwt.authentication.JWTAuthentication",
    # ],
    "DEFAULT_SCHEMA_CLASS": "drf_spectacular.openapi.AutoSchema",
    "DEFAULT_FILTER_BACKENDS": [
        "django_filters.rest_framework.DjangoFilterBackend",
    ],
    "DEFAULT_PAGINATION_CLASS": "rest_framework.pagination.PageNumberPagination",
    "PAGE_SIZE": 10,
    "SEARCH_PARAM": "q",
}

SPECTACULAR_SETTINGS = {
    "SWAGGER_UI_DIST": "SIDECAR",
    "SWAGGER_UI_FAVICON_HREF": "SIDECAR",
    "TITLE": "77s Design API",
    "DESCRIPTION": "77s Design API Docs",
    "VERSION": "1.0",
    "SERVE_INCLUDE_SCHEMA": False,
}

# CORS
# CORS_EXPOSE_HEADERS = ["Content-Type", "X-CSRFToken"]
CORS_ALLOW_CREDENTIALS = True

SESSION_COOKIE_NAME = "77SDESIGN_SESSION_ID"
CSRF_COOKIE_NAME = "77SDESIGN_CSRF_TOKEN"

# EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
# EMAIL_HOST = os.environ.get("EMAIL_HOST")
# EMAIL_HOST_USER = os.environ.get("EMAIL_HOST_USER")
# EMAIL_HOST_PASSWORD = os.environ.get("EMAIL_HOST_PASSWORD")
# EMAIL_PORT = os.getenv("EMAIL_PORT", 587)
# EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
# EMAIL_HOST = 'smtp.outlook.office365.com'
# EMAIL_PORT = 587
# EMAIL_USE_TLS = True
# EMAIL_HOST_USER = 'nanomanfaa2@outlook.com'
# EMAIL_HOST_PASSWORD = 'Rom@123456789'

###### Mailtrap ######

EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_HOST = 'sandbox.smtp.mailtrap.io'
EMAIL_HOST_USER = '6021a49f573b68'
EMAIL_HOST_PASSWORD = 'd239bed48fa49c'
EMAIL_PORT = '2525'


# SOCIAL_SECRET_KEY = (
#     open(os.path.join(BASE_DIR.parent, "run", "SOCIAL_SECRET.key")).read().strip()
# )

GOOGLE_CLIENT_ID = os.environ.get("GOOGLE_CLIENT_ID")

LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "verbose": {
            "format": "[%(levelname)s] %(asctime)s %(module)s %(process)d %(thread)d %(message)s"
        },
        "simple": {"format": "[%(levelname)s] %(message)s"},
        "color": {
            "()": ColorFormatter,
            "format": "[%(levelname)s] %(asctime)s %(module)s  %(message)s",
        },
    },
    "filters": {
        "require_debug_true": {
            "()": "django.utils.log.RequireDebugTrue",
        },
    },
    "handlers": {
        "console": {
            "level": "INFO",
            "filters": ["require_debug_true"],
            "class": "logging.StreamHandler",
            "formatter": "color",
        },
        "file": {
            "level": "WARNING",
            "class": "logging.FileHandler",
            "formatter": "verbose",
            "filename": "./logs/error.log",
        },
    },
    "loggers": {
        "django": {
            "handlers": ["console", "file"],
            "propagate": True,
        },
    },
}

EGP = moneyed.add_currency(
    code="EGP", numeric="818", name="Egyptian Pound", countries=("Egypt",)
)

CURRENCIES = ("EGP", "USD")
CURRENCY_CHOICES = [("EGP", "EGP €"), ("USD", "USD $")]
EXCHANGE_BACKEND = "payment.backends.exchange.ExchangeBackend"

PAYPAL_CLIENT_ID = os.environ.get("PAYPAL_CLIENT_ID")
PAYPAL_CLIENT_SECRET = os.environ.get("PAYPAL_CLIENT_SECRET")
PAYPAL_BASE_URL = os.environ.get("PAYPAL_BASE_URL")
PAYPAL_RETURN_URL = os.environ.get("PAYPAL_RETURN_URL")
PAYPAL_CANCEL_URL = os.environ.get("PAYPAL_CANCEL_URL")

FIREBASE_APP = initialize_app()

SITE_PROTOCOL = os.environ.get("SITE_PROTOCOL", "http")
SITE_DOMAIN = os.environ.get("SITE_DOMAIN", "localhost:3000")
SITE_URL = f"{SITE_PROTOCOL}://{SITE_DOMAIN}"

CELERY_BROKER_URL = REDIS_URL
CELERY_RESULT_BACKEND = REDIS_URL
