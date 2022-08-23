# from rest_framework.mixins import (
#                           RetrieveModelMixin,
#                           UpdateModelMixin,
#                           DestroyModelMixin,
#                           ListModelMixin, 
#                         )

from rest_framework.viewsets import ModelViewSet

from .models import ProcessTransaction
from .serializers import TransactionSerializer

class TransactionViewSet(ModelViewSet):
    serializer_class = TransactionSerializer
    queryset = ProcessTransaction.objects.all()
