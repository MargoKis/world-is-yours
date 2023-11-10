from rest_framework.routers import SimpleRouter

from order.views import OrderViewSet


app_name = 'order'

router = SimpleRouter()
router.register('orders', OrderViewSet, 'order')

urlpatterns = router.urls
