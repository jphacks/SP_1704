from django.conf.urls import url
from .api.v1 import urlpatterns as api_url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
]
urlpatterns += api_url
