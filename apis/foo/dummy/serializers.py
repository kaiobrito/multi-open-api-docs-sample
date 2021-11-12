from rest_framework import serializers
from .models import DummyBar 

class DummySerializer(serializers.ModelSerializer):
    class Meta:
        model = DummyBar
        fields = '__all__'