from rest_framework import serializers

from product import models


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Product
        exclude = "description_uk", "description_en", "name_uk", "name_en"


class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductCategory
        exclude = "description_uk", "description_en", "name_uk", "name_en"


class ProductSubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductSubCategory
        exclude = "description_uk", "description_en", "name_uk", "name_en"


class SubCategorySpecsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.SubcategorySpecs
        fields = "__all__"


class ProductReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductReview
        fields = "__all__"


class ProductSpecSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductSpecs
        fields = "product_id", "name", "value"


class WishlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Wishlist
        fields = "__all__"


class BasketSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Basket
        fields = "__all__"
