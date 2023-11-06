from django.urls import path

# from .api import get_book
from . import api

urlpatterns = [
    path('books/', api.BookListCreateAPIView.as_view(), name='books'),
    path('books/<int:id>/', api.BookRetrieveUpdateDeleteAPIView.as_view(), name='book'),
    path('authors/', api.AuthorListCreateAPIView.as_view(), name='auhtors'),
    path('authors/<int:id>/', api.AuthorRetrieveUpdateDeleteAPIView.as_view(), name='author'),
]