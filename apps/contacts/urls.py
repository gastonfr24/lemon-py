from django.urls import path
from .views import *


app_name = 'contacts'


urlpatterns = [
    path('', ContactCreateView.as_view()),
]
