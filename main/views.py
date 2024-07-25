from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from main.models import *
import json

def getBCcolor():
    record = BcColor.objects.all().first()
    if record is None:
        return 'rgb(254, 222, 117)'
    else:
        return record.color

def index(request):
    bccolor = getBCcolor()

    inss = Instruction.objects.all()
    return render(request, 'main/index.html', {
        'bccolor': bccolor,
        'instructions': inss
    })

def newuser(request):
    bccolor = getBCcolor()
    levelrange = list(range(4,16))
    return render(request, 'main/newuser.html', {
        'bccolor': bccolor,
        'levelrange': levelrange
    })

@csrf_exempt
def classschedule(request):
    if request.method == 'GET':
        pass
    elif request.method == 'POST':
        print(request.POST.get('new_value'))
    bccolor = getBCcolor()
    return render(request, 'main/classschedule.html', {
        'bccolor': bccolor
    })


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
    
@csrf_exempt
def changebccolor(request):
    if request.method == 'GET':
        return HttpResponse('')
    elif request.method == 'POST':
        data = json.loads(request.body)
        BcColor.objects.all().delete()
        new_row = BcColor.objects.create(color=data)
        return JsonResponse({'status': 'success'})

