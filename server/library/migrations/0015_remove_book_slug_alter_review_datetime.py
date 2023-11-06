# Generated by Django 4.1 on 2023-11-01 18:21

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('library', '0014_alter_review_datetime'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='book',
            name='slug',
        ),
        migrations.AlterField(
            model_name='review',
            name='datetime',
            field=models.DateTimeField(default=datetime.datetime(2023, 11, 1, 23, 21, 30, 367729)),
        ),
    ]