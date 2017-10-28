from django.conf.urls import url, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
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

    class Meta:
        unique_together = ('major', 'minor')

    def __str__(self):
        return f'major: {self.major}\tminor: {self.minor}'


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
    beacon = models.OneToOneField(Beacon,  null=False, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class TutorialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tutorial
        fields = ('id', 'name', 'image_path', 'beacon')


class TutorialViewSet(viewsets.ModelViewSet):
    permission_classes = (AllowAny, )
    queryset = Tutorial.objects.all()
    serializer_class = TutorialSerializer
    filter_backends = (DjangoFilterBackend, )
    filter_fields = ('beacon', )

    def retrieve(self, request, *args, **kwargs):
        major = request.GET['major']
        minor = request.GET['minor']
        try:
            the_tutorial = Tutorial.objects.get(beacon=Beacon.objects.get(major=major, minor=minor))
        except (Tutorial.DoesNotExist, Beacon.DoesNotExist):
            raise Http404
        return Response(TutorialSerializer(the_tutorial).data)

router.register(r'tutorials', TutorialViewSet)


class Skill(models.Model):
    name = models.CharField('スキル名', max_length=64)
    tutorial = models.ForeignKey(Tutorial)

    def __str__(self):
        return self.name


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ('id', 'name', 'tutorial')


class SkillViewSet(viewsets.ModelViewSet):
    permission_classes = (AllowAny, )
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    filter_backends = (DjangoFilterBackend, )
    filter_fields = ('tutorial', )

router.register(r'skills', SkillViewSet)


class Task(models.Model):
    name = models.CharField('タスク名', max_length=64)
    skill = models.ForeignKey(Skill)
    image_path = models.ImageField()
    description = models.TextField('詳細')

    def __str__(self):
        return self.name


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'name', 'skill', 'image_path', 'description')


class TaskViewSet(viewsets.ModelViewSet):
    permission_classes = (AllowAny, )
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    filter_backends = (DjangoFilterBackend, )
    filter_fields = ('skill', )

router.register(r'tasks', TaskViewSet)


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.

urlpatterns = [
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^api/v1/', include(router.urls)),
]
