from rest_framework import serializers

from .models import CartItem, Cart
from products.serializers import ProductListSerializer


class CartItemSerializer(serializers.ModelSerializer):
    product = ProductListSerializer(read_only=True)
    total_price = serializers.SerializerMethodField()

    class Meta:
        model = CartItem
        fields = '__all__'
        read_only_fields = ('cart',)

    def get_total_price(self, obj):
        return obj.total_price


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
    total_price = serializers.SerializerMethodField()
    total_customer_profit = serializers.SerializerMethodField()
    items_count = serializers.SerializerMethodField()
    items = CartItemSerializer(many=True)

    class Meta:
        model = Cart
        fields = '__all__'

    def get_total_price(self, obj):
        total_price = 0
        for item in obj.items.all():
            total_price += item.total_price
        return total_price

    def get_items_count(self, obj):
        return obj.items.all().count()

    def get_total_customer_profit(self, obj):
        total_customer_profit = 0
        for item in obj.items.all():
            total_customer_profit += item.total_customer_profit
        return total_customer_profit
