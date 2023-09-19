from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view
from .models import * 

# Create your views here.
def index(request):
    return HttpResponse(open('static/index.html'))

@api_view(['POST'])
def addEntry(request):
    company = request.data['company']
    role = request.data['role']
    date_applied = request.data['date_applied']
    # followed_up = request.data['followed_up']
    # rejected = request.data['rejected']
    req_number = request.data['req_number']
    recruiter = request.data['recruiter']
    recruiter_email = request.data['recruiter_email']
    referral = request.data['referral']
    referral_email = request.data['referral_email']
    # user_id = request.data['user_id']

    try:
        # create a new application entry
        new_application = Jobs.objects.create(
            company = company,
            role = role,
            date_applied = date_applied,
            # followed_up = followed_up,
            # rejected = rejected,
            req_number = req_number,
            recruiter = recruiter,
            recruiter_email = recruiter_email,
            referral = referral,
            referral_email = referral_email,
            # user_id = user_id
            )
        new_application.save()
        return JsonResponse({"success":True})
    except Exception as e:
        print(e)
        return JsonResponse({"success":False})

@api_view(['GET'])
def getApplications(request):
    print(request, 'getApplications')
    try:
        applications = list(Jobs.objects.all().values())
        return JsonResponse({'applications':applications})
    except Exception as e:
        print(e)
        return JsonResponse({'applications':[]})
