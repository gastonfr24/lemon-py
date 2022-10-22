from email.policy import default
from tokenize import blank_re
from django.db import models
from django.conf import settings
import os


# directorio de imagen de usuario
def user_profile_path(instance, filename):
    # media/<user_name>/profile.jpg
    profile_pic_name = 'users/{0}/profile.jpg'.format(instance.account)
    
    # MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
    full_path = os.path.join(settings.MEDIA_ROOT, profile_pic_name)

    # reemplaza la imagen en caso de que exista
    if os.path.exists(full_path):
        os.remove(full_path)


# Directorio de imagen banner
def user_banner_directory_path(instance, filename):
    # media/<user_name>/banner.jpg
    profile_pic_name = 'users/{0}/banner.jpg'.format(instance.account)
    
    # MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
    full_path = os.path.join(settings.MEDIA_ROOT, profile_pic_name)

    # reemplaza la imagen en caso de que exista
    if os.path.exists(full_path):
        os.remove(full_path)


class UserAccount(models.Model):
    account = models.CharField(max_length=255, unique=True)
    
    username = models.CharField(max_length=255)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    verified = models.BooleanField(default=False)
    request_verified = models.BooleanField(default=False)

    picture = models.ImageField(default="users/user_default.jpg", upload_to= user_profile_path, blank=True, null= True, verbose_name='Picture')
    banner = models.ImageField(default="users/banner_default.jpg", upload_to= user_banner_directory_path, blank=True, null= True, verbose_name='Banner')

    location = models.CharField(max_length=100, null=True, blank=True)
    url = models.CharField(max_length=100, null=True, blank=True)

    birthday= models.DateField(null= True, blank=True)
    profile_info = models.TextField(max_length=300, null=True, blank=True)

    date_created = models.DateTimeField(auto_now_add=True)

    pais = models.CharField(max_length=255, blank=True, null=True)
    edad = models.IntegerField(blank=True, null=True)
    salario = models.IntegerField( blank=True, null=True)
    comprado = models.BooleanField(blank=True, null=True)

    def __str__(self):
        return self.account