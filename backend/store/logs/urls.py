from django.urls import path
from logs import views


app_name = 'logs'

urlpatterns = [
    path('', views.LogsPostAPIView.as_view(), name='post-logs'),
    # path('platform/', views.OrderListAPIView.as_view(), name='platform'),
    # path('location/', views.OrderListAPIView.as_view(), name='location'),
]
