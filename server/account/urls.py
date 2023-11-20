from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenBlacklistView
from django.urls import path

from . import api

urlpatterns = [
    path('me/', api.me, name="me"),
    path('signup/', api.signup, name="signup"),
    path('login/', TokenObtainPairView.as_view(), name="token-obtain"),
    path('logout/', TokenBlacklistView.as_view(), name="token-blacklist"),
    path('refresh/', TokenRefreshView.as_view(), name="token-refresh"),
]