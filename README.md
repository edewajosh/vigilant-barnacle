# Vigilant-barnacle
There are 3 django services(projects) and 1 Front-end application. Open the 4 applications in different terminals. For django applications create a virtual environment for each service and copy the ```requirements.txtx``` from auth-service to product-service and payment-service. 

N/B It is advisable to install the requirements to the virtual environment.
Before running the services also copy the ```.env.sample``` from the project root folder and create ```.env``` to each backend services.

* Authentication Service ```cd auth-service\auth```
* Product Service ```cd product-service\product`
* Payment processing Service ```cd payment-service\payment```

In order to run the backend applications effectively issue open them in different ports as shown below
## Authentication service
This will run on a default port 8000

```python manage.py runserver```

## Product service

```python manage.py runserver 8001```

## Payment Processing service

```python manage.py runserver 8002```

## Front-end Application
The application is built using React.js 

```cd fin-app```

Install the dependencies by running the: command below
```npm install```

To run the application run this npm command:

```npm start```