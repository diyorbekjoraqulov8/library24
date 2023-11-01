from rest_framework import serializers

from datetime import datetime
from .models import Author, Book


class CustomPKRelatedField(serializers.PrimaryKeyRelatedField):
    def use_pk_only_optimization(self):
        return False

    def to_representation(self, value):
        return AuthorSerializer(value).data

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = [
            'id',
            'first_name',
            'last_name',
            'birth_date',
            'death_date'
        ]

class BookSerializer(serializers.ModelSerializer):
    author = CustomPKRelatedField(queryset=Author.objects.all())
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