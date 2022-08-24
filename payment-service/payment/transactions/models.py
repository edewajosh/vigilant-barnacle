import uuid
from django.db import models

class ProcessTransaction(models.Model):
    transaction_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    completed = models.BooleanField(default=False)
    service_uuid = models.CharField(max_length=255)
    updated_on = models.DateTimeField(auto_now_add=True)
    created_on = models.DateTimeField(auto_now=True)