from rest_framework.permissions import BasePermission


class CanChangeReview(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in ["PUT", "PATCH", "DELETE"]:
            return request.user == obj.user
        return True
