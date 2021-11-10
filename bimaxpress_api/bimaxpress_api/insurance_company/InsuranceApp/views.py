from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from InsuranceApp.models import Patient,DoctorandDiagnosisDetails,Admission_Details
from InsuranceApp.serializers import PatientSerializer,DoctorSerializer,AdmissionSerializer
# Create your views here.

@csrf_exempt
def PatientApi(request,id=0):
    if request.method=='GET':
        patients=Patient.objects.all()
        patients_serializer=PatientSerializer(patients,many=True)
        return JsonResponse(patients_serializer.data,safe=False)
    elif request.method=='POST':
        patient_data=JSONParser().parse(request)
        patients_serializer=PatientSerializer(data=patient_data)
        print(patients_serializer)
        if patients_serializer.is_valid():
            patients_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        patient_data=JSONParser().parse(request)
        patient=Patient.objects.get(id=id)
        patients_serializer=PatientSerializer(patient,data=patient_data)
        if patients_serializer.is_valid():
            patients_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        patient=Patient.objects.get(id=id)
        patient.delete()
        return JsonResponse("Delete Successfully",safe=False)

@csrf_exempt
def DoctorApi(request,id=0):
    if request.method=='GET':
        doctors=DoctorandDiagnosisDetails.objects.all()
        doctors_serializer=DoctorSerializer(doctors,many=True)
        return JsonResponse(doctors_serializer.data,safe=False)
    elif request.method=='POST':
        doctor_data=JSONParser().parse(request)
        doctors_serializer=DoctorSerializer(data=doctor_data)
        print(doctors_serializer.is_valid())
        if doctors_serializer.is_valid():
            doctors_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        doctor_data=JSONParser().parse(request)
        doctor=DoctorandDiagnosisDetails.objects.get(id=id)
        doctors_serializer=DoctorSerializer(doctor,data=doctor_data)
        if doctors_serializer.is_valid():
            doctors_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        doctor=DoctorandDiagnosisDetails.objects.get(id=id)
        doctor.delete()
        return JsonResponse("Delete Successfully",safe=False)

@csrf_exempt
def AdmissionApi(request,id=0):
    if request.method=='GET':
        admissions=Admission_Details.objects.all()
        admission_serializer=AdmissionSerializer(admissions,many=True)
        return JsonResponse(admission_serializer.data,safe=False)
    elif request.method=='POST':
        admission_data=JSONParser().parse(request)
        admission_serializer=AdmissionSerializer(data=admission_data)
        if admission_serializer.is_valid():
            admission_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        admission_data=JSONParser().parse(request)
        admission=Admission_Details.objects.get(id=id)
        admission_serializer=AdmissionSerializer(admission,data=admission_data)
        if admission_serializer.is_valid():
            admission_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        admission=Admission_Details.objects.get(id=id)
        admission.delete()
        return JsonResponse("Delete Successfully",safe=False)