from rest_framework.generics import RetrieveAPIView, ListAPIView
from rest_framework.filters import OrderingFilter

from .serializers import ProductListSerializer, ProductDetailSerializer
from .models import Product
from .pagination import ProductPagination


class ProductListView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductListSerializer
    pagination_class = ProductPagination

    def get_queryset(self):
        queryset = Product.objects.all()
        ordering = self.request.query_params.get('ordering', None)
        if ordering is not None and ordering == "max_price":
            queryset = queryset.order_by('-price')
        if ordering is not None and ordering == "min_price":
            queryset = queryset.order_by('price')
        if ordering is not None and ordering == "best_seller":
            queryset = queryset.order_by('-sale_count')
        return queryset


class ProductDetailView(RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductDetailSerializer
    lookup_field = 'slug'
