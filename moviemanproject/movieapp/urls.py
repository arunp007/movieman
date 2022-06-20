from django.urls import path
from.import views

urlpatterns = [
    path('movie',views.movie, name = 'home'),
    path('ninteenseventeen',views.ninteenseventeen, name='ninteenseventeen'),
    path('gandhi', views.gandhi, name='gandhi'),
    path('gladiator', views.gladiator, name='gladiator'),
    path('hacksawridge', views.hacksawridge, name='hacksawridge'),
    path('inception', views.inception, name='inception'),
    path('interstellar', views.interstellar, name='interstellar'),
    path('joker', views.joker, name='joker'),
    path('logan', views.logan, name='logan'),
    path('memento', views.memento, name='memento'),
    path('revenant', views.revenant, name='revenant'),
    path('sanandreas', views.sanandreas, name='sanandreas'),
    path('seven', views.seven, name='seven'),
    path('thedarkknight', views.thedarkknight, name='thedarkknight'),
    path('thegodfather', views.thegodfather, name='thegodfather'),
    path('thepursuitofhappyness', views.thepursuitofhappyness, name='thepursuitofhappyness')
]