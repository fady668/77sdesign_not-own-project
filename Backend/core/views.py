from rest_framework import generics, permissions
from .models import Category, Industry, ColorPalette
from .serializers import CategorySerializer, IndustrySerializer, ColorPaletteSerializer


class CategoriesListAPIView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [
        permissions.AllowAny,
    ]


class IndustriesListAPIView(generics.ListAPIView):
    queryset = Industry.objects.all()
    serializer_class = IndustrySerializer
    permission_classes = [
        permissions.AllowAny,
    ]


class ColorPalettesListAPIView(generics.ListAPIView):
    queryset = ColorPalette.objects.all()
    serializer_class = ColorPaletteSerializer
    permission_classes = [
        permissions.AllowAny,
    ]
