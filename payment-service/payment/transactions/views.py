from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status

from .models import ProcessTransaction
from .serializers import TransactionSerializer

from .utils import fetch_service, update_service_payment_status, user_verify_token

API_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYxMzQ1Mzg3LCJpYXQiOjE2NjEzNDUwODcsImp0aSI6IjVlMDFlODkyYWMxOTQwOTJhMTViMWJjMDFkZWExODkyIiwidXNlcl9pZCI6ImphbmUuZG9lQHRlc3QuY29tIn0.avaFpRHeI437Fn0ytpNHuUuRkA8_K0o31xo2hSz23Pg'

class TransactionViewSet(ModelViewSet):
    serializer_class = TransactionSerializer
    queryset = ProcessTransaction.objects.all()

    def create(self, request, *args, **kwargs):
        res = fetch_service(request.data['service_uuid'])
        if res['status_code'] == status.HTTP_200_OK:
            return super().create(request, *args, **kwargs)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    def perform_create(self, serializer):
        res = update_service_payment_status(serializer.validated_data['service_uuid'])
        if res == status.HTTP_200_OK:
            return super().perform_create(serializer)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    def list(self, request, *args, **kwargs):
        user_verify_token(API_TOKEN)
        return super().list(request, *args, **kwargs)