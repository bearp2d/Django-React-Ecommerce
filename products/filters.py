from django_filters.rest_framework import FilterSet, NumberFilter
from .models import Product


class ProductFilter(FilterSet):
    min_price = NumberFilter(field_name="price", lookup_expr='gte')
    max_price = NumberFilter(field_name="price", lookup_expr='lte')

    class Meta:
        model = Product
        fields = ['colors__color', 'available',
                  'min_price', 'max_price', 'sizes__size']
