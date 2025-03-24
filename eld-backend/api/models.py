from django.db import models


class Trip(models.Model):
    current_location = models.CharField(max_length=255)
    pickup_location = models.CharField(max_length=255)
    dropoff_location = models.CharField(max_length=255)
    current_cycle_used = models.IntegerField()


class LogEntry(models.Model):
    trip = models.ForeignKey(Trip, related_name="log_entries", on_delete=models.CASCADE)
    timestamp = models.DateTimeField()
    location = models.CharField(max_length=255)
    activity = models.CharField(max_length=255)

    class Meta:
        verbose_name_plural = "Log entries"
