from order.models import Order
from rest_framework import serializers


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = "__all__"

    # def validate_email(self, value):
    #     instance = self.instance
    #     if instance and instance.email != value and UserModel.objects.filter(email=value).exists():
    #         raise serializers.ValidationError("This email is already in use.")
    #     return value
#
#     def validate(self, data):
#         email = data["email"]
#         if UserModel.objects.filter(email=email).exists():
#             raise serializers.ValidationError("Email is already registered.")
#
#         if data['password'] != data['confirm_password']:
#             raise serializers.ValidationError("Passwords do not match.")
#
#         return data
#
#     def create(self, validated_data):
#         validated_data.pop('confirm_password')
#         return UserModel.objects.create_user(**validated_data)
#

#
#     def validate_email(self, value):
#         instance = self.instance
#         if instance and instance.email != value and UserModel.objects.filter(email=value).exists():
#             raise serializers.ValidationError("This email is already in use.")
#         return value
