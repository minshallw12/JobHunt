# Generated by Django 4.2.6 on 2024-01-09 00:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobhunt', '0007_remove_interviews_job_id_interviews_company_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='interviews',
            name='role',
            field=models.CharField(blank=True, default='Unknown', max_length=254),
        ),
    ]