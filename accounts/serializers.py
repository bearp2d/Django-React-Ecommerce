from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate
from django.core.validators import RegexValidator


User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ('password', 'is_admin', 'is_active')


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('phone_number', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class LoginSerializer(serializers.ModelSerializer):
    phone_number_or_email = serializers.CharField(validators=[
        RegexValidator(
            '[^@]+@[^@]+\.[^@]+|^09\d{9}$',
            message="Invalid phone number or email address."
        )
    ])

    class Meta:
        model = User
        fields = ('id', 'phone_number_or_email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def validate(self, data):
        """Return user by phone number or email"""

        if '@' in data['phone_number_or_email']:
            user = authenticate(
                email=data['phone_number_or_email'],
                password=data['password']
            )
        else:
            user = authenticate(
                phone_number=data['phone_number_or_email'],
                password=data['password']
            )
        if user:
            return user
        raise serializers.ValidationError("Incorrect Credentials")
