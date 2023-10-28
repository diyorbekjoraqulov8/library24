from django.contrib import admin

from .models import Author, Book, Review

@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'birth_date', 'death_date',)

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'published_date', 'copies_sold',)

admin.site.register(Review)