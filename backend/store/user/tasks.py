import uuid
from datetime import timedelta

from celery import shared_task
from django.utils.timezone import now
from django.contrib.auth import get_user_model

from user.models import EmailVerification

UserModel = get_user_model()


@shared_task
def send_email_verification(user_id):
    user = UserModel.objects.get(id=user_id)
    expiration = now() + timedelta(hours=48)
    record = EmailVerification.objects.create(code=uuid.uuid4(),
                                              user=user,
                                              expiration=expiration)
    record.send_verification_email()
