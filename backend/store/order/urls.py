from django.urls import include, path
from rest_framework.routers import SimpleRouter

from order import views


app_name = 'order'

router = SimpleRouter()
router.register('orders', views.OrderViewSet, 'order')

urlpatterns = [
    path('', include(router.urls)),
    path('payment/', views.OrderCreateView.as_view(), name='payment'),
    path('payment/canceled/', views.CanceledOrderAPIView.as_view(), name='payment-canceled'),
    path('payment/success/', views.SuccessOrderAPIView.as_view(), name='payment-success'),
    path('webhook/stripe/', views.stripe_webhook_view, name='stripe-webhook'),
]
