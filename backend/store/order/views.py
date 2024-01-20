import stripe
from http import HTTPStatus

from django.conf import settings
from django.urls import reverse
from django.http import HttpResponseRedirect, HttpResponse
from django.views.decorators.csrf import csrf_exempt

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from order.models import Order
from product.models import Basket
from order.serializers import OrderSerializer
from order.exceptions import EmptyBasketException

stripe.api_key = settings.STRIPE_SECRET_KEY


class OrderListAPIView(ListAPIView):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Order.objects.filter(initiator=self.request.user.id)


class CanceledOrderAPIView(APIView):
    def get(self, request):
        return Response({'message': 'Checkout canceled'}, status=status.HTTP_400_BAD_REQUEST)


class SuccessOrderAPIView(APIView):
    def get(self, request):
        return Response({'message': 'Thanks for your order!'}, status=status.HTTP_201_CREATED)


class OrderCreateView(CreateAPIView):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        request.data['initiator'] = self.request.user.id
        response = super().post(request, *args, **kwargs)

        try:
            baskets = Basket.objects.filter(user=self.request.user)
            if len(baskets) == 0:
                raise EmptyBasketException
            order_id = response.data.get('id')
            checkout_session = stripe.checkout.Session.create(
                line_items=baskets.stripe_products(),
                metadata={'order_id': str(order_id)},
                mode='payment',
                success_url='{}{}'.format(settings.DOMAIN_NAME, reverse('order:payment-success')),
                cancel_url='{}{}'.format(settings.DOMAIN_NAME, reverse('order:payment-canceled')),
            )
            return HttpResponseRedirect(checkout_session.url, status=HTTPStatus.SEE_OTHER)
        except EmptyBasketException:
            return Response({'message': 'Basket history cannot be empty'}, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
def stripe_webhook_view(request):
    payload = request.body
    sig_header = request.META['HTTP_STRIPE_SIGNATURE']
    event = None

    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, settings.STRIPE_WEBHOOK_SECRET
        )
    except ValueError as e:
        # Invalid payload
        return HttpResponse(status=400)
    except stripe.error.SignatureVerificationError as e:
        # Invalid signature
        return HttpResponse(status=400)

    # Handle the checkout.session.completed event
    if event['type'] == 'checkout.session.completed':
        # Retrieve the session. If you require line items in the response, you may include them by expanding line_items.
        session = event['data']['object']
        # Fulfill the purchase...
        fulfill_order(session)

    # Passed signature verification
    return HttpResponse(status=200)


def fulfill_order(session):
    order_id = int(session.metadata.order_id)
    order = Order.objects.get(id=order_id)
    order.update_after_payment()
