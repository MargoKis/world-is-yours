from django.http import JsonResponse
from django.views import View
from .google_drive_api import translator


class TranslationAPIView(View):
    def get(self, request, language):
        if language not in ['uk', 'en']:
            return JsonResponse({'error': 'This language is not supported'}, status=404)
        translations = translator(language)

        if translations is None:
            return JsonResponse({'error': 'Failed to read translations from Google Sheet'}, status=500)

        return JsonResponse(translations)
