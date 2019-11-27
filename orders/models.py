from django.db import models
from django.contrib.auth import get_user_model

from carts.models import Cart
from .choices import SHIPING_CHOICES, SHIPING_STATUS_CHOICES
from web.utils import id_generator

User = get_user_model()


class ReciverInfo(models.Model):
    full_name = models.CharField(max_length=125)
    phone_number = models.CharField(max_length=11)
    address = models.TextField()

    def __str__(self):
        return self.full_name


class Order(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.DO_NOTHING, related_name="orders")
    cart = models.ForeignKey(Cart, on_delete=models.DO_NOTHING)
    reciver = models.ForeignKey(ReciverInfo, on_delete=models.DO_NOTHING)
    purchase_invoice = models.BooleanField(default=False)
    shipping_method = models.CharField(choices=SHIPING_CHOICES, max_length=10)
    shipping_status = models.CharField(
        choices=SHIPING_STATUS_CHOICES, max_length=10)
    code = models.CharField(max_length=8, unique=True, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('-created_at',)

    def save(self, *args, **kwargs):
        self.code = id_generator()
        super(Order, self).save(*args, **kwargs)
