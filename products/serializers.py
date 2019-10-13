from rest_framework import serializers

from .models import Product
from profiles.models import FavoritesProducts


class ProductListSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name='product-detail',
        lookup_field='slug'
    )

    class Meta:
        model = Product
        fields = ('id', 'slug', 'url', 'title', 'price', 'discount_price',
                  'discount_percent', 'photo_main', 'photo_1', 'available', 'available_count')


class ProductDetailSerializer(serializers.ModelSerializer):
    is_favorite_product = serializers.SerializerMethodField()
    is_in_cart = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ('id', 'title', 'slug', 'photo_main', 'photo_1', 'photo_2', 'photo_3', 'photo_4',
                  'description', 'price', 'discount_percent', 'discount_price', 'available', 'available_count',
                  'sale_count', 'code', 'created_at', 'sizes', 'colors', 'is_favorite_product', 'is_in_cart')

    def get_is_favorite_product(self, obj):
        user = self.context.get('request').user
        if user.is_authenticated:
            return FavoritesProducts.objects.check_product(user, obj.id)
        return False

    def get_is_in_cart(self, obj):
        user = self.context.get('request').user
        if user.is_authenticated:
            return user.cart.items.filter(product=obj.id).exists()
        return False
