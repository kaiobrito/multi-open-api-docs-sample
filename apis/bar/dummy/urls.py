from rest_framework import routers
from .viewsets import DummyViewSet

router = routers.DefaultRouter()
router.register('dummy', DummyViewSet)

urlpatterns = router.urls