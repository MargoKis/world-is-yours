from rest_framework import status, filters
from rest_framework.permissions import SAFE_METHODS
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, DestroyAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from django_filters import rest_framework as dj_filters
from product import serializers
from product.filters import ProductPaginator, ProductFilter
from product.permissions import CanChangeReview
from product import models


class ProductViewSet(ModelViewSet):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductSerializer
    pagination_class = ProductPaginator
    filter_backends = [filters.OrderingFilter, dj_filters.DjangoFilterBackend]
    ordering_fields = ['price', 'created_at']

    filterset_class = ProductFilter

    def get_permissions(self):
        if self.request.method not in SAFE_METHODS:
            self.permission_classes = [IsAdminUser]
        return super().get_permissions()


class ProductCategoryViewSet(ModelViewSet):
    queryset = models.ProductCategory.objects.all()
    serializer_class = serializers.ProductCategorySerializer

    def get_permissions(self):
        if self.request.method not in SAFE_METHODS:
            self.permission_classes = [IsAdminUser]
        return super().get_permissions()


class ProductSubCategoryViewSet(ModelViewSet):
    queryset = models.ProductSubCategory.objects.all()
    serializer_class = serializers.ProductSubCategorySerializer

    def get_permissions(self):
        if self.request.method not in SAFE_METHODS:
            self.permission_classes = [IsAdminUser]
        return super().get_permissions()


class SubCategorySpecsViewSet(ModelViewSet):
    queryset = models.SubcategorySpecs.objects.all()
    serializer_class = serializers.SubCategorySpecsSerializer

    def get_queryset(self):
        sub_id = self.kwargs.get('sub_id')
        return models.SubcategorySpecs.objects.filter(subcategory_id=sub_id)

    def get_permissions(self):
        if self.request.method not in SAFE_METHODS:
            self.permission_classes = [IsAdminUser]
        return super().get_permissions()

    def create(self, request, *args, **kwargs):
        subcategory = self.kwargs.get('sub_id')
        request.data["subcategory"] = subcategory
        return super().create(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        if 'subcategory' in request.data:
            return Response({'error': 'You cannot change the subcategory.'}, status=status.HTTP_400_BAD_REQUEST)
        return super().update(request, *args, **kwargs)


class CategorySpecsAPIView(ListAPIView):
    queryset = models.SubcategorySpecs.objects.all()
    serializer_class = serializers.SubCategorySpecsSerializer

    def get_queryset(self):
        category_id = self.kwargs.get('category_id')
        subcategory_ids = models.ProductSubCategory.objects.filter(category_id=category_id).values_list('id', flat=True)
        return self.queryset.filter(subcategory_id__in=subcategory_ids)


class ProductReviewViewSet(ModelViewSet):
    queryset = models.ProductReview.objects.all()
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
    queryset = models.ProductSpecs
    serializer_class = serializers.ProductSpecSerializer
    lookup_field = "id"
    permission_classes = [IsAdminUser]


class ProductSpecListAPIView(ListCreateAPIView):
    serializer_class = serializers.ProductSpecSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        product_id = self.kwargs.get('product_id')
        return models.ProductSpecs.objects.filter(product_id=product_id)

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
        return models.Wishlist.objects.filter(user=user)

    def create(self, request, *args, **kwargs):
        user = self.request.user.id
        request.data["user"] = user
        return super().create(request, *args, **kwargs)


class WishlistAPIDeleteView(DestroyAPIView):
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user.id
        return models.Wishlist.objects.filter(user=user)

    def destroy(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        product_id = self.kwargs.get('id')

        wishlist_item = queryset.filter(product=product_id).first()

        if not wishlist_item:
            return Response({'error': 'Wishlist item not found.'}, status=status.HTTP_404_NOT_FOUND)

        if wishlist_item.user != request.user:
            return Response({'error': 'You can only delete items from your own wishlist.'},
                            status=status.HTTP_403_FORBIDDEN)

        wishlist_item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class BasketViewSet(ModelViewSet):
    serializer_class = serializers.BasketSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return models.Basket.objects.filter(user_id=self.request.user.id)

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
