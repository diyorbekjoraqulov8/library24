# Generated by Django 4.1 on 2023-11-01 17:42

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('library', '0011_book_slug_alter_review_datetime'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='slug',
            field=models.SlugField(default='', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='review',
            name='datetime',
            field=models.DateTimeField(default=datetime.datetime(2023, 11, 1, 22, 42, 27, 654486)),
        ),
    ]
