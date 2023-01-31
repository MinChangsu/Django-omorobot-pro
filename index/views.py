import json
from time import timezone
from django.http import JsonResponse
from django.contrib import auth
from django.contrib.auth import authenticate
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt

from .models import Info


# Create your views here.


def index(request):
    return render(
        request, "index/index.html",

    )


def result(request):
    info = Info.objects.order_by("-pk")
    bat = Info.objects.exclude(bat=None).count()
    color = Info.objects.exclude(color_r=None).count()
    rpm = Info.objects.exclude(encoder_l=None).count()
    return render(
        request, "index/result2.html",
        {"info": info,
         "bat_cnt": bat,
         "color_cnt": color,
         "rpm_cnt": rpm,
         }
    )


def edit(request):
    info = Info.objects.order_by("-pk")
    bat = Info.objects.exclude(bat=None).count()
    color = Info.objects.exclude(color_r=None).count()
    rpm = Info.objects.exclude(encoder_l=None).count()
    if request.user.is_authenticated:
        return render(
            request, "index/edit2.html",
            {"info": info, }
        )
    else:
        return render(request,
                      "index/result2.html",
                      {"info": info,
                       "e": "로그인하세요",
                       "bat_cnt": bat,
                       "color_cnt": color,
                       "rpm_cnt": rpm,
                       }
                      )


def insert(request):
    return render(request, "insert/write5.html")


def delete(request, pk):
    delete_info = Info.objects.get(pk=pk)
    delete_info.delete()
    info = Info.objects.all()
    return render(
        request, "index/edit.html",
        {"info": info, }
    )


def deletes(request):
    if request.method == "POST":
        if request.POST.get("check"):
            for i in request.POST.getlist("check"):
                delete_info = Info.objects.get(pk=i)
                delete_info.delete()

        info = Info.objects.order_by("-pk")
        bat = Info.objects.exclude(bat=None).count()
        color = Info.objects.exclude(color_r=None).count()
        rpm = Info.objects.exclude(encoder_l=None).count()

        return redirect("/result/",
                        {"info": info,
                         "bat_cnt": bat,
                         "color_cnt": color,
                         "rpm_cnt": rpm,
                         })
    else:
        info = Info.objects.order_by("-pk")
        bat = Info.objects.exclude(bat=None).count()
        color = Info.objects.exclude(color_r=None).count()
        rpm = Info.objects.exclude(encoder_l=None).count()
        return render(
            request, "/result/",
            {"info": info,
             "bat_cnt": bat,
             "color_cnt": color,
             "rpm_cnt": rpm, }
        )


def login(request):
    if request.method == 'POST':
        username = request.POST['id']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return redirect('home')
        else:
            return render(request, "index/index.html", {'error': "username or password is incorrect."})
    else:
        return redirect('/home/')

#
# @csrf_exempt
# def login(request):
#     if request.method == 'POST':
#         data = json.loads(request.body)
#         username = data['username']
#         password = data['password']
#         user = authenticate(request, username=username, password=password)
#         if user is not None:
#             auth.login(request, user)
#             return render(request, "index/index.html")
#         else:
#             context = {
#                 'error': "username or password is incorrect.",
#             }
#             return JsonResponse(context)
#
#     else:
#         return redirect('/home/')


def logout(request):
    auth.logout(request)
    return redirect('..')


def signup(request):
    if request.method == 'POST':
        pass
    else:
        return render(request, "index/signup.html")


@csrf_exempt
def save(request, num):
    if request.method == 'POST':
        if num == 1:
            data = json.loads(request.body)
            info = Info()
            info.bat = data
            info.save()

            context = {
                'result': data,
            }
            return JsonResponse(context)
        elif num == 2:
            data = json.loads(request.body)
            info = Info()
            info.color_r = data["r"]
            info.color_g = data["g"]
            info.color_b = data["b"]
            info.save()

            context = {
                'result': data,
            }
            return JsonResponse(context)
        elif num == 3:
            data = json.loads(request.body)
            info = Info()
            info.encoder_l = data["encoder_l"]
            info.encoder_r = data["encoder_r"]
            info.save()

            context = {
                'result': data,
            }
            return JsonResponse(context)


def introduce(request):
    return render(
        request, "index/introduce2.html",

    )


def details(request, num):
    if num == 0:
        return render(
            request, "detail/detail.html"
        )
    elif num == 1:
        return render(
            request, "detail/details1.html"
        )
    elif num == 2:
        return render(
            request, "detail/details2.html"
        )
    elif num == 3:
        return render(
            request, "detail/details3.html"
        )
    elif num == 4:
        return render(
            request, "detail/details4.html"
        )
    elif num == 5:
        return render(
            request, "detail/details5.html"
        )
    elif num == 6:
        return render(
            request, "detail/details6.html"
        )
