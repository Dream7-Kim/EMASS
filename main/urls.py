from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("newuser", views.newuser, name="newuser"),

    path("instruction/", views.instruction, name="instructionAPI"),
    path("changebccolor/", views.changebccolor, name="changebccolor"),
]