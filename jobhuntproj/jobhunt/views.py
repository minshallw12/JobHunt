from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view
from .models import * 
import json

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
    
@api_view(['GET'])
def getApplicationDetails(request, id):
    print(request, 'getApplicationDetails')
    try:
        application = Jobs.objects.get(id = id)
        print(application)
        json_data = json.dumps(application, cls=CustomEncoder)
        print(json_data, 'json_data')
        return JsonResponse({'data': json_data, 'id':id})
    except Exception as e:
        print(e)
        return JsonResponse({'data': None})
    
    # This function serializes the data to return an object
class CustomEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Jobs):
            return {
                "company": obj.company, 
                "role": obj.role, 
                "date_applied": obj.date_applied, 
                "followed_up": obj.followed_up,
                "rejected": obj.rejected,
                "req_number": obj.req_number,
                "recruiter": obj.recruiter,
                "recruiter_email": obj.recruiter_email,
                "referral": obj.referral,
                "referral_email": obj.referral_email,
                "user": obj.user
            }
        elif isinstance(obj,Interviews):
            return {
                "job": obj.job,
                "offer": obj.offer,
                "notes": obj.notes,
            }
        return super().default(obj)
