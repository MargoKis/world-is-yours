from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers

from user.tasks import send_email_verification
from user.models import Address

UserModel = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ["id", "first_name", "last_name", "email", "phone"]

    def validate_email(self, value):
        instance = self.instance
        if instance and instance.email != value and UserModel.objects.filter(email=value).exists():
            raise serializers.ValidationError("This email is already in use.")
        return value


class UserCreateSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(write_only=True)

    class Meta:
        model = UserModel
        fields = ["first_name", "last_name", "email", "phone", "password"]

    def validate(self, data):
        email = data["email"]
        if UserModel.objects.filter(email=email).exists():
            raise serializers.ValidationError("Email is already registered.")
        if data['password']:
            validate_password(data['password'])
        return data

    def create(self, validated_data):
        return UserModel.objects.create_user(**validated_data)

    def save(self, **kwargs):
        user = super(UserCreateSerializer, self).save(**kwargs)
        send_email_verification.delay(user_id=user.id)
        return user


class UserUpdateSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(write_only=True)
    image = serializers.ImageField()

    class Meta:
        model = UserModel
        fields = ["id", "first_name", "last_name", "email", "image", "password"]

    def validate_email(self, value):
        instance = self.instance
        if instance and instance.email != value and UserModel.objects.filter(email=value).exists():
            raise serializers.ValidationError("This email is already in use.")
        return value


class PasswordChangeRequestSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)

    def validate(self, data):
        email = data["email"]
        if not UserModel.objects.filter(email=email).exists():
            raise serializers.ValidationError(
                "Please, enter your email address that you use to authorization to our site.")
        return data


class PasswordResetSerializer(serializers.Serializer):
    password = serializers.CharField(required=True)

    class Meta:
        model = UserModel
        fields = "password"


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = "__all__"


class ContactFormSerializer(serializers.Serializer):
    email = serializers.EmailField()
    message = serializers.CharField()
    subject = serializers.CharField()
    fullname = serializers.CharField()
