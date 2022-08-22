from rest_framework.viewsets import ModelViewSet

from .serializers import ServiceSerializer
from .models import Service


class ServiceViewSet(ModelViewSet):

    serializer_class = ServiceSerializer
    queryset = Service.objects.all()

