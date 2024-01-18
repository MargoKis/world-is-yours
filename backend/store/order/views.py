import stripe
from http import HTTPStatus

from django.conf import settings
from django.urls import reverse
from django.http import HttpResponseRedirect, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.viewsets import ModelViewSet

from rest_framework.views import APIView

from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

from order.models import Order
from product.models import Basket
from order.serializers import OrderSerializer

stripe.api_key = settings.STRIPE_SECRET_KEY


class OrderViewSet(ModelViewSet):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]
    lookup_field = 'id'

    def get_queryset(self):
        return Order.objects.filter(initiator=self.request.user)

    def update(self, request, *args, **kwargs):
        return Response({'error': 'You cant update order.'}, status=status.HTTP_400_BAD_REQUEST)

    def create(self, request, *args, **kwargs):
        initiator = self.request.user.id
        basket = Basket.objects.filter(user=initiator)

        request.data["initiator"] = initiator
        request.data["basket_history"] = [obj.de_json() for obj in basket]
        request.data["status"] = 0
        return super().create(request, *args, **kwargs)


class CanceledOrderAPIView(APIView):
    def get(self, request):
        return Response({'message': 'Checkout canceled'}, status=status.HTTP_400_BAD_REQUEST)


class SuccessOrderAPIView(APIView):
    def get(self, request):
        return Response({'message': 'Thanks for your order!'}, status=status.HTTP_201_CREATED)


class OrderCreateView(CreateAPIView):
    serializer_class = OrderSerializer

    def post(self, request, *args, **kwargs):
        super().post(request, *args, **kwargs)
        checkout_session = stripe.checkout.Session.create(
            line_items=[
                {
                    # Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    'price': 'price_1MEJgOLuDZka6EPFcVeeksQN',
                    'quantity': 1,
                },
            ],
            mode='payment',
            success_url='{}{}'.format(settings.DOMAIN_NAME, reverse('order:payment-success')),
            cancel_url='{}{}'.format(settings.DOMAIN_NAME, reverse('order:payment-canceled')),
        )
        return HttpResponseRedirect(checkout_session.url, status=HTTPStatus.SEE_OTHER)


@csrf_exempt
def stripe_webhook_view(request):
    payload = request.body

    # For now, you only need to print out the webhook payload so you can see
    # the structure.
    print(payload)

    return HttpResponse(status=200)
