from rest_framework import serializers

from .models import LogEntry, Trip


class LogEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = LogEntry
        fields = "__all__"


class TripSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trip
        fields = '__all__'
        extra_kwargs = {
            'current_location': {'required': True},
            'pickup_location': {'required': True},
            'dropoff_location': {'required': True},
            'current_cycle_used': {'required': True, 'min_value': 0},
        }