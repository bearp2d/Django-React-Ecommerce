from django.db import models
from django.contrib.auth import get_user_model

from carts.models import Cart
from profiles.models import Address
from .choices import SHIPING_CHOICES, SHIPING_STATUS_CHOICES

User = get_user_model()


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    cart = models.ForeignKey(Cart, on_delete=models.DO_NOTHING)
    address = models.ForeignKey(Address, on_delete=models.DO_NOTHING)
    ordered = models.BooleanField(default=False)
    send_factor = models.BooleanField(default=False)
    shiping_method = models.CharField(choices=SHIPING_CHOICES, max_length=10)
    shiping_status = models.CharField(
        choices=SHIPING_STATUS_CHOICES, max_length=10)
