import os

from .common import *


DEBUG = True
ALLOWED_HOSTS = os.getenv("ALLOWED_HOSTS").split(" ")

AWS_ACCESS_KEY_ID = os.environ.get("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = os.environ.get("AWS_SECRET_ACCESS_KEY")
AWS_STORAGE_BUCKET_NAME = os.environ.get("AWS_STORAGE_BUCKET_NAME")
AWS_S2_FILE_OVERWRITE = False
AWS_DEFAULT_ACL = None
AWS_S3_REGION_NAME = "eu-west-3"
STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")

STORAGES = {
    "default": {
        "BACKEND": "storages.backends.s3boto3.S3Boto3Storage",
    },
    "staticfiles": {
        "BACKEND": "storages.backends.s3boto3.S3StaticStorage",
    },
}

# TODO: add this to real production
# CORS_ALLOWED_ORIGINS = os.getenv("CORS_ALLOWED_ORIGINS").split(" ")

# Development only # TODO: Remove this
CORS_ALLOW_ALL_ORIGINS = True

CSRF_COOKIE_DOMAIN = ".ahmedhatem.me"
SESSION_COOKIE_DOMAIN = ".ahmedhatem.me"
CSRF_TRUSTED_ORIGINS = os.getenv("CSRF_TRUSTED_ORIGINS").split(" ")

PAPERTRAIL_HOST: str = os.environ.get("PAPERTRAIL_HOST")
PAPERTRAIL_PORT: int = int(os.environ.get("PAPERTRAIL_PORT"))

# Logging
LOGGING["handlers"].update(
    {
        "SysLog": {
            "level": "WARNING",
            "class": "logging.handlers.SysLogHandler",
            "formatter": "verbose",
            "address": (PAPERTRAIL_HOST, PAPERTRAIL_PORT),
        },
    }
)
LOGGING["loggers"]["django"]["handlers"].append("SysLog")
