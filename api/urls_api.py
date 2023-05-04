from django.urls import path
from . import views

urlpatterns = [
    path('', views.Home.as_view()),
    path('stocks', views.Stocks.as_view()),
    path('tarefa', views.TarefaView.as_view()),
]
