from rest_framework import viewsets
from rest_framework.schemas.openapi import AutoSchema
from .models import DummyBar
from .serializers import DummySerializer

class DummyViewSet(viewsets.ModelViewSet):
    schema = AutoSchema(tags=['foo'])
    queryset = DummyBar.objects.all()
    serializer_class = DummySerializer