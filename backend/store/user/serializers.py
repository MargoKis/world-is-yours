from django.contrib.auth import get_user_model
from rest_framework import serializers

UserModel = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ["id", "username", "first_name", "last_name", "email"]

    def validate_email(self, value):
        instance = self.instance
        if instance and instance.email != value and UserModel.objects.filter(email=value).exists():
            raise serializers.ValidationError("This email is already in use.")
        return value


class UserCreateSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(write_only=True)
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = UserModel
        fields = ["id", "username", "first_name", "last_name", "email", 'password', 'confirm_password']

    def validate(self, data):
        email = data["email"]
        if UserModel.objects.filter(email=email).exists():
            raise serializers.ValidationError("Email is already registered.")

        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError("Passwords do not match.")

        return data

    def create(self, validated_data):
        validated_data.pop('confirm_password')
        return UserModel.objects.create_user(**validated_data)


class UserUpdateSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(write_only=True)

    class Meta:
        model = UserModel
        fields = ["id", "username", "first_name", "last_name", "email", 'password']

    def validate_email(self, value):
        instance = self.instance
        if instance and instance.email != value and UserModel.objects.filter(email=value).exists():
            raise serializers.ValidationError("This email is already in use.")
        return value
