from django.urls import path
from .views import *


urlpatterns = [
    path('create', CreateUserProfileView.as_view()),
    path('profile/<account>', DetailProfileView.as_view()),
]
