from django.urls import path
from order import views


app_name = 'order'


urlpatterns = [
    path('orders/', views.OrderListAPIView.as_view(), name='orders-list'),
    path('payment/', views.OrderCreateView.as_view(), name='payment'),
    path('payment/canceled/', views.CanceledOrderAPIView.as_view(), name='payment-canceled'),
    path('payment/success/', views.SuccessOrderAPIView.as_view(), name='payment-success'),
    path('webhook/stripe/', views.stripe_webhook_view, name='stripe-webhook'),
]
