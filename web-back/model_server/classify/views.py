from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from django.urls import reverse
import json
from datetime import datetime
from django.views.decorators.csrf import csrf_exempt


# Create your views here.
@csrf_exempt
def getText(request):
  resposeData = {}
  if request.method == "POST":
    data = json.loads(request.body)
    f = open("text.txt", "w")
    f.write(data['text'])
    f.close()


    resposeData = {
      "status": 200,
      "data": {"message": "Text classify", "text" : "Done"},
      "errors": {},
    }
    return JsonResponse(resposeData)
  

@csrf_exempt
def result(request):
  if request.method == "GET":

    f = open("text.txt", "r")
    data = f.read()
    f.close()
    return JsonResponse({
      "status": 200,
      "data": data,
    })