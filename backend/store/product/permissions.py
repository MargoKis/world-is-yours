# from rest_framework.permissions import BasePermission
#
# from tasks.models import TaskModel
#
#
# class TaskPermission(BasePermission):
#     def has_object_permission(self, request, view, obj: TaskModel) -> bool:
#         if request.method in ['GET']:
#             return True
#
#         return request.user == obj.reporter or request.user == obj.assignee
#
#
# class CanChangeTask(BasePermission):
#     def has_object_permission(self, request, view, obj):
#         if request.method in ["PUT", "PATCH"] and request.user == obj.assignee:
#             return "assignee" not in request.data and "status" not in request.data
#         return True
#
#
# class CanDeleteTask(BasePermission):
#     def has_object_permission(self, request, view, obj):
#         if request.method == "DELETE":
#             return request.user == obj.reporter and obj.status is False
#         return True
