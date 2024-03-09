import logging

from django.http import JsonResponse
from rest_framework import status
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework.generics import CreateAPIView
from rest_framework.views import APIView

from .tools import get_country_by_ip, get_logs


logger = logging.getLogger('user_logger')


class LogsPostAPIView(CreateAPIView):
    def post(self, request, *args, **kwargs):
        try:
            user_ip = request.META.get('REMOTE_ADDR')
            logger.info(
                {
                    "platform": request.data['platform']['type'],
                    "user": self.request.user,
                    "user_ip": user_ip,
                    "country": get_country_by_ip(user_ip),
                }
            )
        except Exception as e:
            return Response({'message': 'Missing argument "platform"'}, status=status.HTTP_400_BAD_REQUEST)
        return Response({'message': 'Logs saved successfully'}, status=status.HTTP_201_CREATED)


class UserLogsAPIView(APIView):
    permission_classes = [IsAdminUser]

    def get(self, request):
        interval = request.GET.get('interval', None)
        if interval not in ['day', 'month', 'year']:
            return JsonResponse({'error': 'Invalid interval provided'}, status=400)

        logs = get_logs('user.info.log', interval)
        return JsonResponse({'logs': logs})


class OrderLogsAPIView(APIView):
    permission_classes = [IsAdminUser]

    def get(self, request):
        interval = request.GET.get('interval', None)
        if interval not in ['day', 'month', 'year']:
            return JsonResponse({'error': 'Invalid interval provided'}, status=400)

        logs = get_logs('order.info.log', interval)
        return JsonResponse({'logs': logs})
