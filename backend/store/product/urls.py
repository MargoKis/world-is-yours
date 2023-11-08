from rest_framework.routers import SimpleRouter

from product.views import ProductViewSet


app_name = 'product'


router = SimpleRouter()
router.register('products', ProductViewSet, 'product')

urlpatterns = router.urls
