
from django.urls import path
import sproutApp.views as views

urlpatterns = [
    path('login',views.loginAuthor),
    path('signup',views.signupAuthor),
    path('logout',views.logoutAuthor),
]