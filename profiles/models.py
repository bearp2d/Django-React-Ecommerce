from django.db import models
from django.contrib.auth import get_user_model
from django.core.validators import RegexValidator
from django.db.models.signals import post_save
from django.dispatch import receiver

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
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name='favorite_products')
    products = models.ManyToManyField(
        Product, related_name='products', blank=True)

    class Meta:
        verbose_name_plural = 'Favorites Products'

    def __str__(self):
        return self.user.username

# Each user should be have favorite products
# When user registered create favorite products model with this user


@receiver(post_save, sender=User)
def create_fvorite_products(sender, instance, created, **kwargs):
    if created:
        FavoritesProducts.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_fvorite_products(sender, instance, **kwargs):
    instance.favorite_products.save()
