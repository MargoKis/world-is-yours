from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from order.models import Order
from product.models import Basket
from order.serializers import OrderSerializer


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
