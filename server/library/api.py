from django.http import JsonResponse
from rest_framework import status, generics
from rest_framework import permissions
from rest_framework.decorators import api_view, authentication_classes, permission_classes

from .serializers import BookSerializer
from .models import Book

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

    def get_permissions(self):
        if self.request.method == 'GET':
            self.permission_classes = [permissions.AllowAny, ]
        else:
            self.permission_classes = [permissions.IsAdminUser, ]
        return super(BookListCreateAPIView, self).get_permissions()
