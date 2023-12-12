
from django.contrib import admin
from django.urls import include, path
from sproutApp.views import dummyView

urlpatterns = [
    path('',view=dummyView , name='index'),
]