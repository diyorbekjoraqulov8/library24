from django.urls import path

# from .api import get_book
from . import api

urlpatterns = [
    path('books/', api.BookListCreateAPIView.as_view(), name='books'),
    path('books/<int:id>/', api.BookRetrieveUpdateDeleteAPIView.as_view(), name='book'),
    path('books/<int:id>/rate/', api.RatingViewSet.as_view({'post': 'create'}), name='book-rate'),
    path('authors/', api.AuthorListCreateAPIView.as_view(), name='auhtors'),
    path('authors/<int:id>/', api.AuthorRetrieveUpdateDeleteAPIView.as_view(), name='author'),
    path('genres/', api.GenreViewSet.as_view({"post":"create", "get":"list"}), name='genres'),
    path('genres/<int:id>', api.GenreViewSet.as_view({"get":"retrieve","put":"update","delete":"destroy"}), name='genre'),
]