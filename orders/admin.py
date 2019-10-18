from django.contrib import admin

from .models import Order, ReciverInfo

admin.site.register(ReciverInfo)
admin.site.register(Order)
