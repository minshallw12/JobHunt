# Generated by Django 4.2 on 2023-09-19 20:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobhunt', '0002_jobs_interviews'),
    ]

    operations = [
        migrations.AddField(
            model_name='interviews',
            name='offer',
            field=models.BooleanField(default=False),
        ),
    ]
