from django.db import models
from datetime import datetime
from rest_framework import serializers

# Create your models here.

class Autor(models.Model):
	id = models.BigAutoField(primary_key=True)
	nome = models.CharField(max_length=100, default='Sem Nome')
	def __str__(self):
		return f'{self.id} | {self.nome}'

class Tarefa(models.Model):
	class PrioridadeEnum(models.IntegerChoices):
		ALTA = 1
		NORMAL = 2
		BAIXA = 3
	
	class StatusEnum(models.IntegerChoices):
		A_FAZER = 1
		FAZENDO = 2
		FEITO = 3
		CANCELADO = 4

	id = models.BigAutoField(primary_key=True)
	nome = models.CharField(max_length=100, default='Tarefa Sem Nome')
	descr = models.CharField(max_length=500, default='')
	status = models.IntegerField(choices=StatusEnum.choices, default=StatusEnum.A_FAZER)
	data_finalizacao = models.DateField(default=datetime.now)
	data_criacao = models.DateTimeField(auto_now_add=True)
	prioridade = models.IntegerField(choices=PrioridadeEnum.choices, default=PrioridadeEnum.NORMAL)
	autor = models.ForeignKey(Autor, on_delete=models.CASCADE)
	
class TarefaSerializer(serializers.ModelSerializer):
	class Meta:
		model = Tarefa
		fields = '__all__'
