from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('addentry/', views.addEntry, name='addentry'),
    path('getapplications/', views.getApplications, name='getapplications'),
    path('application/<int:id>', views.getApplicationDetails, name='getApplicationDetails'),
    path('increment/<int:id>', views.increment, name='increment'),
    path('decrement/<int:id>', views.decrement, name='decrement'),
    path('editentry/<int:id>', views.editEntry, name='editentry'),
    path('deleteapplication/<int:id>', views.deleteApplication, name='deleteapplication'),
    # path('search/', views.search, name='search_url'),
]