from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST

from products.models import Product


class AddToCartView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, id):
        product = get_object_or_404(Product, id=id)
        user = request.user
        qs = user.cartitem_set.filter(product=product)
        if qs.exists():
            qs = qs.first()
            qs.quantity += 1
            qs.save()
            return Response("Item quantity has been updated.")
        cart_item = CartItem(user=user, product=product)
        cart_item.save()
        cart = Cart.objects.get(user=user)
        cart.items.add(cart_item)
        return Response("Item has been added to cart.")


class RemoveFromCartView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, id):
        product = get_object_or_404(Product, id=id)
        user = request.user
        qs = user.cartitem_set.filter(product=product)
        if qs.exists():
            qs = qs.first()
            if qs.quantity == 1:
                qs.delete()
                return Response("Item has been removed from cart.")
            qs.quantity -= 1
            qs.save()
            return Response("Item quantity has been updated.")
        return Response(status=HTTP_400_BAD_REQUEST)
