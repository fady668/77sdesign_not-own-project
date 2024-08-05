from rest_framework import serializers
from .models import Category, Industry, ColorPalette

import base64
#cat icon temp paused cause error in path#
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"
    # def get_icon(self, obj):
    #     if obj.icon:
    #         with open(obj.icon.path, "rb") as image_file:
    #             encoded_string = base64.b64encode(image_file.read())
    #             return encoded_string.decode("utf-8")
    #     return None

    # def to_representation(self, instance):
    #     representation = super().to_representation(instance)
    #     representation['icon'] = self.get_icon(instance)
    #     return representation

class IndustrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Industry
        fields = "__all__"


class ColorPaletteSerializer(serializers.ModelSerializer):
    class Meta:
        model = ColorPalette
        fields = "__all__"


class DynamicFieldsModelSerializer(serializers.ModelSerializer):
    """
    A ModelSerializer that takes an additional `fields` argument that
    controls which fields should be displayed.
    """

    def __init__(self, *args, **kwargs):
        # Don't pass the 'fields' arg up to the superclass
        fields = kwargs.pop("fields", None)

        # Instantiate the superclass normally
        super().__init__(*args, **kwargs)

        if fields is not None:
            # Drop any fields that are not specified in the `fields` argument.
            allowed = set(fields)
            existing = set(self.fields)
            for field_name in existing - allowed:
                self.fields.pop(field_name)
