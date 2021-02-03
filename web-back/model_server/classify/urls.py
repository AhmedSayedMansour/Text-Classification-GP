from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

app_name = 'classify'
urlpatterns = [
    path("api/text/", views.getText, name="text"),
    path("api/result/", views.result, name="result"),
]