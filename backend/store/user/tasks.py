import uuid
from datetime import timedelta

from celery import shared_task
from django.conf import settings
from django.core.mail import send_mail
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


@shared_task
def send_mail_from_contact_us(email, message, subject, fullname):
    send_mail(
        subject=subject,
        message=f'From: {fullname} ({email})\n\n{message}',
        from_email=email,
        recipient_list=[settings.EMAIL_HOST_USER],
        fail_silently=False,
    )
