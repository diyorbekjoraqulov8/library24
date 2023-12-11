import os
from django.conf import settings

from rest_framework import serializers

from account.models import User

from .models import Author, Book, Rating

from django.core.files.base import ContentFile
from django.utils.text import slugify

class SimpleAuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = [
            'id',
            'full_name'
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
            'full_name'
            'books'
        ]

class BookSerializer(serializers.ModelSerializer):
    author = serializers.PrimaryKeyRelatedField(queryset=Author.objects.all())
    cover_url = serializers.SerializerMethodField()
    cover = serializers.ImageField(max_length=None, write_only=True)
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
            'cover',
            'cover_url'
        ]

    def create(self, validated_data):
        cover = validated_data.pop('cover')
        book = Book.objects.create(**validated_data)
        extension = os.path.splitext(cover.name)[1]  # Extract extension from original file name
        new_filename = '{}-{}{}'.format(book.id, slugify(book.title), extension)
        book.cover.save(new_filename, ContentFile(cover.read()))
        return book

    def get_cover_url(self, obj):
        if obj.cover:
            return 'http://{}{}'.format(settings.HOST_NAME, obj.cover.url)
        return None

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['author'] = SimpleAuthorSerializer(instance.author).data
        return representation
        

class RatingSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    book = serializers.PrimaryKeyRelatedField(queryset=Book.objects.all())
    class Meta:
        model = Rating
        fields = ['user','book','rating']

    def validate_rating(self, value):
        if value < 0.5 or value > 5.0:
            raise serializers.ValidationError("Rating must be between 0.5 and 5.0")
        return value
    