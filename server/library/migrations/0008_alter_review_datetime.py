# Generated by Django 4.2.6 on 2023-10-28 11:46

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('library', '0007_alter_book_cover_alter_review_datetime'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='datetime',
            field=models.DateTimeField(default=datetime.datetime(2023, 10, 28, 16, 45, 52, 518755)),
        ),
    ]
