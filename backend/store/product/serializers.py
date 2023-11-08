from rest_framework import serializers

from product.models import Product, ProductCategory, ProductReview, ProductSpecs


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"


class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCategory
        fields = "__all__"


class ProductReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductReview
        fields = "__all__"


class ProductSpecSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductSpecs
        fields = "__all__"
