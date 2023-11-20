from rest_framework import serializers

from account.models import User

from .models import Author, Book, Rating

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
    # author = SimpleAuthorSerializer()
    author = serializers.PrimaryKeyRelatedField(queryset=Author.objects.all())
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
    