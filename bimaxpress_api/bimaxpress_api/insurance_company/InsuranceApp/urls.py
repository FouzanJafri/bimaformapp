from django.conf.urls import url
from InsuranceApp import views

urlpatterns=[
    url(r'^patient$',views.PatientApi),
    url(r'^patient/([0-9]+)$',views.PatientApi),


    url(r'^doctor$',views.DoctorApi),
    url(r'^doctor/([0-9]+)$',views.DoctorApi),

    url(r'^admission$',views.AdmissionApi),
    url(r'^admission/([0-9]+)$',views.AdmissionApi)
]