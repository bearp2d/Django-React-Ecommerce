from rest_framework import serializers

from .models import Product


class ProductListSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name='product-detail',
        lookup_field='slug'
    )

    class Meta:
        model = Product
        fields = ('id', 'slug', 'url', 'title', 'price', 'discount_price',
                  'discount_percent', 'photo_main', 'photo_1', 'available')


class ProductDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        exclude = ('slug', 'active')
