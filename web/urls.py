from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('accounts.urls')),
    path('api/user/', include('profiles.urls')),
    path('api/cart/', include('carts.urls')),
    path('api/products/', include('products.urls')),
    path('api/search/', include('searchs.urls')),
]

# Media urls
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
