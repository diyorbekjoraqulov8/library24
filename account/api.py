from rest_framework import status
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.token_blacklist.models import BlacklistedToken
from rest_framework_simplejwt.views import TokenObtainPairView

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
        'password1': data.get('password'),
        'password2': data.get('password'),
    })
    print(form.is_valid())
    if form.is_valid():
        user = form.save()
         
        # TODO: e-mail verification 
    else:
        message = 'error'
        return Response({'status': message, 'error': form.errors}, status=status.HTTP_400_BAD_REQUEST)
    
    refresh = RefreshToken.for_user(user)

    return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token)
        }, status=status.HTTP_201_CREATED)


@api_view(['GET'])
def me(r):
    return Response({
        'id': r.user.id,
        'name': r.user.name,
        'email': r.user.email,
    })

class BlacklistTokenUpdateView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        # try:
            # Extract the token from the Authorization header
            auth_header = request.META.get('HTTP_AUTHORIZATION')
            if auth_header is not None:
                token = auth_header.split(' ')[1]
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST)

            # Blacklist the token
            token = RefreshToken(token)
            token.blacklist()

            return Response(status=status.HTTP_205_RESET_CONTENT)
        # except Exception as e:
        #     return Response(status=status.HTTP_400_BAD_REQUEST)