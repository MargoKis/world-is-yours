from django.contrib import admin
from product.models import Product, ProductCategory, ProductSpecs, ProductReview


@admin.register(Product)
class TaskModelAdmin(admin.ModelAdmin):
    ...


@admin.register(ProductCategory)
class TaskModelAdmin(admin.ModelAdmin):
    ...


@admin.register(ProductSpecs)
class TaskModelAdmin(admin.ModelAdmin):
    ...


@admin.register(ProductReview)
class TaskModelAdmin(admin.ModelAdmin):
    ...

