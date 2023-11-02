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
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    birth_date = models.DateField()
    death_date = models.DateField(blank=True, null=True)

    def __str__(self) -> str:
        return f"{self.first_name} {self.last_name}"

class Book(models.Model):
    author = models.ForeignKey(Author, models.DO_NOTHING, related_name="books")
    title = models.CharField(max_length=255)
    # slug = AutoSlugField(populate_from=['title', 'id'])
    description = models.TextField(max_length=255)
    genre = models.CharField(max_length=50)
    length = models.IntegerField()
    published_date = models.DateField()
    created_date = models.DateField(default=datetime.now().today)
    copies_sold = models.IntegerField(default=0)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    discount = models.IntegerField(default=0, validators=[MaxValueValidator(100)])
    

    cover = models.ImageField(upload_to='media/books/covers')



class Review(models.Model):
    user = models.ForeignKey(User, models.CASCADE)
    book = models.ForeignKey(Book, models.CASCADE)
    datetime = models.DateTimeField(default=datetime.now())
    rating = models.IntegerField()
