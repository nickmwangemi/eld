import logging
from rest_framework import viewsets, status
from  rest_framework.response import Response

from .models import LogEntry, Trip
from .serializers import LogEntrySerializer, TripSerializer

logger = logging.getLogger(__name__)


class LogEntryViewSet(viewsets.ModelViewSet):
    queryset = LogEntry.objects.all()
    serializer_class = LogEntrySerializer


class TripViewSet(viewsets.ModelViewSet):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer

    def create(self, request, *args, **kwargs):
        logger.info(f"Received request data: {request.data}")

        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            trip = serializer.save()
            return Response(TripSerializer(trip).data, status=status.HTTP_201_CREATED)
        else:
            logger.error(f"Validation Error: {serializer.errors}")
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
