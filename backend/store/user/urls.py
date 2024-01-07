from django.urls import path, include
from rest_framework.authtoken import views

from user import views as user_views

app_name = 'user'

urlpatterns = [
    path("users/", user_views.UserListAPIView.as_view(), name="user-list"),
    path("users/<int:id>/", user_views.UserDetailAPIView.as_view(), name="user-detail"),
    path('verify-email/<str:email>/<uuid:code>/', user_views.EmailVerificationView.as_view(), name='email_verification'),
    path("auth/", views.obtain_auth_token, name="auth"),
    path('password_reset/', user_views.PasswordChangeRequestView.as_view(), name='reset_password_request'),
    path('reset-password/<str:email>/<uuid:code>/', user_views.PasswordResetView.as_view(), name='password_changing'),
]
