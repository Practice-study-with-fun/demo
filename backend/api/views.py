from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import UserData
from .serializers import UserDataSerializer


# Create your views here.

class UserDataView(ModelViewSet):
    queryset = UserData.objects.all()
    serializer_class = UserDataSerializer