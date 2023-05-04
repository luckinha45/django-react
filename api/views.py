from django.shortcuts import render
from django.http import HttpRequest, HttpResponse
from django.core import serializers
from yahooquery import Ticker
import pandas as pd
from django.views import View
from rest_framework import generics
from . import models

# Create your views here.
class Home(View):
	def get(self, request:HttpRequest) -> HttpResponse:
		return HttpResponse('<center><h1> Bem vindo! </h1> </center>')
	

class Stocks(View):
	def get(self, request:HttpRequest) -> HttpResponse:
		df = pd.DataFrame.from_dict(Ticker(['INTC', 'AMZN', 'TOP']).summary_detail)
		return HttpResponse(df.to_json(), content_type='text/json-comment-filtered')
	
class TarefaView(generics.ListCreateAPIView):
	queryset = models.Tarefa.objects.all()
	serializer_class = models.TarefaSerializer