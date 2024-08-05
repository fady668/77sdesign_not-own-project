from celery import shared_task
from .utils import send_emailo
from Design77s.logging import logger


@shared_task(bind=True)
def send_email_task(self, recipient: str, subject: str, template: str, context: dict):
    print("Sending email")
    try:
        print("Sending email agaaaain")

        send_emailo(recipient, subject, template, context)
        print("Sent email")
    except Exception as e:
        print("error sending email")
        logger.error(e)
        raise self.retry(exc=e, countdown=60)
    return True
