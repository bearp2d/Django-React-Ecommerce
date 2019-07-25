from rest_framework.generics import RetrieveAPIView, ListAPIView
from rest_framework.filters import OrderingFilter

from .serializers import ProductListSerializer, ProductDetailSerializer
from .models import Product
from .pagination import ProductPagination


class ProductListView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductListSerializer
    pagination_class = ProductPagination
    filter_backends = (OrderingFilter, )
    ordering_fields = ('created_at', 'sale_count', 'price')


class ProductDetailView(RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductDetailSerializer
    lookup_field = 'slug'
