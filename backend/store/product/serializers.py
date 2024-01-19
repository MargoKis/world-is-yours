from rest_framework import serializers

from product.models import Product, ProductCategory, ProductSubCategory, ProductReview, ProductSpecs, Wishlist, Basket


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        exclude = "description_uk", "description_en", "name_uk", "name_en"


class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCategory
        exclude = "description_uk", "description_en", "name_uk", "name_en"


class ProductSubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductSubCategory
        exclude = "description_uk", "description_en", "name_uk", "name_en"


class ProductReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductReview
        fields = "__all__"


class ProductSpecSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductSpecs
        fields = "product_id", "name", "value"


class WishlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wishlist
        fields = "__all__"


class BasketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Basket
        fields = "__all__"
