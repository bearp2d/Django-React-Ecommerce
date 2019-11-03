from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('accounts.urls')),
    path('api/user/', include('profiles.urls')),
    path('api/cart/', include('carts.urls')),
    path('api/products/', include('products.urls')),
    path('api/search/', include('searchs.urls')),
    re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
]

# Media urls
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
