import requests

API_URL = ' http://127.0.0.1:8001/'


# Validate if the product/service that is payment is being made exists
def fetch_service(service_uuid):
    try:
        api_url = f'{API_URL}api/v1/product/services/{service_uuid}/'
        req = requests.get(api_url)
        context = {
            'status_code': req.status_code,
            'data': req.json()
        }
        return context
    except requests.exceptions.RequestException:
        pass

# update service status after successful transaction processing
def update_service_payment_status(service_uuid):
    try:
        api_url = f'{API_URL}api/v1/product/services/{service_uuid}/'
        
        response = requests.get(api_url)
        data = response.json()
        data = {
            'payment_complete': True,
            'created_by': data['created_by'],
            'description': data['description'],
            'name':  data['name'],
        }
        res = requests.put(api_url, json=data)
        return res.status_code
    except requests.exceptions.RequestException:
        pass