from django.db import models

class Service(models.Model):
    name = models.CharField(max_length=255, null=False)
    updated_on = models.DateTimeField(auto_now_add=True)
    created_on = models.DateTimeField(auto_now=True)
    description = models.TextField()
    created_by = models.EmailField(max_length=50, null=False)
