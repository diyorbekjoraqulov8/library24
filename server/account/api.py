from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view, authentication_classes, permission_classes

from .forms import SignupForm

@api_view(['POST'])
@authentication_classes([])
@permission_classes([])
def signup(r):
    data = r.data
    message = 'success'

    form = SignupForm({
        'name': data.get('name'),
        'email': data.get('email'),
        'password': data.get('password'),
    })
    if form.is_valid():
        user = form.save()
         
        # TODO: verification e-mail

    else:
        message = 'error'
        return JsonResponse({'status': message, 'error': form.errors}, status=status.HTTP_400_BAD_REQUEST)
    

    return JsonResponse({
        'status': message,
        'user': {
                'id': user.id,
                'name': user.name,
                'email': user.email, 
                'password_set': user.password is not None
            }
        }, status=status.HTTP_201_CREATED)


@api_view(['GET'])
def me(r):
    return JsonResponse({
        'id': r.user.id,
        'name': r.user.name,
        'email': r.user.email,
    })