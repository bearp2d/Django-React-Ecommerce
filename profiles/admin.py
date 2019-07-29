from django.contrib import admin

from .models import Address, FavoritesProducts

admin.site.register(Address)
admin.site.register(FavoritesProducts)
