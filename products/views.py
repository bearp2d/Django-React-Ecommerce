from rest_framework.generics import RetrieveAPIView, ListAPIView

from .serializers import ProductListSerializer, ProductDetailSerializer
from .models import Product


class ProductListView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductListSerializer


class ProductDetailView(RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductDetailSerializer
    lookup_field = 'slug'
