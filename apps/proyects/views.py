from django.shortcuts import render, get_object_or_404

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

from django.db.models.query_utils import Q

from apps.category.models import Category

from .models import Projects
from .serializers import ProjectSerializer, SmallProjectSerializer
from .pagination import SmallSetPagination, MediumSetPagination, LargeSetPagination

# Dataset
import pandas as pd
import numpy as np

class ProjectListView(APIView):
    def get(self, request, format=None):
        if Projects.projectobjects.all().exists():

            projects = Projects.projectobjects.all()

            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(projects, request)
            serializer = SmallProjectSerializer(results, many=True)

            return paginator.get_paginated_response({'projects': serializer.data})

        else:
            return Response({'error':'No se ha encontrado projectos'}, status= status.HTTP_500_INTERNAL_SERVER_ERROR)


class ProjectDetailView(APIView):
    def get(self, request, project_slug, format=None):
        project = get_object_or_404(Projects, slug=project_slug)
        serializer = ProjectSerializer(project)
        return Response({'project': serializer.data}, status= status.HTTP_200_OK)


class DataFrameView(APIView):
    def get(self, request, project_slug, format=None):
        project = get_object_or_404(Projects, slug=project_slug)
        df = pd.read_csv(project.get_dataset()[1:], header=None)
        df_example = df.head(5)
        df_head = df_example.iloc[0:1,:].values
        df_c = df_example.iloc[1:,:].values
        leng = df.shape

        return Response({'df_head': df_head, 'df_corpus': df_c, 'len':leng}, status= status.HTTP_200_OK)

class DataFrameAnalisisView(APIView):
    def get(self, request, project_slug, format=None):
        project = get_object_or_404(Projects, slug=project_slug)
        df = pd.read_csv(project.get_dataset()[1:])

        df_describe = df.describe()
        leng = df_describe.shape
        df_describe.insert(0, ' ', ['count', 'mean', 'std', 'min', '25%', '50%', '75%', 'max'], True)
        df_describe = df_describe.values
        
        #header = list(df.columns)
        
        header = df.select_dtypes([np.number]).columns
        header = header.tolist()
        header.insert(0,'*Description*')
        return Response({'df_describe': [df_describe,header, leng]}, status= status.HTTP_200_OK)


class SearchProjectView(APIView):
    def get(self,request,search_term):
        matches = Projects.projectobjects.filter(
            Q(title__icontains=search_term) |
            Q(description__icontains=search_term) |
            Q(category__name__icontains=search_term)
        )

        paginator = MediumSetPagination()
        # results = paginator.paginate_queryset(matches, request)
        serializer = SmallProjectSerializer(matches, many=True)
        return Response({'filtered_projects':serializer.data},status=status.HTTP_200_OK)
