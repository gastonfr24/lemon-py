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


from django.conf import settings


# Dataset
import pandas as pd
import numpy as np
from joblib import load
import sklearn
from io import BytesIO
import boto3


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
        df = pd.read_csv(project.get_dataset(), header=None)
        # Eliminación de datos nulos
        df_new = df.dropna()
        df_example = df_new.head(5)
        df_head = df_example.iloc[0:1,:].values
        df_c = df_example.iloc[1:,:].values
        leng = df.shape

        return Response({'df_head': df_head, 'df_corpus': df_c, 'len':leng}, status= status.HTTP_200_OK)


class DataFrameAnalisisView(APIView):
    def get(self, request, project_slug, format=None):
        project = get_object_or_404(Projects, slug=project_slug)
        #df = pd.read_csv(project.get_dataset()[1:])
        df = pd.read_csv(project.get_dataset())

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

    
class HousingModelView(APIView):
     def post( self, request, format=None):
        data= self.request.data

        X_data = []

        if data['State'] == 'Mendoza[Ciudad]':
            X_data.append(1)
        else:
            X_data.append(1)
        X_data.append(data['house'])
        X_data.append(data['house_2'])
        X_data.append(data['Bathrooms'])
        X_data.append(data['Bethrooms'])


        X_data = np.array([X_data], dtype=np.float)

        try:
            s3 = boto3.resource('s3')
            bucket_str = settings.AWS_STORAGE_BUCKET_NAME
            bucket_key = "media"
          
          
            
            #for file in s3.Bucket(bucket_str).objects.filter(Prefix="media"):    
                #if file.key.endswith('.pkl'):
                #    print(file.key)



             # scalers
             
            with BytesIO() as scaler_X:
                s3.Bucket(bucket_str).download_fileobj(bucket_key + '/X_minmax.pkl', scaler_X)
                scaler_X.seek(0)

                #print(scaler_X)     
                #print(scaler_X.closed)       
                scaler_X = load(scaler_X)


            with BytesIO() as scaler_y:
                s3.Bucket(bucket_str).download_fileobj(bucket_key + '/y_minmax.pkl', scaler_y)
                scaler_y.seek(0)    # move back to the beginning after writing           

                scaler_y = load(scaler_y)       

            # model
            with BytesIO() as model:
                s3.Bucket(bucket_str).download_fileobj(bucket_key + '/best_regression.joblib', model)
                model.seek(0)    # move back to the beginning after writing


                regression_model = load(model)
        
        
        
            X_data = scaler_X.transform(X_data)

            prediction =regression_model.predict(X_data)
            

            y_pred = scaler_y.inverse_transform(prediction)


            return Response({'prediction':y_pred[0][0]}, status= status.HTTP_200_OK)
        except Exception as e:
            print(e)
            return Response({'prediction':1}, status= status.HTTP_200_OK)



        


