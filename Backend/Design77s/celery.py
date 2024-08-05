import os
from celery import Celery

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "Design77s.settings.development")

app = Celery("Design77s")

app.config_from_object("django.conf:settings", namespace="CELERY")

app.autodiscover_tasks()
