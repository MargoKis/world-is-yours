from django.contrib.gis.geoip2 import GeoIP2


def get_country_by_ip(ip_address):
    g = GeoIP2()
    try:
        country = g.country(ip_address)
        return country['country_name']
    except Exception as e:
        return "Undetected"
