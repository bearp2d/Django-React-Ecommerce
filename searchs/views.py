from rest_framework.generics import ListAPIView

from products.serializers import ProductListSerializer
from products.pagination import ProductPagination
from .models import Search
from products.models import Product


class SearchView(ListAPIView):
    serializer_class = ProductListSerializer
    pagination_class = ProductPagination

    def get_queryset(self):
        q = self.request.GET.get('q', None)
        user = self.request.user
        if q:
            if user.is_authenticated:
                Search.objects.get_or_create(user=user, query=q)
            else:
                Search.objects.get_or_create(query=q)
            return Search.objects.search(q)
        return Product.objects.all()
