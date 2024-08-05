from rest_framework import permissions
from user.models import User


class IsOwnerOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return getattr(obj, "owner", obj.user) == request.user


class IsOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.user.is_anonymous:
            return False
        if request.method in permissions.SAFE_METHODS and request.user.is_staff:
            return True
        return (
            getattr(obj, "user", obj.owner) == request.user or request.user.is_superuser
        )


class IsVerified(permissions.BasePermission):
    message = "You must complete your profile for review."

    def has_permission(self, request, view):
        if request.user.is_anonymous:
            return False
        return request.user.is_verified


class IsClient(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.is_anonymous:
            return False
        return request.user.user_type == User.UserType.CLIENT or User.UserType.BOTH


class IsDesigner(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.is_anonymous:
            return False
        return request.user.user_type == User.UserType.DESIGNER or User.UserType.BOTH
