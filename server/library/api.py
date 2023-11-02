from django.http import JsonResponse
from rest_framework import status, generics, permissions
from rest_framework.filters import SearchFilter
from rest_framework.decorators import api_view, authentication_classes, permission_classes

from .serializers import SimpleAuthorSerializer, AuthorSerializer, BookSerializer
from .models import Book, Author

class BookRetrieveUpdateDeleteAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Book.objects.all().order_by('id')  
    serializer_class = BookSerializer
    lookup_field = 'id'

    def get_permissions(self):
        if self.request.method == 'GET':
            self.permission_classes = [permissions.AllowAny, ]
        else:
            self.permission_classes = [permissions.IsAdminUser, ]
        return super(BookRetrieveUpdateDeleteAPIView, self).get_permissions()

class BookListCreateAPIView(generics.ListCreateAPIView):
    queryset = Book.objects.all().order_by('id')
    serializer_class = BookSerializer
    lookup_field = 'id'
    filter_backends = [SearchFilter]
    search_fields = ['title']

    def get_permissions(self):
        if self.request.method == 'GET':
            self.permission_classes = [permissions.AllowAny, ]
        else:
            self.permission_classes = [permissions.IsAdminUser, ]
        return super(BookListCreateAPIView, self).get_permissions()
    
class AuthorListCreateAPIView(generics.ListCreateAPIView):
    queryset = Author.objects.all().order_by('id')  
    serializer_class = AuthorSerializer
    lookup_field = 'id'
    filter_backends = [SearchFilter]
    search_fields = ['first_name', 'last_name']

    def get_permissions(self):
        if self.request.method == 'GET':
            self.permission_classes = [permissions.AllowAny, ]
        else:
            self.permission_classes = [permissions.IsAdminUser, ]
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
        return super(AuthorRetrieveUpdateDeleteAPIView, self).get_permissions()