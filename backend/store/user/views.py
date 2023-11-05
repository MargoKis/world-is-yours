from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import SAFE_METHODS
from rest_framework.permissions import IsAuthenticated

from user.permissions import IsOwnerOrReadOnly
from user.serializers import UserModel, UserSerializer, UserCreateSerializer


class UserListAPIView(ListCreateAPIView):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_serializer_class(self):
        if self.request.method in SAFE_METHODS:
            return UserSerializer
        return UserCreateSerializer


class UserDetailAPIView(RetrieveUpdateDestroyAPIView):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]
