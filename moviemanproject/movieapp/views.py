from django.shortcuts import render
from django.http import HttpResponse

def movie(request):
    return render(request, 'movieman.html')

def ninteenseventeen(request):
    return render(request, '1917.html')

def gandhi(request):
    return render(request, 'gandhi.html')

def gladiator(request):
    return render(request, 'gladiator.html')

def hacksawridge(request):
    return render(request,'hacksawridge.html')

def inception(request):
    return render(request, 'inception.html')

def interstellar(request):
    return render(request, 'interstellar.html')

def joker(request):
    return render(request, 'joker.html')

def logan(request):
    return render(request, 'logan.html')

def memento(request):
    return render(request, 'memento.html')

def revenant(request):
    return render(request, 'revenant.html')

def sanandreas(request):
    return render(request, 'sanandreas.html')

def seven(request):
    return render(request, 'seven.html')

def thedarkknight(request):
    return render(request, 'thedarkknight.html')

def thegodfather(request):
    return render(request, 'thegodfather.html')

def thepursuitofhappyness(request):
    return render(request, 'thepursuitofhappyness.html')

