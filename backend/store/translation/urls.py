from django.urls import path
from .views import TranslationAPIView

app_name = 'translation'

urlpatterns = [
    path('language/<str:language>/', TranslationAPIView.as_view(), name='language'),
]
