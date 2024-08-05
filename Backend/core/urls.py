from django.urls import path
from .views import (
    CategoriesListAPIView,
    IndustriesListAPIView,
    ColorPalettesListAPIView,
)

urlpatterns = [
    path("categories/", CategoriesListAPIView.as_view(), name="categories_list"),
    path("industries/", IndustriesListAPIView.as_view(), name="industries_list"),
    path(
        "color-palettes/",
        ColorPalettesListAPIView.as_view(),
        name="color_palettes_list",
    ),
]
