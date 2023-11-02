from rest_framework import serializers

from .models import Author, Book

class SimpleAuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = [
            'id',
            'first_name',
            'last_name',
            'birth_date',
            'death_date',
        ]
class SimpleBookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = [
            'id',
            'title',
            'description',
            'genre',
            'length',
            'published_date',
            'created_date',
            'copies_sold',
            'price',
            'discount',
            'cover'
        ]

class AuthorSerializer(serializers.ModelSerializer):
    books = SimpleBookSerializer(many=True, required=False)
    class Meta:
        model = Author
        fields = [
            'id',
            'first_name',
            'last_name',
            'birth_date',
            'death_date',
            'books'
        ]

class BookSerializer(serializers.ModelSerializer):
    author = SimpleAuthorSerializer()
    class Meta:
        model = Book
        fields = [
            'id',
            'author',
            'title',
            'description',
            'genre',
            'length',
            'published_date',
            'created_date',
            'copies_sold',
            'price',
            'discount',
            'cover'
        ]

