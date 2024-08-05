from .common import *

DEBUG = True
ALLOWED_HOSTS = ["*"]

STATICFILES_DIRS = [BASE_DIR / "static"]
MEDIA_ROOT = "media"

CORS_ORIGIN_ALLOW_ALL = True
CORS_TRUSTED_ORIGINS = ["http://localhost:3000", "http://localhost:8000"]
