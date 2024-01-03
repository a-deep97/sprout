
from django.urls import path

from sproutApp import views

urlpatterns = [
    path('login',views.loginAuthor),
    path('signup',views.signupAuthor),
    path('logout',views.logoutAuthor),
    #path('sprout/create',views.createSprout),
]