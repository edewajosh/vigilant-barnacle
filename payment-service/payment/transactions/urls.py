from importlib.resources import path
from posixpath import basename
from django.urls import path, include

from rest_framework.routers import DefaultRouter

from .views import TransactionViewSet

router = DefaultRouter()
router.register(r'transaction', TransactionViewSet)

urlpatterns = router.urls

