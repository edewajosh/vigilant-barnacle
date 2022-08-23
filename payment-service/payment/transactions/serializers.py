from dataclasses import fields
from rest_framework.serializers import ModelSerializer

from .models import ProcessTransaction

class TransactionSerializer(ModelSerializer):

    class Meta:
        model = ProcessTransaction
        fields = '__all__'