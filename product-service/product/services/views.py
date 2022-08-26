from rest_framework.viewsets import ModelViewSet

from .serializers import ServiceSerializer
from .models import Service


class ServiceViewSet(ModelViewSet):
    serializer_class = ServiceSerializer
    queryset = Service.objects.all().order_by('-updated_on')
    lookup_field = 'service_id'

