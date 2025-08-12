from django.urls import path
from .views import UserDataView
from rest_framework.routers import DefaultRouter 

router = DefaultRouter()
router.register(r'users', UserDataView)


urlpatterns = [
    
]+router.urls
