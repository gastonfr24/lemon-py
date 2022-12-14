# Generated by Django 3.2.15 on 2022-09-07 22:05

import apps.user.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserAccount',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('account', models.CharField(max_length=255, unique=True)),
                ('username', models.CharField(max_length=255)),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('is_active', models.BooleanField(default=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('verfied', models.BooleanField(default=False)),
                ('request_verified', models.BooleanField(default=False)),
                ('picture', models.ImageField(blank=True, default='users/user_default.jpg', null=True, upload_to=apps.user.models.user_profile_path, verbose_name='Picture')),
                ('banner', models.ImageField(blank=True, default='users/banner_default.jpg', null=True, upload_to=apps.user.models.user_banner_directory_path, verbose_name='Banner')),
                ('location', models.CharField(blank=True, max_length=100, null=True)),
                ('url', models.CharField(blank=True, max_length=100, null=True)),
                ('birthday', models.DateField(blank=True, null=True)),
                ('profile_info', models.TextField(blank=True, max_length=300, null=True)),
                ('date_created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
