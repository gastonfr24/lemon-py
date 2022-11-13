from django.urls import path
from .views import *

urlpatterns = [
    path('', ProjectListView.as_view()),
    path('<project_slug>', ProjectDetailView.as_view()),
    path('df/<project_slug>', DataFrameView.as_view()),
    path('df/describe/<project_slug>', DataFrameAnalisisView.as_view()),
    path('search/<str:search_term>', SearchProjectView.as_view()),
    path('ml/housing', HousingModelView.as_view()),
]
