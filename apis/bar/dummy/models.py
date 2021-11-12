from django.db import models
from uuid import uuid4

class DummyBar(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4)
    name = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.name