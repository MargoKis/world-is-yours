from django.contrib.auth import get_user_model
from rest_framework import serializers

from user.tasks import send_email_verification

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
