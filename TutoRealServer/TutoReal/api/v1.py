from django.conf.urls import url, include
from rest_framework import routers, serializers, viewsets
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.db import models
from django.http import Http404
from rest_framework.permissions import AllowAny

router = routers.DefaultRouter()


class Tutorial(models.Model):
    name = models.CharField('チュートリアルの名前', max_length=64)
    major = models.PositiveIntegerField()
    minor = models.PositiveIntegerField()
    image_path = models.ImageField('サムネイル')

    def __str__(self):
        return self.name

    class Meta:
        unique_together = ('major', 'minor')


class Skill(models.Model):
    name = models.CharField('スキル名', max_length=64)
    tutorial = models.ForeignKey(Tutorial)

    def __str__(self):
        return self.name


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


class SkillSerializer(serializers.ModelSerializer):
    task_set = TaskSerializer(many=True, read_only=True)

    class Meta:
        model = Skill
        fields = ('id', 'name', 'tutorial', 'task_set')


class TutorialSerializer(serializers.ModelSerializer):
    skill_set = SkillSerializer(many=True, read_only=True)

    class Meta:
        model = Tutorial
        fields = ('id', 'major', 'minor', 'name', 'image_path', 'skill_set')


class DetailTutorialSerializer(serializers.ModelSerializer):
    skill_set = SkillSerializer(many=True, read_only=True)

    class Meta:
        model = Tutorial
        fields = ('id', 'major', 'minor', 'name', 'image_path', 'skill_set')


class TaskViewSet(viewsets.ModelViewSet):
    permission_classes = (AllowAny, )
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    filter_backends = (DjangoFilterBackend, )
    filter_fields = ('skill', )

router.register(r'tasks', TaskViewSet)


class SkillViewSet(viewsets.ModelViewSet):
    permission_classes = (AllowAny, )
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    filter_backends = (DjangoFilterBackend, )
    filter_fields = ('tutorial', )

router.register(r'skills', SkillViewSet)


class TutorialViewSet(viewsets.ModelViewSet):
    permission_classes = (AllowAny, )
    queryset = Tutorial.objects.all()
    serializer_class = TutorialSerializer
    filter_backends = (DjangoFilterBackend, )


router.register(r'tutorials', TutorialViewSet)


class DetailTutorialViewSet(viewsets.ModelViewSet):
    permission_classes = (AllowAny, )
    queryset = Tutorial.objects.all()
    serializer_class = TutorialSerializer
    filter_backends = (DjangoFilterBackend, )

    def list(self, request, *args, **kwargs):
        major = request.GET['major']
        minor = request.GET['minor']
        try:
            the_tutorial = Tutorial.objects.get(major=major, minor=minor)
        except Tutorial.DoesNotExist:
            raise Http404
        return Response(TutorialSerializer(the_tutorial).data)

router.register(r'detailed_tutorial', DetailTutorialViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.

urlpatterns = [
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^api/v1/', include(router.urls)),
]
