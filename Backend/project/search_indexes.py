from haystack import indexes
from .models import Project


class ProjectIndex(indexes.SearchIndex, indexes.Indexable):
    text = indexes.CharField(document=True)
    name = indexes.CharField(model_attr="name")
    description = indexes.CharField(model_attr="description")

    def get_model(self):
        return Project

    def index_queryset(self, using=None):
        return self.get_model().objects.filter(is_listed=True)

    def prepare_text(self, obj):
        return obj.name + ".\n" + obj.description
