from django.conf.urls import url, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets
from rest_framework.response import Response
from django.db import models
from django.http import Http404
from rest_framework.permissions import AllowAny

router = routers.DefaultRouter()


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'is_staff')


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


router.register(r'users', UserViewSet)


class Beacon(models.Model):
    major = models.PositiveIntegerField()
    minor = models.PositiveIntegerField()


class BeaconSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beacon
        fields = ('id', 'major', 'minor')


class BeaconViewSet(viewsets.ModelViewSet):
    permission_classes = (AllowAny, )
    queryset = Beacon.objects.all()
    serializer_class = BeaconSerializer

router.register(r'beacons', BeaconViewSet)


class Tutorial(models.Model):
    name = models.CharField('チュートリアルの名前', max_length=64)
    image_path = models.ImageField('サムネイル')
    beacon = models.OneToOneField(Beacon)


class TutorialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tutorial
        fields = ('id', 'name', 'img_path')


class TutorialViewSet(viewsets.ModelViewSet):
    permission_classes = (AllowAny, )
    queryset = Tutorial.objects.all()
    serializer_class = BeaconSerializer

    def retrieve(self, request, *args, **kwargs):
        major = request.GET['major']
        minor = request.GET['minor']
        try:
            the_tutorial = Tutorial.objects.get(beacon=Beacon.objects.get(major=major, minor=minor))
        except (Tutorial.DoesNotExist, Beacon.DoesNotExist):
            raise Http404
        return Response(TutorialSerializer(the_tutorial).data)

router.register(r'tutorials', TutorialViewSet)


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.

urlpatterns = [
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^api/v1/', include(router.urls)),
]
