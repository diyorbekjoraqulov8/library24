from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework import status, generics, permissions, viewsets
from rest_framework.filters import SearchFilter
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination

from rest_framework_simplejwt.authentication import JWTAuthentication

from django_filters.rest_framework import DjangoFilterBackend

from .serializers import GenreSerializer, RatingSerializer, SimpleAuthorSerializer, AuthorSerializer, BookSerializer
from .models import Book, Author, Genre, Rating

class BookPagination(PageNumberPagination):
    page_size = 7
    page_query_param = 'page'
    page_size_query_param = 'page_size'


class BookRetrieveUpdateDeleteAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Book.objects.all().order_by('id')  
    serializer_class = BookSerializer
    lookup_field = 'id'

    def get_permissions(self):
        if self.request.method == 'GET':
            self.permission_classes = [permissions.AllowAny, ]
        else:
            self.permission_classes = [permissions.IsAdminUser, ]
            self.authentication_classes = [JWTAuthentication]
        return super(BookRetrieveUpdateDeleteAPIView, self).get_permissions()

class BookListCreateAPIView(generics.ListCreateAPIView):
    queryset = Book.objects.all().order_by('id')
    serializer_class = BookSerializer
    lookup_field = 'id'
    
    filter_backends = [DjangoFilterBackend, SearchFilter]
    search_fields = ['title']
    filterset_fields = ['id', 'author', 'title', 'price', 'discount', 'genre']
    

    pagination_class = BookPagination

    def get_permissions(self):
        if self.request.method == 'GET':
            self.permission_classes = [permissions.AllowAny, ]
        else:
            self.permission_classes = [permissions.IsAdminUser, ]
            self.authentication_classes = [JWTAuthentication]
        return super(BookListCreateAPIView, self).get_permissions()
    
class AuthorListCreateAPIView(generics.ListCreateAPIView):
    queryset = Author.objects.all().order_by('id')  
    serializer_class = SimpleAuthorSerializer
    lookup_field = 'id'
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_fields = ['id', 'full_name']
    search_fields = ['full_name']
    pagination_class = PageNumberPagination
    pagination_class.page_size = 10
    pagination_class.page_query_param = 'page_size'

    def get_permissions(self):
        if self.request.method == 'GET':
            self.permission_classes = [permissions.AllowAny, ]
        else:
            self.permission_classes = [permissions.IsAdminUser, ]
            self.authentication_classes = [JWTAuthentication]
        return super(AuthorListCreateAPIView, self).get_permissions()

class AuthorRetrieveUpdateDeleteAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Author.objects.all().order_by('id')  
    serializer_class = AuthorSerializer
    lookup_field = 'id'

    def get_permissions(self):
        if self.request.method == 'GET':
            self.permission_classes = [permissions.AllowAny, ]
        else:
            self.permission_classes = [permissions.IsAdminUser, ]
            self.authentication_classes = [JWTAuthentication]
        return super(AuthorRetrieveUpdateDeleteAPIView, self).get_permissions()

class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer

    def create(self, request, *args, **kwargs):
        data = request.data
        data['user'] = request.user.id
        data['book'] = kwargs['id']
        serializer = self.get_serializer(data=data)
        if serializer.is_valid(raise_exception=True):
            rating, created = Rating.objects.update_or_create(
                user=request.user, 
                book_id=kwargs['id'], 
                defaults={'rating': data['rating']}
            )
            if created:
                return Response(RatingSerializer(rating).data, status=status.HTTP_201_CREATED)
            else:
                return Response(RatingSerializer(rating).data, status=status.HTTP_200_OK)
            
class GenreViewSet(viewsets.ModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer
    lookup_field = 'id'