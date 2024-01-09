from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class App_User(AbstractUser):
    email = models.EmailField(blank=False, null=False, unique=True, max_length=254)
    name = models.CharField(null = False, blank= False, max_length=50)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return f"{self.name} | {self.email}"
    
class Jobs (models.Model):
    company = models.CharField(blank=False, null=False, max_length=254)
    role = models.CharField(blank=False, null=False, max_length=254)
    date_applied = models.CharField(blank=False, null =False, max_length=254)
    followed_up = models.BigIntegerField(default=0)
    rejected = models.BooleanField(default=False)
    req_number = models.CharField(max_length=254, blank=True, null=True)
    recruiter = models.CharField(max_length=254, blank=True, null=True)
    recruiter_email = models.EmailField(max_length=254, blank=True, null=True)
    referral = models.CharField(max_length=254, blank=True, null=True)
    referral_email = models.EmailField(max_length=254, blank=True, null=True)
    portal_url = models.URLField(null=True, blank=True)
    user = models.ForeignKey(App_User, on_delete=models.CASCADE, null=True)

    def __str__(self) -> str:
        return f"{self.company} | {self.role} | Dunder"

class Interviews (models.Model):
    company = models.CharField(blank=False, null=False, default='unknown', max_length=254)
    role = models.CharField(blank=True, null=False, default='Unknown', max_length=254)
    recruiter = models.CharField(max_length=254, blank=True, null=True)
    recruiter_email = models.EmailField(max_length=254, blank=True, null=True)
    round = models.IntegerField(default=1)
    offer = models.BooleanField(default=False)
    notes = models.TextField(null=True, blank=True)

    def __str__(self) -> str:
        return f"{self.role} | {self.company} | Dunder"