from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser

from .serializers import UserSerializer
from .models import UserAccount

from django.shortcuts import get_object_or_404
from django.core.exceptions import ValidationError
from django.http.response import HttpResponseBadRequest


# Traemos el Json para crear usuario desde ese mensaje
class CreateUserProfileView(APIView):
    def post(self, request, format=None):
        data= self.request.data
        #print(data)

        #data = {'account': 'user_id', }

        account = data['account']
        user = UserAccount.objects.get_or_create(
            account=account,
            username= account,

        )

        return Response({'message':'Usuario creado'})

# Enviamos la info del usuario para crear perfil
class DetailProfileView(APIView):
    def get( self, request, account, *args, **kwargs):
        user = UserAccount.objects.get(account=account)
        serializer = UserSerializer(user)

        return Response({
            'user': serializer.data
        }, status= status.HTTP_200_OK)        

    