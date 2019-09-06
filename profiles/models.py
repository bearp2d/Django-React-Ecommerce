from django.db import models
from django.contrib.auth import get_user_model
from django.core.validators import RegexValidator

from products.models import Product

User = get_user_model()


class Address(models.Model):
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    reciver_full_name = models.CharField(max_length=120)
    reciver_phone_number = models.CharField(max_length=11, validators=[
        RegexValidator('^09\d{9}$', message="Invalid phone number.")])
    state = models.CharField(max_length=120)
    city = models.CharField(max_length=120)
    postal_address = models.TextField()
    postal_code = models.CharField(max_length=10)

    class Meta:
        verbose_name_plural = 'Addresses'

    def __str__(self):
        return self.user.username


class FavoritesProducts(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    products = models.ManyToManyField(Product, related_name='products')

    class Meta:
        verbose_name_plural = 'Favorites Products'

    def __str__(self):
        return self.user.username
