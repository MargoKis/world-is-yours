from django.urls import path
from rest_framework.authtoken import views

from user.views import UserDetailAPIView, UserListAPIView


app_name = 'user'

urlpatterns = [
    path("users/", UserListAPIView.as_view(), name="user-list"),
    path("users/<int:id>/", UserDetailAPIView.as_view(), name="user-detail"),
    path("auth/", views.obtain_auth_token, name="auth")
]
