from django.db import models
from django.db.models.enums import Choices

# Create your models here.
Sample_Choices=(
    ('Medical Managment','Medical Managment'),
    ('Surgical Managment','Surgical Managment'),
    ('Intensive Care','Intensive Care'),
    ('Investigation','Investigation'),
    ('Non Allopathic Treatment','Non Allopathic Treatment')
)
Maternity_Choices=(
    ('1','G'),
    ('2','P'),
    ('3','L'),
    ('4','A')
)

SET_OF_CHOICES = (
        ('choice1', 'Emergency'),
        ('choice2', 'Planned'),
        
)

Room_Type=(
    ('ICU','ICU'),
    ('NICU','NICU'),
    ('High Dependency Unit','High Dependency Unit'),
    ('CCU - Cardiac Care Unit','CCU - Cardiac Care Unit'),
    ('Private ICU','Private ICU'),
    ('Private CCU','Private CCU')
)

Month_Year=(
    ('Month','Month'),
    ('Year','Year')
)

class Patient(models.Model):
    patient_details_name=models.CharField(max_length=255)
    patient_details_gender=models.CharField(max_length=255)
    patient_details_ageYear=models.CharField(max_length=20)
    patient_details_ageMonth=models.CharField(max_length=20)
    patient_details_date=models.DateField()
    patient_details_contact_number=models.CharField(max_length=10)
    patient_details_numberOfAttendingRelative=models.CharField(max_length=10)
    patient_details_insuredMemberIdCardNo=models.CharField(max_length=255)
    patient_details_policyNumberorCorporateName=models.CharField(max_length=255)
    patient_details_EmployeeId=models.CharField(max_length=255)
    patient_details_HealthInsurance=models.CharField(max_length=255)
    patient_details_familyPhysician=models.CharField(max_length=255)
    patient_details_currentAddress=models.CharField(max_length=500)
    patient_details_currentCity=models.CharField(max_length=255)
    patient_details_occupation=models.CharField(max_length=255)




class DoctorandDiagnosisDetails(models.Model):
    doctor_email=models.CharField(max_length=255)
    Contact_number=models.CharField(max_length=13)
    doctor_natureOfLiness=models.CharField(max_length=255)
    doctor_releventClinicFindings=models.CharField(max_length=255)
    doctor_durationOfPresentAliment=models.DateTimeField()
    doctor_dateOfFirstConsultation=models.DateField()
    doctor_PastHistoryOfPresentAlignment=models.CharField(max_length=255)
    doctor_provisionalDiagnosis=models.CharField(max_length=255)
    doctor_icdCode=models.CharField(max_length=20)
    doctor_proposedLineOfTreatment=models.CharField(max_length=255,choices=Sample_Choices)
    If_Investigation_Or_Medical_Management_Provide_Details=models.CharField(max_length=255)
    Route_Of_Drug_Administration=models.CharField(max_length=255)
    If_Surgical_Name_of_Surgery=models.CharField(max_length=255)
    ICD_Code_10_PCS=models.CharField(max_length=10)
    doctor_ifOtherTratmentProvideDetails=models.CharField(max_length=255)
    doctor_howDidInjuryOccure=models.CharField(max_length=255)
    doctor_inCaseOfAccident=models.BooleanField()
    doctor_reportedToPolice=models.BooleanField()
    doctor_injuryorDiseaseCausedDueToSubstance=models.BooleanField()
    doctor_testAlcohol=models.BooleanField()
    doctor_inCaseMaternity=models.CharField(choices=Maternity_Choices,max_length=255)
    doctor_expectedDateOfDelivery=models.DateField()


class Admission_Details(models.Model):
    admission_date=models.DateField()
    admission_time=models.TimeField()
    admission_isThisAEmergencyPlannedHospitalization=models.CharField(max_length=255,choices=SET_OF_CHOICES)
    admission_expectedNoOfDays=models.IntegerField()
    admission_daysInICU=models.IntegerField()
    admission_roomType=models.CharField(max_length=255, choices=Room_Type, default='ICU')
    admission_perDayRoomRent=models.IntegerField()
    admission_expectedCostForInvestigation=models.IntegerField()
    admission_icuCharge=models.IntegerField()
    admission_otCharge=models.IntegerField()
    admission_professionalFeesSurgeon=models.IntegerField()
    admission_madicineConsumablesCostOfImplats=models.IntegerField()
    admission_otherHospitalIfAny=models.CharField(max_length=255)
    admission_allIncludePackageCharge=models.IntegerField()
    admission_sumTotalExpected=models.IntegerField()
    admission_mandatoryPastHistoryMonth=models.CharField(max_length=255)
    admission_mandatoryPastHistoryYear=models.CharField(max_length=255)
    admission_heartDiseaseMonth=models.IntegerField(choices=Month_Year)
    admission_heartDiseaseYear=models.IntegerField(choices=Month_Year)
    admission_hypertensionMonth=models.IntegerField(choices=Month_Year)
    admission_hypertensionYear=models.IntegerField(choices=Month_Year)
    admission_HyperlipidemiasMonth=models.IntegerField(choices=Month_Year)
    admission_HyperlipidemiasYear=models.IntegerField(choices=Month_Year)
    admission_osteoarthritisMonth=models.IntegerField(choices=Month_Year)
    admission_osteoarthritisYear=models.IntegerField(choices=Month_Year)
    admission_asthmaOrCOPDOrBronchitisMonth=models.IntegerField(choices=Month_Year)
    admission_asthmaOrCOPDOrBronchitisYear=models.IntegerField(choices=Month_Year)
    admission_cancerMonth=models.IntegerField(choices=Month_Year)
    admission_cancerYear=models.IntegerField(choices=Month_Year)
    admission_alcoholOrDrugAbuseMonth=models.IntegerField(choices=Month_Year)
    admission_alcoholOrDrugAbuseYear=models.IntegerField(choices=Month_Year)
    admission_anyHIVOrSTDOrRelatedAlimentsMonth=models.IntegerField(choices=Month_Year)
    admission_anyHIVOrSTDOrRelatedAlimentsYear=models.IntegerField(choices=Month_Year)
    admission_anyOtherAliments=models.CharField(max_length=255)