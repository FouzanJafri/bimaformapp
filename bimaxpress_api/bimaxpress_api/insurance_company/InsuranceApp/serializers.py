from django.db.models import fields
from rest_framework import serializers
from InsuranceApp.models import Patient,DoctorandDiagnosisDetails,Admission_Details

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model=Patient
        #fields=('patient_details_name','patient_details_gender')
        #fields='__all__'
        fields=('patient_details_name','patient_details_gender','patient_details_ageYear','patient_details_ageMonth','patient_details_date','patient_details_contact_number','patient_details_numberOfAttendingRelative','patient_details_insuredMemberIdCardNo','patient_details_policyNumberorCorporateName','patient_details_EmployeeId','patient_details_HealthInsurance','patient_details_familyPhysician','patient_details_currentAddress','patient_details_currentCity','patient_details_occupation')


class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model=DoctorandDiagnosisDetails
        #fields='__all__'
        fields=('doctor_email','Contact_number','doctor_natureOfLiness','doctor_releventClinicFindings','doctor_durationOfPresentAliment','doctor_dateOfFirstConsultation','doctor_PastHistoryOfPresentAlignment','doctor_provisionalDiagnosis','doctor_icdCode','Route_Of_Drug_Administration','If_Surgical_Name_of_Surgery','ICD_Code_10_PCS','doctor_ifOtherTratmentProvideDetails','doctor_howDidInjuryOccure','doctor_inCaseOfAccident','doctor_reportedToPolice','doctor_injuryorDiseaseCausedDueToSubstance','doctor_testAlcohol','doctor_expectedDateOfDelivery')



class AdmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model=Admission_Details
        #fields='__all__'
        fields=('admission_date','admission_time','admission_expectedNoOfDays')