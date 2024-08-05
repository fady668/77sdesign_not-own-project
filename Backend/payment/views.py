from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .models import FullProjectInvoice
from .utils import PayPalPaymentProcessor


class PayPalCheckoutView(generics.GenericAPIView):
    """Checkout view"""

    def post(self, request, *args, **kwargs):
        """Create a new invoice"""
        invoice = FullProjectInvoice.objects.get(id=2)
        try:
            payment = PayPalPaymentProcessor()
            payment_url = payment.create_order(
                int(invoice.amount), str(invoice.reference), str(invoice.reference)
            )
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response({"payment_url": payment_url}, status=status.HTTP_201_CREATED)


class PayPalCaptureView(generics.GenericAPIView):
    permission_classes = [permissions.AllowAny]
    """ Capture view """

    def get(self, request, *args, **kwargs):
        """Capture payment"""
        order_id = request.query_params.get("token")
        payer_id = request.query_params.get("PayerID")
        try:
            payment = PayPalPaymentProcessor()
            ref_id = payment.capture_order(order_id)
            invoice = FullProjectInvoice.objects.get(reference=ref_id)
            invoice.status = FullProjectInvoice.Status.PAID
            invoice.save()
            return Response(
                {"success": True, "message": "Payment captured successfully"},
                status=status.HTTP_200_OK,
            )
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
