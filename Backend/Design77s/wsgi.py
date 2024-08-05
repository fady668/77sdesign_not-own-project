import os
import pathlib
from django.core.wsgi import get_wsgi_application
import dotenv

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "Design77s.settings.development")
dotenv.load_dotenv()

application = get_wsgi_application()
