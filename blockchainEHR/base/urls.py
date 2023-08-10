from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.landing_page, name='landing_page'),
    path('login/', views.loginPage, name='login'),
    path('signup/', views.signup, name='signup'),
    path('user_home/', views.user_home, name='user_home'),
    path('user_profile/', views.user_profile, name='user_profile'),

]
