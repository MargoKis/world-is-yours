from rest_framework.permissions import SAFE_METHODS
from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated

from product.serializers import ProductSerializer, \
                                ProductCategorySerializer, \
                                ProductReviewSerializer, \
                                ProductSpecSerializer
from product.models import Product, ProductCategory, ProductReview, ProductSpecs


class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductCategoryViewSet(ModelViewSet):
    queryset = ProductCategory.objects.all()
    serializer_class = ProductCategorySerializer


class ProductReviewViewSet(ModelViewSet):
    queryset = ProductReview.objects.all()
    serializer_class = ProductReviewSerializer


class ProductSpecDetailAPIView(RetrieveUpdateDestroyAPIView):
    queryset = ProductSpecs
    serializer_class = ProductSpecSerializer
    lookup_field = "id"


class ProductSpecListAPIView(ListCreateAPIView):
    serializer_class = ProductSpecSerializer

    def get_queryset(self):
        product_id = self.kwargs.get('product_id')
        return ProductSpecs.objects.filter(product_id=product_id)

    def create(self, request, *args, **kwargs):
        product_id = self.kwargs.get('product_id')
        request.data["product_id"] = product_id
        return super().create(request, *args, **kwargs)
