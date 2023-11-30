from collections.abc import Iterable
import os
from django.db import models
from django.core.validators import MaxValueValidator
from django.utils.text import slugify

# from autoslug import AutoSlugField
# To use slugs:
#   1. Install django-autoslug
#   2. Change lookup_field in APIViews
#   3. Change URLs

from datetime import datetime

from account.models import User

class Author(models.Model):
    full_name = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.full_name


class Book(models.Model):
    author = models.ForeignKey(Author, models.CASCADE, related_name="books")
    title = models.CharField(max_length=255)
    # slug = AutoSlugField(populate_from=['title', 'id'])
    description = models.TextField(max_length=500)
    genre = models.CharField(max_length=50)
    length = models.IntegerField()
    published_date = models.IntegerField()
    created_date = models.DateField(default=datetime.now().today, blank=True)
    copies_sold = models.IntegerField(default=0, blank=True)
    price = models.IntegerField()
    discount = models.IntegerField(default=0, validators=[MaxValueValidator(100)], blank=True)
    

    cover = models.ImageField(upload_to='books/covers')

    def get_rating(self):
        ratings = self.rating_set.all()
        avg = 0

        for i in ratings:
            avg += i.rating
        else: avg /= len(ratings)

        data = {
            'number': len(ratings),
            'average': avg
        }
        return data



class Rating(models.Model):
    user = models.ForeignKey(User, models.CASCADE)
    book = models.ForeignKey(Book, models.CASCADE)
    rating = models.DecimalField(max_digits=2, decimal_places=1)
