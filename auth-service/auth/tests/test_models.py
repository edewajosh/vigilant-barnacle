from rest_framework import status
from rest_framework.test import APITestCase, RequestsClient
from user.models import User

class UserTests(APITestCase):
    def test_create_user(self):
        url = ('http://127.0.0.1:8000/api/v1/users/users/')

        data = {
            "email": "john.doe@test.com",
            "username": "john.doe",
            "is_admin": True,
            "password": "10@testpass"
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        resp = self.client.get(url)
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        

    def test_create_super_user(self):
        url = ('http://127.0.0.1:8000/api/v1/users/users/')

        data = {
            "email": "john.doe@test.com",
            "username": "john.doe",
            "is_admin": True,
            "password": "10@testpass"
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        resp = self.client.get(url)
        self.assertEqual(resp.status_code, status.HTTP_200_OK)

    def test_user_login(self):

        user = User.objects.create(email='jane.doe@test.com', username='jane.doe', is_active=True)
        user.set_password('10@testpass')
        user.save()

        response = self.client.login(email='jane.doe@test.com', password='10@testpass')
        self.assertTrue(response)