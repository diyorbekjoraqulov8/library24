from django.db import models
from datetime import datetime

from account.models import User

class Author(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    birth_date = models.DateField()
    death_date = models.DateField(blank=True, null=True)

class Book(models.Model):
    author = models.ForeignKey(Author, models.DO_NOTHING)
    title = models.CharField(max_length=255)
    description = models.TextField(max_length=255)
    genre = models.CharField(max_length=50)
    length = models.IntegerField()
    published_date = models.DateField()
    created_date = models.DateField(default=datetime.now().today)
    copies_sold = models.IntegerField(default=0)
    price = models.FloatField()
    discount = models.IntegerField(default=0)
    

    cover = models.ImageField(upload_to='media/books/covers')


class Review(models.Model):
    user = models.ForeignKey(User, models.CASCADE)
    book = models.ForeignKey(Book, models.CASCADE)
    datetime = models.DateTimeField(default=datetime.now())
    rating = models.IntegerField()
