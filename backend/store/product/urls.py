from django.urls import path, include
from rest_framework.routers import SimpleRouter

from product import views

app_name = 'product'

router = SimpleRouter()

router.register('products/category', views.ProductCategoryViewSet, 'product_category')
router.register('products/subcategory', views.ProductSubCategoryViewSet, 'product_subcategory')
router.register(r'products/subcategory/(?P<sub_id>\d+)/specs', views.SubCategorySpecsViewSet, 'subcategory_specs')
router.register('products/reviews', views.ProductReviewViewSet, 'product_review')
router.register('products', views.ProductViewSet, 'product')
router.register('baskets', views.BasketViewSet, 'basket')

urlpatterns = [
    path('', include(router.urls)),
    path('products/category/<int:category_id>/specs/', views.CategorySpecsAPIView.as_view(), name='category_specs'),
    path('products/<int:product_id>/specs/', views.ProductSpecListAPIView.as_view(), name='product_specs_list'),
    path('products/specs/<int:id>/', views.ProductSpecDetailAPIView.as_view(), name='product_specs_detail'),
    path('wishlist/', views.WishlistAPIListView.as_view(), name='wishlist'),
    path('wishlist/<int:id>/', views.WishlistAPIDeleteView.as_view(), name='wishlist_delete'),
]
