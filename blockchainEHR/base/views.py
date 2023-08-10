from django.shortcuts import render

# Create your views here.

def landing_page(request):
    return render(request, 'base/landing_page.html')

def loginPage(request):
    return render(request, 'base/login_index.html')

def signup(request):
    return render(request, 'base/login_signup.html')

def user_home(request):
    return render(request, 'base/user_index.html')

def user_profile(request):
    return render(request, 'base/user_profile.html')