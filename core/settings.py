from pathlib import Path
import os
import environ

env = environ.Env()
environ.Env.read_env()

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
#DEBUG = 'RENDER' not in os.environ
DEBUG = False

ALLOWED_HOSTS = [
    "localhost",
    "127.0.0.1"
]

if not DEBUG:
    ALLOWED_HOSTS = [
        "lemon-py.com",
        ".lemon-py.com",
        #"www.lemon-py.com",
        'https://lemon-py.com"'
        "https://lemon-py.onrender.com",
        "lemon-py.onrender.com",

    ]





RENDER_EXTERNAL_HOSTNAME = os.environ.get('RENDER_EXTERNAL_HOSTNAME')
if RENDER_EXTERNAL_HOSTNAME:
    ALLOWED_HOSTS.append(RENDER_EXTERNAL_HOSTNAME)


# Application definition

DJANGO_APPS  = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

PROJECT_APPS = [
'apps.user',
'apps.contacts',
'apps.proyects',
'apps.category'
]

THIRD_PARTY_APPS = [
    'corsheaders',
    'rest_framework',
    'ckeditor',
    'ckeditor_uploader',
    'froala_editor'
]

INSTALLED_APPS = DJANGO_APPS + PROJECT_APPS + THIRD_PARTY_APPS

CKEDITOR_CONFIGS = {
    'default': {
        'toolbar': 'full',
        'autoParagraph': False
    }
}
CKEDITOR_UPLOAD_PATH = "/media/"

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'core.urls'

CORS_ORIGIN_WHITELIST = [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:8000',

]

# CSRF_COOKIE_DOMAIN = "lemon-py.com"
CSRF_TRUSTED_ORIGINS = [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:8000',

]


if not DEBUG:
    CORS_ORIGIN_WHITELIST = [
        'https://lemon-py.s3.amazonaws.com',
        'https://lempy.s3.amazonaws.com',
        'https://lempy.s3.sa-east-1.amazonaws.com',

        "lemon-py.onrender.com",
        "https://lemon-py.onrender.com",

        "https://lemon-py.com",
        "lemon-py.com",
        #'https://admin.lemon-py.com',
        #'https://blog.lemon-py.com',
    ]

    CSRF_TRUSTED_ORIGINS = [
        'https://lemon-py.s3.amazonaws.com',
        'https://lempy.s3.amazonaws.com',
        'https://lempy.s3.sa-east-1.amazonaws.com',

        "lemon-py.onrender.com",
        "https://lemon-py.onrender.com",
        
        "https://lemon-py.com",
        "lemon-py.com",
        #'https://admin.lemon-py.com',
        #'https://blog.lemon-py.com',
    ]



TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'build')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'core.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.2/ref/settings/#databases

# Database Postgresql
DATABASES = {
    "default": env.db("DATABASE_URL"),
}
DATABASES["default"]["ATOMIC_REQUESTS"] = True


# Password validation
# https://docs.djangoproject.com/en/3.2/ref/settings/#auth-password-validators

PASSWORD_HASHERS = [
    "django.contrib.auth.hashers.Argon2PasswordHasher",
    "django.contrib.auth.hashers.PBKDF2PasswordHasher",
    "django.contrib.auth.hashers.PBKDF2SHA1PasswordHasher",
    "django.contrib.auth.hashers.BCryptSHA256PasswordHasher",
]

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = 'es'

TIME_ZONE = 'America/Buenos_Aires'

USE_I18N = True
USE_L10N = True
USE_TZ = True


# Static files (CSS, JavaScript, Images)
STATIC_ROOT = os.path.join(BASE_DIR, 'static')
STATIC_URL = '/static/'

# Media files
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'build/static')
]



# Default primary key field type
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


# Django Rest Framenwork
REST_FRAMEWORK = {
    # Permisos (cualquier tipo de POST y request)
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny'
    ],
    # Paginación
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.LimitOffsetPagination',
    'PAGE_SIZE': 16,
}

# Autenticación del Rest Framework
AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend',
)

FILE_UPLOAD_PERMISSIONS = 0o640

EMAIL_BACKEND='django.core.mail.backends.console.EmailBackend'
# Active Campaign
ACTIVE_CAMPAIGN_URL=os.environ.get('ACTIVE_CAMPAIGN_URL')
ACTIVE_CAMPAIGN_KEY=os.environ.get('ACTIVE_CAMPAIGN_KEY')


# AWS y Mail
if not DEBUG:
    DEFAULT_FROM_EMAIL="LemonPy <mail@lemon-py.com>"
    #EMAIL_BACKEND='django.core.mail.backends.smtp.EmailBackend'
    #EMAIL_HOST = env('EMAIL_HOST')
    #EMAIL_HOST_USER = env('EMAIL_HOST_USER')
    #EMAIL_HOST_PASSWORD = env('EMAIL_HOST_PASSWORD')
    #EMAIL_PORT = env('EMAIL_PORT')
    #EMAIL_USE_TLS = env('EMAIL_USE_TLS')

    
    # django-ckeditor will not work with S3 through django-storages without this line in settings.py
    AWS_QUERYSTRING_AUTH = False
    #FROALA_STORAGE_BACKEND = 

    # aws settings
    AWS_ACCESS_KEY_ID = env('AWS_ACCESS_KEY_ID')
    AWS_SECRET_ACCESS_KEY = env('AWS_SECRET_ACCESS_KEY')
    AWS_STORAGE_BUCKET_NAME = env('AWS_STORAGE_BUCKET_NAME')

    # s3 static settings

    AWS_S3_CUSTOM_DOMAIN = f'{AWS_STORAGE_BUCKET_NAME}.s3.amazonaws.com'
    AWS_S3_OBJECT_PARAMETERS = {'CacheControl': 'max-age=86400'}
    AWS_DEFAULT_ACL = 'public-read'

    # s3 static settings

    STATIC_LOCATION = 'static'
    STATIC_URL = f'https://{AWS_S3_CUSTOM_DOMAIN}/{STATIC_LOCATION}/'
    STATICFILES_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'

    # s3 public media settings

    PUBLIC_MEDIA_LOCATION = 'media'
    MEDIA_URL = f'https://{AWS_S3_CUSTOM_DOMAIN}/{PUBLIC_MEDIA_LOCATION}/'
    DEFAULT_FILE_STORAGE = 'core.storage_backends.MediaStore'

    STATICFILES_DIRS = (os.path.join(BASE_DIR, 'build/static'),)
    STATIC_ROOT = os.path.join(BASE_DIR, 'static')

    # Froala settings
    FROALA_UPLOAD_PATH = os.path.join(BASE_DIR, 'media')
    #FROALA_STORAGE_BACKEND = MEDIA_URL