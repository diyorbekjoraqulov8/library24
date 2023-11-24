from django.contrib import admin

from .models import Author, Book, Rating

@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name',)
    search_fields = ('first_name', 'last_name',)

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'published_date', 'copies_sold',)
    list_filter = ('author',)
    search_fields = ('title',)
    autocomplete_fields = ('author',)

admin.site.register(Rating)