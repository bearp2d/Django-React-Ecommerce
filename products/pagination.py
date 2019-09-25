from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response


class ProductPagination(PageNumberPagination):
    page_size = 2

    def get_paginated_response(self, data):
        next_page_query = (self.get_next_link().split('/')[-1]
                           if self.get_next_link() else None)

        previous_page_query = (self.get_previous_link().split('/')[-1]
                               if self.get_previous_link() else None)

        return Response({
            'pages_count': self.page.paginator.num_pages,
            'products_count': self.page.paginator.count,
            'per_page': self.page.paginator.per_page,
            'ordering': self.request.GET.get('ordering'),
            'current': self.page.number,
            'next': next_page_query,
            'previous': previous_page_query,
            'products': data
        })
