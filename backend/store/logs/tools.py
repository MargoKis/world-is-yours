import json

from datetime import datetime, timedelta
from django.contrib.gis.geoip2 import GeoIP2


def get_country_by_ip(ip_address):
    g = GeoIP2()
    try:
        country = g.country(ip_address)
        return country['country_name']
    except Exception as e:
        return "Undetected"


def get_logs(log_file, interval):
    current_time = datetime.now()
    if interval == 'day':
        start_time = current_time - timedelta(days=1)
    elif interval == 'month':
        start_time = current_time - timedelta(days=30)
    else:  # interval == 'year'
        start_time = current_time - timedelta(days=365)

    # Чтение логов из файла
    with open(log_file, 'r') as log_file:
        logs = [json.loads(line) for line in log_file]

    # Фильтрация логов по времени
    filtered_logs = [log for log in logs if is_within_interval(log, start_time)]

    return filtered_logs


def is_within_interval(log, start_time):
    log_timestamp = datetime.strptime(log['timestamp'], "%Y-%m-%dT%H:%M:%S.%fZ")
    return log_timestamp >= start_time
