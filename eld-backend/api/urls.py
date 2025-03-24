from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import LogEntryViewSet, TripViewSet

router = DefaultRouter()
router.register(r"trips", TripViewSet)
router.register(r"log-entries", LogEntryViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
