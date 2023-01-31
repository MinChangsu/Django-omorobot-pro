from django.urls import path
from . import views

urlpatterns = [

    path("", views.index, name="home"),
    path("insert/", views.insert, name="insert"),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
    path('result/', views.result, name='result'),
    path('edit/', views.edit, name='edit'),
    path('save/<int:num>', views.save, name='save'),
    path("introduce/", views.introduce, name="introduce"),
    path("details/<int:num>", views.details, name="details"),
    path("deletes/", views.deletes, name="deletes"),
    path("signup/", views.signup, name="signup"),





]