from rest_framework.permissions import SAFE_METHODS
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated

# from product.permissions import TaskPermission, CanChangeTask, CanDeleteTask
from product.serializers import ProductSerializer
from product.models import Product


class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    # permission_classes = [IsAuthenticated, TaskPermission, CanChangeTask, CanDeleteTask]

    # def perform_create(self, serializer):
    #     serializer.save(reporter=self.request.user)
