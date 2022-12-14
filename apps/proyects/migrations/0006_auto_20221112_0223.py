# Generated by Django 3.2.15 on 2022-11-12 05:23

import apps.proyects.models
from django.db import migrations, models
import froala_editor.fields


class Migration(migrations.Migration):

    dependencies = [
        ('proyects', '0005_projects_repository'),
    ]

    operations = [
        migrations.AddField(
            model_name='projects',
            name='model',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='projects',
            name='content',
            field=froala_editor.fields.FroalaField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='projects',
            name='dataset',
            field=models.FileField(blank=True, default=False, null=True, upload_to=apps.proyects.models.blog_directory_path),
        ),
        migrations.AlterField(
            model_name='projects',
            name='dataset_info',
            field=froala_editor.fields.FroalaField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='projects',
            name='modelado',
            field=froala_editor.fields.FroalaField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='projects',
            name='problem',
            field=froala_editor.fields.FroalaField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='projects',
            name='solution',
            field=froala_editor.fields.FroalaField(blank=True, null=True),
        ),
    ]
