from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('addentry/', views.addEntry, name='addentry'),
    path('addinterview/', views.createInterview, name='addinterview'),
    path('getapplications/', views.getApplications, name='getapplications'),
    path('getinterviews/', views.getInterviews, name='getInterviews'),
    path('application/<int:id>', views.getApplicationDetails, name='getApplicationDetails'),
    path('increment/<int:id>', views.increment, name='increment'),
    path('decrement/<int:id>', views.decrement, name='decrement'),
    path('editjob/<int:id>/<str:field>', views.editJob, name='editjob'), # this route's front end needs to be finished
    path('deleteapplication/<int:id>', views.deleteApplication, name='deleteapplication'),
    # path('search/', views.search, name='search_url'),
]