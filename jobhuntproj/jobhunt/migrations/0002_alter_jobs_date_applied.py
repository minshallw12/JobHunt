# Generated by Django 4.2.5 on 2023-09-22 20:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobhunt', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='jobs',
            name='date_applied',
            field=models.CharField(max_length=254),
        ),
    ]