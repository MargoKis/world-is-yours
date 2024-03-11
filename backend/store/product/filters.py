from django.db.models import Q
from rest_framework.pagination import PageNumberPagination
from django_filters import rest_framework as filters
from product.models import Product, ProductSubCategory


class ProductFilter(filters.FilterSet):
    price = filters.NumberFilter(field_name='price', lookup_expr='lte')
    is_on_sale = filters.BooleanFilter(field_name='old_price', method='filter_on_sale')
    subcategory = filters.NumberFilter(field_name='category')
    category = filters.NumberFilter(field_name='category', method='filter_by_category')

    class Meta:
        model = Product
        fields = ['price', 'is_on_sale']

    def filter_on_sale(self, queryset, name, value):
        if value:
            return queryset.filter(old_price__isnull=False)
        else:
            return queryset.filter(old_price__isnull=True)

    def filter_by_category(self, queryset, name, value):
        if value:
            subcategory_ids = ProductSubCategory.objects.filter(category_id=value).values_list('id', flat=True)
            products = queryset.filter(category_id__in=subcategory_ids)
            return products


class ProductPaginator(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100
