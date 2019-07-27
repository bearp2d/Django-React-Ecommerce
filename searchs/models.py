from django.db import models
from django.contrib.auth import get_user_model

from products.models import Product

User = get_user_model()


class SearchManager(models.Manager):
    def search(self, q):
        return Product.objects.search(q)


class Search(models.Model):
    user = models.ForeignKey(User, blank=True, null=True,
                             on_delete=models.DO_NOTHING)
    query = models.CharField(max_length=150)
    created_at = models.DateTimeField(auto_now_add=True)

    objects = SearchManager()

    def __str__(self):
        return self.query
