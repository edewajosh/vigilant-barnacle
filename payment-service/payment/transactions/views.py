from rest_framework.viewsets import ModelViewSet

from .models import ProcessTransaction
from .serializers import TransactionSerializer

from .utils import fetch_service

class TransactionViewSet(ModelViewSet):
    serializer_class = TransactionSerializer
    queryset = ProcessTransaction.objects.all()

    def create(self, request, *args, **kwargs):
        print(fetch_service(request.data['service_uuid']))
        return super().create(request, *args, **kwargs)
