from django.shortcuts import render
from django.http import HttpResponse

def movie(request):
    return render(request, 'movieman.html')
