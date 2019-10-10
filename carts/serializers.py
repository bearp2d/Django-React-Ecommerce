from rest_framework import serializers

from .models import CartItem, Cart
from products.serializers import ProductListSerializer


class CartItemSerializer(serializers.ModelSerializer):
    product = ProductListSerializer(read_only=True)

    class Meta:
        model = CartItem
        fields = '__all__'
        read_only_fields = ('cart',)


class AddItemToCartSerializer(serializers.ModelSerializer):

    class Meta:
        model = CartItem
        fields = '__all__'
        read_only_fields = ('quantity',)

    def create(self, validated_data):
        user = self.context.get('request').user
        product = validated_data.get('product')
        obj = Cart.objects.get(user=user)
        cart_item, exists = CartItem.objects.get_or_create(product=product)
        obj.items.add(cart_item)
        return cart_item


class CartSerializer(serializers.ModelSerializer):
    items = CartItemSerializer(many=True)

    class Meta:
        model = Cart
        fields = '__all__'
