from django.contrib import admin
from product.models import Product, ProductCategory, ProductSubCategory, ProductSpecs, ProductReview, Wishlist, Basket


@admin.register(Product)
class ProductModelAdmin(admin.ModelAdmin):
    ...


@admin.register(ProductCategory)
class CategoryModelAdmin(admin.ModelAdmin):
    ...


@admin.register(ProductSubCategory)
class SubCategoryModelAdmin(admin.ModelAdmin):
    ...


@admin.register(ProductSpecs)
class SpecsModelAdmin(admin.ModelAdmin):
    ...


@admin.register(ProductReview)
class ReviewModelAdmin(admin.ModelAdmin):
    ...


@admin.register(Wishlist)
class WishlistModelAdmin(admin.ModelAdmin):
    ...


@admin.register(Basket)
class BasketModelAdmin(admin.ModelAdmin):
    ...
