from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('addentry/', views.addEntry, name='addentry'),
    path('getapplications/', views.getApplications, name='getapplications'),
    path('application/<int:id>', views.getApplicationDetails, name='getApplicationDetails'),
    path('increment/<int:id>', views.increment, name='increment'),
    path('decrement/<int:id>', views.decrement, name='decrement'),
    # path('editentry/<int:id>', views.editEntry, name='editentry'),
    path('editcompany/<int:id>', views.editCompany, name='editcompany'),
    path('editrole/<int:id>', views.editRole, name='editrole'),
    path('editdate/<int:id>', views.editDate, name='editdate'),
    path('editreq/<int:id>', views.editReq, name='editreq'),
    path('editrejected/<int:id>', views.editRejected, name='editrejected'),
    path('editrecruiter/<int:id>', views.editRecruiter, name='editrecruiter'),
    path('editrecruiteremail/<int:id>', views.editRecruiterEmail, name='editrecruiteremail'),
    path('editreferral/<int:id>', views.editReferral, name='editreferral'),
    path('editreferralemail/<int:id>', views.editReferralEmail, name='editreferralemail'),
    path('deleteapplication/<int:id>', views.deleteApplication, name='deleteapplication'),
    # path('search/', views.search, name='search_url'),
]