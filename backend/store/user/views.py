from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import SAFE_METHODS
from rest_framework.permissions import IsAuthenticated

from user.permissions import IsOwnerOrReadOnly
from user.serializers import UserModel, UserSerializer, UserCreateSerializer, UserUpdateSerializer


class UserListAPIView(ListCreateAPIView):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer
    
    def get_permissions(self):
        if self.request.method != "POST":
            self.permission_classes = [IsAuthenticated]
        return super().get_permissions()

    def get_serializer_class(self):
        if self.request.method in SAFE_METHODS:
            return UserSerializer
        return UserCreateSerializer


class UserDetailAPIView(RetrieveUpdateDestroyAPIView):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer
    lookup_field = "id"
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]

    def get_serializer_class(self):
        if self.request.method in SAFE_METHODS:
            return UserSerializer
        return UserUpdateSerializer

    def perform_update(self, serializer):
        if 'password' in serializer.validated_data:
            user = self.get_object()
            user.set_password(serializer.validated_data['password'])
            user.save()
        else:
            serializer.save()
