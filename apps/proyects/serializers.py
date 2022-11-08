from rest_framework import serializers
from .models import Projects
from apps.category.serializers import CategorySerializer

class ProjectSerializer(serializers.ModelSerializer):
    thumbnail=serializers.CharField(source='get_thumbnail')
    if Projects.dataset == 'null':
        dataset=serializers.CharField(source='get_dataset')
        
    #video=serializers.CharField(source='get_video')
    category = CategorySerializer()
    class Meta:
        model=Projects
        fields=[
           'blog_uuid',
            'title',
            'description',
            'slug',
            'thumbnail',

            'problem',
            'solution',
            'dataset_info',
            'content',
            'category',
            'published',
            'status',
            'modelado',
            'repository',
        ]
        if Projects.dataset:
            fields.append('dataset')

class SmallProjectSerializer(serializers.ModelSerializer):
    thumbnail=serializers.CharField(source='get_thumbnail')
    #dataset=serializers.CharField(source='get_dataset')
    #video=serializers.CharField(source='get_video')
    category = CategorySerializer()
    class Meta:
        model=Projects
        fields=[
           'blog_uuid',
            'title',
            'description',
            'slug',
            'thumbnail',
            #'dataset',
            #'problem',
            #'solution',
            #'dataset_info',
            #'content',
            'category',
            'published',
            'status',
            #'modelado',
            #'repository',
        ]


#django rest framework
# JSON