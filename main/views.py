from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from main.models import *
import json


def index(request):
    return render(request, 'main/index.html', None)

# APIs
@csrf_exempt
def instruction(request):
    if request.method == 'GET':
        return HttpResponse('')
    elif request.method == 'POST':
        data = json.loads(request.body)
        Instruction.objects.all().delete()
        for row in data:
            new_row = Instruction.objects.create(content=row)
        return JsonResponse({'status': 'success'})

