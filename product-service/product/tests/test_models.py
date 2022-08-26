from rest_framework import status
from rest_framework.test import APITestCase, RequestsClient

from services.models import Service

class UserTests(APITestCase):

    def test_create_service(self):
        url = 'http://127.0.0.1:8001/api/v1/product/services/'
        data = {
            'name': 'Amazon payment',
            'created_by': 'jane.doe@test.com',
            'type_of_transaction': 'IN',
            'description': 'Merchant Payment',
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Service.objects.filter(name='Amazon payment').count(), 1)
        self.assertEqual(Service.objects.get().description, 'Merchant Payment')