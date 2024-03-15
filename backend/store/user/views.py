from django.shortcuts import get_object_or_404
from rest_framework.authtoken.models import Token
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated, SAFE_METHODS
from rest_framework.authtoken import views
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from user.models import EmailVerification, EmailPasswordReset, Address, User
from user.permissions import IsOwnerOrReadOnly, IsOwnerOrIsAdmin, IsOwner
from user import serializers
from user.serializers import ContactFormSerializer
from user.tasks import send_password_change, send_mail_from_contact_us


class UserListAPIView(ListCreateAPIView):
    queryset = serializers.UserModel.objects.all()
    serializer_class = serializers.UserSerializer

    def get_permissions(self):
        if self.request.method != "POST":
            self.permission_classes = [IsAuthenticated]
        return super().get_permissions()

    def get_serializer_class(self):
        if self.request.method in SAFE_METHODS:
            return serializers.UserSerializer
        return serializers.UserCreateSerializer


class UserDetailAPIView(RetrieveUpdateDestroyAPIView):
    queryset = serializers.UserModel.objects.all()
    serializer_class = serializers.UserSerializer
    lookup_field = "id"
    permission_classes = [IsOwnerOrReadOnly]

    def get_permissions(self):
        if self.request.method == "DELETE":
            self.permission_classes = [IsOwnerOrIsAdmin]
        return super().get_permissions()

    def get_serializer_class(self):
        if self.request.method in SAFE_METHODS:
            return serializers.UserSerializer
        return serializers.UserUpdateSerializer

    def perform_update(self, serializer):
        if 'password' in serializer.validated_data:
            user = self.get_object()
            user.set_password(serializer.validated_data['password'])
            user.save()
        serializer.save()


class UserAddressListAPIView(ListCreateAPIView):
    serializer_class = serializers.AddressSerializer
    permission_classes = [IsOwner]

    def get_queryset(self):
        user_id = self.kwargs.get('user_id')
        user = get_object_or_404(User, pk=user_id)
        queryset = Address.objects.filter(user=user)
        return queryset

    def create(self, request, *args, **kwargs):
        user = request.user
        request.data["user"] = user.id
        return super().create(request, *args, **kwargs)


class UserAddressDetailAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.AddressSerializer
    lookup_field = "id"
    permission_classes = [IsOwner]

    def get_queryset(self):
        user_id = self.kwargs.get('user_id')
        user = get_object_or_404(User, pk=user_id)
        queryset = Address.objects.filter(user=user)
        return queryset

    def perform_update(self, serializer):
        if 'user' in serializer.validated_data:
            del serializer.validated_data['user']
        super().perform_update(serializer)


class EmailVerificationView(APIView):
    def get(self, request, email, code):
        try:
            verification = EmailVerification.objects.get(user__email=email, code=code)
            if not verification.is_expired():
                verification.user.is_verified_email = True
                verification.user.save()
                verification.delete()
                return Response({'message': 'Your account has been verified successfully.'}, status=status.HTTP_200_OK)
            else:
                verification.delete()
                return Response({'error': 'Verification link has expired.'}, status=status.HTTP_400_BAD_REQUEST)
        except EmailVerification.DoesNotExist:
            return Response({'error': 'Invalid verification link.'}, status=status.HTTP_400_BAD_REQUEST)


class PasswordResetView(APIView):
    def post(self, request, email, code):
        serializer = serializers.PasswordResetSerializer(data=request.data)
        if serializer.is_valid():
            try:
                pc_record = EmailPasswordReset.objects.get(user__email=email, code=code)
                user = serializers.UserModel.objects.get(email=email)
                if not pc_record.is_expired():
                    user.set_password(serializer.validated_data['password'])
                    user.save()
                    pc_record.delete()
                    return Response({'message': 'Your password has been changed successfully.'}, status=status.HTTP_200_OK)
                else:
                    pc_record.delete()
                    return Response({'error': 'This link has expired.'}, status=status.HTTP_400_BAD_REQUEST)
            except EmailPasswordReset.DoesNotExist:
                return Response({'error': 'Invalid link.'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"detail": "Invalid input. Please provide the correct data."},
                            status=status.HTTP_400_BAD_REQUEST)


class PasswordChangeRequestView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = serializers.PasswordChangeRequestSerializer(data=request.data)

        if serializer.is_valid():
            user = serializers.UserModel.objects.get(email=serializer.validated_data['email'])
            send_password_change.delay(user_id=user.id)
            return Response({"detail": "An email has been sent to your email address with further instructions"},
                            status=status.HTTP_200_OK)
        else:
            return Response({"detail": "Invalid input. Please provide the correct data."},
                            status=status.HTTP_400_BAD_REQUEST)


class ContactUsAPIView(APIView):
    def post(self, request, format=None):
        serializer = ContactFormSerializer(data=request.data)
        if serializer.is_valid():
            send_mail_from_contact_us.delay(
                email=serializer.validated_data['email'],
                message=serializer.validated_data['message'],
                subject=serializer.validated_data['subject'],
                fullname=serializer.validated_data['fullname'],
            )

            return Response({'message': 'Email sent successfully'}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserTokenAuth(views.ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)

        response_data = {
            'token': token.key,
            'user_id': user.id,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'email': user.email,
            'phone': user.phone,
            'is_verified_email': user.is_verified_email,
            'image': user.image if user.image else None,
            'is_staff': user.is_staff,
            'is_superuser': user.is_superuser
        }

        return Response(response_data)
