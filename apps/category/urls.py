from django.urls import path
from .views import *
from apps.blog.views import BlogCategoryListView
urlpatterns = [
    path('categories', ListCategoryView.as_view()),
]
