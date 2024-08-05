from abc import ABC, abstractmethod
import json
import uuid
import requests
from django.conf import settings


class PaymentProcessor(ABC):
    BASE_URL: str

    @abstractmethod
    def authorize(self):
        pass

    @abstractmethod
    def create_order(self):
        pass

    @abstractmethod
    def capture_payment(self):
        pass

    @abstractmethod
    def authorize_payment(self):
        pass

    @abstractmethod
    def refund_payment(self):
        pass

    @abstractmethod
    def void_payment(self):
        pass


class PayPalPaymentProcessor(PaymentProcessor):
    BASE_URL = settings.PAYPAL_BASE_URL

    def __init__(self):
        self.client_id = settings.PAYPAL_CLIENT_ID
        self.client_secret = settings.PAYPAL_CLIENT_SECRET
        self.headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {self.authorize()}",
            "PayPal-Request-Id": str(uuid.uuid4()),
        }

    def authorize(self):
        response = requests.post(
            f"{self.BASE_URL}/v1/oauth2/token",
            headers={
                "Content-Type": "application/x-www-form-urlencoded",
            },
            auth=(self.client_id, self.client_secret),
            data="grant_type=client_credentials",
        )
        if response.status_code == 200:
            return response.json().get("access_token")
        raise Exception(
            "Error authorizing failed with status code: " + str(response.status_code)
        )

    def create_order(self, amount: int, reference_id: str, invoice_id: str):
        data = {
            "intent": "CAPTURE",
            "purchase_units": [
                {
                    "reference_id": reference_id,
                    "invoice_id": invoice_id,
                    "amount": {"currency_code": "USD", "value": amount},
                }
            ],
            "payment_source": {
                "paypal": {
                    "experience_context": {
                        "payment_method_preference": "IMMEDIATE_PAYMENT_REQUIRED",
                        "payment_method_selected": "PAYPAL",
                        "brand_name": "77s Design",
                        "locale": "en-US",
                        "landing_page": "LOGIN",
                        "shipping_preference": "SET_PROVIDED_ADDRESS",
                        "user_action": "PAY_NOW",
                        "return_url": settings.PAYPAL_RETURN_URL,
                        "cancel_url": settings.PAYPAL_CANCEL_URL,
                    }
                }
            },
        }
        response = requests.post(
            f"{self.BASE_URL}/v2/checkout/orders",
            headers=self.headers,
            data=json.dumps(data),
        )
        if response.status_code == 200:
            for link in response.json().get("links"):
                if link.get("rel") == "payer-action":
                    return link.get("href")
        raise Exception(
            "Error creating order failed with status code: " + str(response.status_code)
        )

    def capture_order(self, order_id: str):
        response = requests.post(
            f"{self.BASE_URL}/v2/checkout/orders/{order_id}/capture",
            headers=self.headers,
        )
        print(response.json())
        if response.status_code == 201:
            return response.json()["purchase_units"][0]["reference_id"]
        raise Exception(
            "Error capturing order failed with status code: "
            + str(response.status_code)
        )

    def authorize_payment(
        self,
        amount: float,
        currency: str,
        card_number: str,
        card_type: str,
        card_expiry_date: str,
        card_security_code: str,
        firstname: str,
        lastname: str,
    ) -> str | None:
        payload = {
            "intent": "authorize",
            "payer": {
                "payment_method": "credit_card",
                "funding_instruments": [
                    {
                        "credit_card": {
                            "number": card_number,
                            "type": card_type,
                            "expire_month": card_expiry_date.month,
                            "expire_year": card_expiry_date.year,
                            "cvv2": card_security_code,
                            "first_name": firstname,
                            "last_name": lastname,
                        }
                    }
                ],
            },
            "transactions": [
                {
                    "amount": {"value": amount, "currency": currency},
                    "description": "Authorization transaction",
                }
            ],
        }

        response = requests.post(
            f"{self.base_url}/v1/payments/payment",
            headers=self.headers,
            data=json.dumps(payload),
        )

        if response.status_code == 201:
            response_data = json.loads(response.text)
            authorization_code = response_data["transactions"][0]["related_resources"][
                0
            ]["authorization"]["id"]
            return authorization_code
        else:
            return None

    def capture_payment(
        self, amount: float, currency: str, authorization_code: str
    ) -> str | None:
        payload = {"amount": {"value": amount, "currency": currency}}

        response = requests.post(
            f"{self.base_url}/v1/payments/authorization/{authorization_code}/capture",
            headers=self.headers,
            data=json.dumps(payload),
        )

        if response.status_code == 201:
            response_data = json.loads(response.text)
            ref_id = response_data["purchase_units"]["reference_id"]
            return ref_id
        else:
            return None

    def void_payment(self, authorization_code: str) -> bool:
        response = requests.post(
            f"{self.base_url}/v1/payments/authorization/{authorization_code}/void",
            headers=self.headers,
        )

        if response.status_code == 204:
            return True
        else:
            return False

    def refund_payment(
        self, amount: float, currency: str, authorization_code: str
    ) -> str | None:
        payload = {"amount": {"value": amount, "currency": currency}}

        response = requests.post(
            f"{self.base_url}/v1/payments/capture/{authorization_code}/refund",
            headers=self.headers,
            data=json.dumps(payload),
        )

        if response.status_code == 201:
            response_data = json.loads(response.text)
            refund_id = response_data["id"]
            return refund_id
        else:
            return None
