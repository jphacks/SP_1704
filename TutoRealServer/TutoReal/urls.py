from django.conf.urls import url
from django.conf.urls.static import static
from django.conf import settings
from .api.v1 import urlpatterns as api_url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += api_url
