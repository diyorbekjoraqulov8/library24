from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('user/', include('account.urls')),
    path('library/', include('library.urls')),
]
