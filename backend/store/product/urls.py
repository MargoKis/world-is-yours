from django.urls import path, include
from rest_framework.routers import SimpleRouter

from product import views

app_name = 'product'

router = SimpleRouter()

router.register('products/category', views.ProductCategoryViewSet, 'product_category')
router.register('products/reviews', views.ProductReviewViewSet, 'product_review')
router.register('products', views.ProductViewSet, 'product')

urlpatterns = [
    path('', include(router.urls)),
    path('products/<int:product_id>/specs/', views.ProductSpecListAPIView.as_view(), name='product_specs_list'),
    path('products/specs/<int:id>/', views.ProductSpecDetailAPIView.as_view(), name='product_specs_detail'),
]
