from rest_framework import serializers

from product.models import Product, ProductCategory, ProductSubCategory, ProductReview, ProductSpecs, Wishlist, Basket


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"


class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCategory
        fields = "__all__"


class ProductSubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductSubCategory
        fields = "__all__"


class ProductReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductReview
        fields = "__all__"


class ProductSpecSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductSpecs
        fields = "__all__"


class WishlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wishlist
        fields = "__all__"


class BasketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Basket
        fields = "__all__"
