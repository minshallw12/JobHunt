from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view
from .models import * 
import json
from django.shortcuts import get_object_or_404

# Create your views here.
def index(request):
    return HttpResponse(open('static/index.html'))

# Create
@api_view(['POST'])
def addEntry(request):
    company = request.data['company']
    role = request.data['role']
    date_applied = request.data['date_applied']
    followed_up = 0
    rejected = False
    req_number = request.data['req_number']
    recruiter = request.data['recruiter']
    recruiter_email = request.data['recruiter_email']
    referral = request.data['referral']
    referral_email = request.data['referral_email']
    portal_url = request.data['portal_url']
    # user_id = request.data['user_id']

    try:
        # create a new application entry
        new_application = Jobs.objects.create(
            company = company,
            role = role,
            date_applied = date_applied,
            followed_up = followed_up,
            rejected = rejected,
            req_number = req_number,
            recruiter = recruiter,
            recruiter_email = recruiter_email,
            referral = referral,
            referral_email = referral_email,
            portal_url = portal_url
            # user_id = user_id
            )
        new_application.save()
        return JsonResponse({"success":True})
    except Exception as e:
        print(e)
        return JsonResponse({"success":False})

# Read
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
                "portal_url": obj.portal_url,
                "user": obj.user
            }
        elif isinstance(obj,Interviews):
            return {
                "job": obj.job,
                "offer": obj.offer,
                "notes": obj.notes,
            }
        return super().default(obj)

# Update
# Consolidate all of these PUT request views using OOP?
@api_view(['PUT'])
def increment(request, id):
    my_job = get_object_or_404(Jobs, id=id)
        
    if request.method == "PUT":
        my_job.followed_up += 1
        my_job.save()
        return JsonResponse({'success': True})
    
    return JsonResponse({'success': False})

@api_view(['PUT'])
def decrement(request, id):
    my_job = get_object_or_404(Jobs, id=id)
        
    if request.method == "PUT":
        my_job.followed_up -= 1
        my_job.save()
        return JsonResponse({'success': True})
    
    return JsonResponse({'success': False})

@api_view(['PUT'])
def editJob(request, id, field):

    my_job = get_object_or_404(Jobs, id=id)
    if request.method == "PUT":
        match field:
            case "company":
                my_job.company = request.data["company"]
                my_job.save()
            case "role":
                my_job.role = request.data["role"]
                my_job.save()
            case "date_applied":
                my_job.date_applied = request.data["date_applied"]
                my_job.save()
            case "req_number":
                my_job.req_number = request.data["req_number"]
                my_job.save()
            case "rejected":
                my_job.rejected = request.data["rejected"]
                my_job.save()
            case "recruiter":
                my_job.recruiter = request.data["recruiter"]
                my_job.save()
            case "recruiter_email":
                my_job.recruiter_email = request.data["recruiter_email"]
                my_job.save()
            case "referral":
                my_job.referral = request.data["referral"]
                my_job.save()
            case "referral_email":
                my_job.referral_email = request.data["referral_email"]
                my_job.save()
            case "portal_url":
                my_job.portal_url = request.data["portal_url"]
                my_job.save()
        return JsonResponse({'success': True})
    return JsonResponse({'success': False})


@api_view(['PUT'])
def editCompany(request, id):
    my_job = get_object_or_404(Jobs, id=id)

    if request.method == "PUT":
        my_job.company = request.data['company']
        my_job.save()
        return JsonResponse({'success': True})
    return JsonResponse({'success': False})
@api_view(['PUT'])
def editRole(request, id):
    my_job = get_object_or_404(Jobs, id=id)

    if request.method == "PUT":
        my_job.role = request.data['role']
        my_job.save()
        return JsonResponse({'success': True})
    return JsonResponse({'success': False})
@api_view(['PUT'])
def editDate(request, id):
    my_job = get_object_or_404(Jobs, id=id)

    if request.method == "PUT":
        my_job.date_applied = request.data['date_applied']
        my_job.save()
        return JsonResponse({'success': True})
    return JsonResponse({'success': False})
@api_view(['PUT'])
def editReq(request, id):
    my_job = get_object_or_404(Jobs, id=id)

    if request.method == "PUT":
        my_job.req_number = request.data['req_number']
        my_job.save()
        return JsonResponse({'success': True})
    return JsonResponse({'success': False})

@api_view(['PUT'])
def editRejected(request, id):
    my_job = get_object_or_404(Jobs, id=id)

    if request.method == "PUT":
        my_job.rejected = request.data['rejected']
        my_job.save()
        return JsonResponse({'success': True})
    return JsonResponse({'success': False})
@api_view(['PUT'])
def editRecruiter(request, id):
    my_job = get_object_or_404(Jobs, id=id)

    if request.method == "PUT":
        my_job.recruiter = request.data['recruiter']
        my_job.save()
        return JsonResponse({'success': True})
    return JsonResponse({'success': False})
@api_view(['PUT'])
def editRecruiterEmail(request, id):
    my_job = get_object_or_404(Jobs, id=id)

    if request.method == "PUT":
        my_job.recruiter_email = request.data['recruiter_email']
        my_job.save()
        return JsonResponse({'success': True})
    return JsonResponse({'success': False})
@api_view(['PUT'])
def editReferral(request, id):
    my_job = get_object_or_404(Jobs, id=id)

    if request.method == "PUT":
        my_job.referral = request.data['referral']
        my_job.save()
        return JsonResponse({'success': True})
    return JsonResponse({'success': False})
@api_view(['PUT'])
def editReferralEmail(request, id):
    my_job = get_object_or_404(Jobs, id=id)

    if request.method == "PUT":
        my_job.referral_email = request.data['referral_email']
        my_job.save()
        return JsonResponse({'success': True})
    return JsonResponse({'success': False})

# Delete
@api_view(['DELETE'])
def deleteApplication(request, id):
    try:
        Jobs.objects.filter(id=id).delete()
        return JsonResponse({'success':True})
    except Exception as e:
        print(e)
        return JsonResponse({'sucess':False})