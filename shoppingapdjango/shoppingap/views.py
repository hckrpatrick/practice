from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
import json

from django.shortcuts import render
from django.http import HttpResponse, HttpRequest
from django.contrib.auth.models import User


def home(request):
    print("sdasjokd;sa")
    return True

@api_view(['POST'])
def login(request):
    body_unicode = request.body.decode('utf8').replace("'", '"')
    body = json.loads(body_unicode)
    username = body['username']
    password = body['password']
    user = authenticate(request, username=username, password=password)
    user = User.objects.get(username=user.username)
    # print(type(user[1   ]))
    #token = Token.objects.create(user=request.user)
    #print(token.key)

    if user is not None:
        #login(request, user)
        print("hiiiiii")
        ret = Response({True})
    else:
        print("noooo")
        ret = Response({False})

    return ret    


@api_view(['GET'])
def checklogin(request):\
    # print(request.COOKIES)
    # print(request.session)
    if request.user.is_authenticated:
        return HttpResponse ("<h1> True <h1>")
    else:
        return HttpResponse ("<h1> false <h1>")