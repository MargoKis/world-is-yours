import uuid
from datetime import timedelta

from celery import shared_task
from django.utils.timezone import now
from django.contrib.auth import get_user_model

from user.models import EmailVerification, EmailPasswordReset

UserModel = get_user_model()


@shared_task
def send_email_verification(user_id):
    user = UserModel.objects.get(id=user_id)
    expiration = now() + timedelta(hours=48)
    record = EmailVerification.objects.create(code=uuid.uuid4(),
                                              user=user,
                                              expiration=expiration)
    record.send_verification_email()


@shared_task
def send_password_change(user_id):
    user = UserModel.objects.get(id=user_id)
    expiration = now() + timedelta(hours=24)
    record = EmailPasswordReset.objects.create(code=uuid.uuid4(),
                                               user=user,
                                               expiration=expiration)
    record.send_verification_email()
