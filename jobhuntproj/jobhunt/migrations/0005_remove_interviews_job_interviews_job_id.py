# Generated by Django 4.2.6 on 2023-12-20 23:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobhunt', '0004_interviews_recruiter_interviews_round_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='interviews',
            name='job',
        ),
        migrations.AddField(
            model_name='interviews',
            name='job_id',
            field=models.IntegerField(null=True),
        ),
    ]
