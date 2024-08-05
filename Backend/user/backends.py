from django.contrib.auth import get_user_model

User = get_user_model()


class ThirdPartyAuthBackend(object):
    def authenticate(self, request, email=None, password=None, **kwargs):
        try:
            user = User.objects.get(email=email)
        except User.MultipleObjectsReturned:
            return None
        except User.DoesNotExist:
            return None

        if user.password == password:
            return user

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None
