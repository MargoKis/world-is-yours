from django.contrib import admin
from order.models import Order


@admin.register(Order)
class TaskModelAdmin(admin.ModelAdmin):
    ...

