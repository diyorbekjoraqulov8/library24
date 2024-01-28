# Generated by Django 4.2.6 on 2023-10-27 14:41

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('library', '0006_alter_review_datetime'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='cover',
            field=models.ImageField(upload_to='media/books/covers'),
        ),
        migrations.AlterField(
            model_name='review',
            name='datetime',
            field=models.DateTimeField(default=datetime.datetime(2023, 10, 27, 19, 41, 56, 386558)),
        ),
    ]