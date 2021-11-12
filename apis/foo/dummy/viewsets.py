from rest_framework import viewsets
from .models import DummyBar
from .serializers import DummySerializer

class DummyViewSet(viewsets.ModelViewSet):
    queryset = DummyBar.objects.all()
    serializer_class = DummySerializer