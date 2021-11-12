from rest_framework import routers
from .viewsets import DummyViewSet

router = routers.DefaultRouter()
router.register('bar', DummyViewSet)

urlpatterns = router.urls