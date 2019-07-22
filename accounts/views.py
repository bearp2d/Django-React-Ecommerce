from rest_framework import generics
from rest_framework.response import Response
from rest_framework.authtoken.models import Token

from . import serializers


class RegisterView(generics.GenericAPIView):
    serializer_class = serializers.RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = Token.objects.create(user=user).key
        user = serializers.UserSerializer(
            user, context=self.get_serializer_context()).data
        return Response({"user": user, "token": token})


class LoginView(generics.GenericAPIView):
    serializer_class = serializers.LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        token, _ = Token.objects.get_or_create(user=user)
        user = serializers.UserSerializer(
            user, context=self.get_serializer_context()).data
        return Response({
            "user": serializers.UserSerializer(user, context=self.get_serializer_context()).data,
            "token": str(token)
        })
