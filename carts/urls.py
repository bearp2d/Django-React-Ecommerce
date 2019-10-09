from django.urls import path

from . import views

urlpatterns = [
    path('', views.CartView.as_view(), name='cart'),
    path('add-to-cart/<int:id>/', views.AddToCartView.as_view(), name='add-to-cart'),
    path('remove-from-cart/<int:id>/',
         views.RemoveFromCartView.as_view(), name='remove-from-cart'),
]
