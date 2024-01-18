
from django.urls import path

from sproutApp import views

urlpatterns = [
    path('authenticate',views.checkAuthentication),
    path('login',views.loginAuthor),
    path('signup',views.signupAuthor),
    path('logout',views.logoutAuthor),
    path('sprout/create',views.createSprout),
    path('sprout',views.getSproutPostData),
    path('sprout/like',views.likeSproutPost),
    path('sprout/dislike',views.dislikeSproutPost),
    path('dashboard/sprouts',views.getDashboardPosts),
    path('profile/posts',views.getProfilePosts),
    path('home/sprouts',views.getHomePosts),
    path('search/posts',views.getPostSearchResults),
]