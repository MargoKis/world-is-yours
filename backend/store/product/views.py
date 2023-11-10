from rest_framework import status
from rest_framework.permissions import SAFE_METHODS
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, DestroyAPIView
from rest_framework.permissions import IsAuthenticated, IsAdminUser


from product import serializers
from product.permissions import CanChangeReview
from product.models import Product, ProductCategory, ProductReview, ProductSpecs, Wishlist, Basket


class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = serializers.ProductSerializer

    def get_permissions(self):
        if self.request.method not in SAFE_METHODS:
            self.permission_classes = [IsAdminUser]
        return super().get_permissions()


class ProductCategoryViewSet(ModelViewSet):
    queryset = ProductCategory.objects.all()
    serializer_class = serializers.ProductCategorySerializer

    def get_permissions(self):
        if self.request.method not in SAFE_METHODS:
            self.permission_classes = [IsAdminUser]
        return super().get_permissions()


class ProductReviewViewSet(ModelViewSet):
    queryset = ProductReview.objects.all()
    serializer_class = serializers.ProductReviewSerializer
    permission_classes = [IsAuthenticated, CanChangeReview]

    def create(self, request, *args, **kwargs):
        user = request.user.id
        request.data["user"] = user
        return super().create(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        if set(request.data.keys()) == {'comment'}:
            # Встановлюємо partial=True для оновлення частково
            kwargs['partial'] = True
            return super().update(request, *args, **kwargs)
        else:
            return Response({'error': 'You can only update the comment field.'}, status=status.HTTP_400_BAD_REQUEST)


class ProductSpecDetailAPIView(RetrieveUpdateDestroyAPIView):
    queryset = ProductSpecs
    serializer_class = serializers.ProductSpecSerializer
    lookup_field = "id"
    permission_classes = [IsAdminUser]


class ProductSpecListAPIView(ListCreateAPIView):
    serializer_class = serializers.ProductSpecSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        product_id = self.kwargs.get('product_id')
        return ProductSpecs.objects.filter(product_id=product_id)

    def get_permissions(self):
        if self.request.method not in SAFE_METHODS:
            self.permission_classes = [IsAdminUser]
        return super().get_permissions()

    def create(self, request, *args, **kwargs):
        product_id = self.kwargs.get('product_id')
        request.data["product_id"] = product_id
        return super().create(request, *args, **kwargs)


class WishlistAPIListView(ListCreateAPIView):
    serializer_class = serializers.WishlistSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user.id
        return Wishlist.objects.filter(user=user)

    def create(self, request, *args, **kwargs):
        user = self.request.user.id
        request.data["user"] = user
        return super().create(request, *args, **kwargs)


class WishlistAPIDeleteView(DestroyAPIView):
    lookup_field = "id"
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user.id
        return Wishlist.objects.filter(user=user)

    def delete(self, request, *args, **kwargs):
        if self.request.user.id == self.get_object().user.id:
            return super().delete(request, *args, **kwargs)
        return Response({'error': 'You can only delete your wishlist.'}, status=status.HTTP_400_BAD_REQUEST)


class BasketViewSet(ModelViewSet):
    serializer_class = serializers.BasketSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Basket.objects.filter(user_id=self.request.user.id)

    def update(self, request, *args, **kwargs):
        if set(request.data.keys()) == {'quantity'}:
            kwargs['partial'] = True
            return super().update(request, *args, **kwargs)
        else:
            return Response({'error': 'You can only update the quantity field.'}, status=status.HTTP_400_BAD_REQUEST)

    def create(self, request, *args, **kwargs):
        user = self.request.user.id
        request.data["user"] = user
        return super().create(request, *args, **kwargs)
