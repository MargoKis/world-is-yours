import logging

from rest_framework import status
from rest_framework.response import Response
from rest_framework.generics import CreateAPIView

from .tools import get_country_by_ip

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
        except KeyError as e:
            return Response({'message': 'Missing argument "platform"'}, status=status.HTTP_400_BAD_REQUEST)
        return Response({'message': 'Logs saved successfully'}, status=status.HTTP_201_CREATED)
