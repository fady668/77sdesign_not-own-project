from django.contrib.auth.models import BaseUserManager


class UserManager(BaseUserManager):
    def create_user(
        self,
        email,
        user_type,
        auth_provider=None,
        username=None,
        password=None,
        password_hashed=False,
    ):
        if auth_provider is None:
            auth_provider = self.model.AuthProvider.EMAIL
        user = self.model(
            email=email,
            username=username,
            user_type=user_type,
            auth_provider=auth_provider,
        )
        if password_hashed:
            user.password = password
        else:
            user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password):
        """Create and save a new superuser with given details"""
        user = self.create_user(
            email=email,
            user_type=self.model.UserType.STAFF,
            username=username,
            password=password,
        )

        user.is_superuser = True
        user.is_staff = True
        user.is_active = True

        user.save(using=self._db)
        return user
