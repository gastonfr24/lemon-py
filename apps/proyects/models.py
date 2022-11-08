from django.forms import CharField, URLField
from django.utils import timezone
import uuid
from django.db import models
from requests import delete
from apps.category.models import Category
#from ckeditor.fields import RichTextField
from froala_editor.fields import FroalaField

# Directorio de imágenes
def blog_directory_path(instance, filename):
    title=instance.title
    return 'projects/{0}/{1}'.format(title.replace(' ','-'), filename)


# Modelo de Projects
class Projects(models.Model):
    class ProjectObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')

    options = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )

    blog_uuid = models.UUIDField(default=uuid.uuid4, unique=True)
    title = models.CharField(max_length=200)
    description = models.TextField()
    slug = models.SlugField(unique=True)
    thumbnail = models.ImageField(upload_to = blog_directory_path)
    #video = models.FileField(upload_to= blog_directory_path, blank=True, null=True)
    #excerpt = models.CharField(max_length=100)
    dataset = models.FileField(upload_to = blog_directory_path,null= True, blank= True, default= False)



    problem = FroalaField(null= True, blank= True)   
    solution= FroalaField(null= True, blank= True)
    dataset_info = FroalaField(null= True, blank= True)
    content = FroalaField(null= True, blank= True)
    modelado = FroalaField(null= True, blank= True)

    repository= models.URLField(max_length=300)

    #author = 

    category =  models.ForeignKey(Category, on_delete= models.PROTECT)

    published = models.DateTimeField(default= timezone.now)

    status = models.CharField(max_length=10, choices=options, default='draft')

   # ml_project= models.OneToOneField()

    objects = models.Manager()  # default manager
    projectobjects = ProjectObjects()  # custom manager

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.title

    def get_video(self):
        if self.video:
            return self.video.url
        return ''

    def get_thumbnail(self):
        if self.thumbnail:
            return self.thumbnail.url
        return ''

    def get_dataset(self):
        if self.thumbnail:
            return self.dataset.url
        return ''