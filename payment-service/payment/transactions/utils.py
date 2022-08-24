import requests

API_URL = ' http://127.0.0.1:8001/'

def fetch_service(service_uuid):
    api_url = f'{API_URL}api/v1/product/services/{service_uuid}/'
    req = requests.get(api_url)
    return req.json()
