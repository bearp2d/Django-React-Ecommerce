from rest_framework import serializers

from .models import CartItem
from products.serializers import ProductListSerializer


class CartSerializer(serializers.ModelSerializer):
    product = ProductListSerializer()

    class Meta:
        model = CartItem
        fields = ('id', 'product', 'quantity')
