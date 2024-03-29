
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
    path('dashboard/saved',views.getDashboardSavedPosts),
    path('profile/posts',views.getProfilePosts),
    path('profile/info',views.getAuthorInfo),
    path('profile/bio/edit',views.EditProfileBio),
    path('home/sprouts',views.getHomePosts),
    path('search/posts',views.getPostSearchResults),
    path('post/delete',views.deletePost),
    path('post/save',views.savePost)
]