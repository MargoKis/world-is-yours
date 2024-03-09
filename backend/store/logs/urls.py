from django.urls import path
from logs import views


app_name = 'logs'

urlpatterns = [
    path('', views.LogsPostAPIView.as_view(), name='post-logs'),
    path('users/', views.UserLogsAPIView.as_view(), name='user-logs'),
    path('orders/', views.OrderLogsAPIView.as_view(), name='orders-logs'),
]
