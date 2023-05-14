from django.urls import re_path
from . import views

urlpatterns = [
    re_path(r'[0-9a-zA-Z\-]*', views.index)
]