from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('addentry', views.addEntry, name='addentry'),
    path('getapplications', views.getApplications, name='getapplications')

]