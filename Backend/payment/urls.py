from django.urls import path
from .views import PayPalCheckoutView, PayPalCaptureView

urlpatterns = [
    path("checkout/paypal/", PayPalCheckoutView.as_view(), name="paypal-checkout"),
    path("paypal/capture/", PayPalCaptureView.as_view(), name="paypal-capture"),
]
