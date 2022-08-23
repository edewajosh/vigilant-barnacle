import uuid
from django.db import models

class Service(models.Model):
    INCOMING = 'IN'
    OUTGOING = 'OUT'
    type_of_transaction_choices  = [
        (INCOMING, 'Incoming'),
        (OUTGOING, 'Outgoing'),
    ]
    name = models.CharField(max_length=255, null=False)
    service_id = models.UUIDField(default=uuid.uuid4, editable=False)
    created_by = models.EmailField(max_length=50, null=False)
    type_of_transaction = models.CharField(max_length=3,
                                        choices=type_of_transaction_choices, 
                                        default=INCOMING)
    updated_on = models.DateTimeField(auto_now_add=True)
    created_on = models.DateTimeField(auto_now=True)
    description = models.TextField()
    payment_complete = models.BooleanField(default=False)