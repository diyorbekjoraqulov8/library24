from django.contrib.auth import forms

from .models import User

class SignupForm(forms.UserCreationForm):
    class Meta:
        model = User
        fields = ['name', 'email', 'password1']

        def clean_username(self):
            return self.cleaned_data['email']

        def clean_email(self):
            email = self.cleaned_data['email']
            if User.objects.filter(email=email).exists():
                raise forms.ValidationError("This email address is already in use.")
            return email