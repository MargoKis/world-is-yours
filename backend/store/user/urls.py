from django.urls import path
from rest_framework.authtoken import views

from user.views import UserDetailAPIView, UserListAPIView, EmailVerificationView


app_name = 'user'

urlpatterns = [
    path("users/", UserListAPIView.as_view(), name="user-list"),
    path("users/<int:id>/", UserDetailAPIView.as_view(), name="user-detail"),
    path('verify-email/<str:email>/<uuid:code>/', EmailVerificationView.as_view(), name='email_verification'),
    path("auth/", views.obtain_auth_token, name="auth"),
]
