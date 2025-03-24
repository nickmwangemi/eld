from django.contrib import admin

from .models import LogEntry, Trip


class TripAdmin(admin.ModelAdmin):
    list_display = (
        "current_location",
        "pickup_location",
        "dropoff_location",
        "current_cycle_used",
    )
    search_fields = ("current_location", "pickup_location", "dropoff_location")


class LogEntryAdmin(admin.ModelAdmin):
    list_display = ("trip", "timestamp", "location", "activity")
    list_filter = ("activity",)
    search_fields = ("location",)


admin.site.register(Trip, TripAdmin)
admin.site.register(LogEntry, LogEntryAdmin)
