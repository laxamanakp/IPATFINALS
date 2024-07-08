from django.db import models

# Create your models here.
class Item(models.Model):
    #2. SURNAME FIRST NAMENAME EXTENSION (JR, SR) MIDDLE NAME 
    last_name = models.CharField(max_length=100)
    first_name = models.CharField(max_length=100)
    name_ext = models.CharField(max_length=10, blank=True, null=True)
    middle_name = models.CharField(max_length=100, blank=True, null=True)
    #3. DATE OF BIRTH (mm/dd/yyyy)
    date_of_birth = models.DateField(blank=True, null=True)
    #4. PLACE OF BIRTH
    place_of_birth = models.CharField(max_length=100, blank=True, null=True) 
    #5 SEX
    SEX_CHOICES = [
        ('Male', 'Male'),
        ('Female', 'Female'),
    ]
    sex = models.CharField(max_length=6, choices=SEX_CHOICES, blank=True, null=True)
    #6. CIVIL STATUS
    CIVIL_STATUS_CHOICES = [
        ('SINGLE', 'Single'),
        ('MARRIED', 'Married'),
        ('SEPARATED','Separated'),
        ('DIVORCED', 'Divorced'),
        ('WIDOWED', 'Widowed'),
    ]
    civil_status = models.CharField(max_length=10, choices=CIVIL_STATUS_CHOICES, blank=True, null=True)
    #7. HEIGHT (m)
    height_m = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    #8. WEIGHT (kg)
    weight_kg = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    #BLOOD TYPE
    BLOOD_TYPE_CHOICES = [
        ('A_POSITIVE', 'A+'),
        ('A_NEGATIVE', 'A-'),
        ('B_POSITIVE', 'B+'),
        ('B_NEGATIVE', 'B-'),
        ('O_POSITIVE', 'O+'),
        ('O_NEGATIVE', 'O-'),
        ('AB_POSITIVE', 'AB+'),
        ('AB_NEGATIVE', 'AB-'),
        ('UNKNOWN', 'Unknown'),
    ]
    blood_type = models.CharField(max_length=11, choices=BLOOD_TYPE_CHOICES, blank=True, null=True)
    #10. GSIS ID NO.
    gsis_no = models.CharField(max_length=20, blank=True, null=True)
    #11. PAG-IBIG ID NO.
    pagibig_no = models.CharField(max_length=20, blank=True, null=True)
    #12. PHILHEALTH NO.
    philhealth_no = models.CharField(max_length=20, blank=True, null=True)
    #13. SSS NO.
    sss_no = models.CharField(max_length=20, blank=True, null=True)
    #14. TIN NO.
    tin_no = models.CharField(max_length=20, blank=True, null=True)
    #15. AGENCY EMPLOYEE NO.
    agency_em = models.CharField(max_length=100, blank=True, null=True)
    #16. CITIZENSHIPIf holder of dual citizenship,please indicate the details
    citizenship = models.CharField(max_length=50, blank=True, null=True)  
    #17. RESIDENTIAL    ADDRESS
    residential_house_no = models.CharField(max_length=10, blank=True, null=True)
    residential_street = models.CharField(max_length=100, blank=True, null=True)
    residential_subd = models.CharField(max_length=100, blank=True, null=True)
    residential_brgy = models.CharField(max_length=100, blank=True, null=True)
    residential_city = models.CharField(max_length=100, blank=True, null=True)
    residential_province = models.CharField(max_length=100, blank=True, null=True)
    residential_zipcode = models.CharField(max_length=10, blank=True, null=True)

    #18. PERMANENT    ADDRESS
    permanent_house_no = models.CharField(max_length=10, blank=True, null=True)
    permanent_street = models.CharField(max_length=100, blank=True, null=True)
    permanent_subd = models.CharField(max_length=100, blank=True, null=True)
    permanent_brgy = models.CharField(max_length=100, blank=True, null=True)
    permanent_city = models.CharField(max_length=100, blank=True, null=True)
    permanent_province = models.CharField(max_length=100, blank=True, null=True)
    permanent_zipcode = models.CharField(max_length=10, blank=True, null=True)

    #19. TELEPHONE NO
    telephone = models.CharField(max_length=20, blank=True, null=True)

    #20. MOBILE NO
    mobile_number = models.CharField(max_length=20, blank=True, null=True)

    #21. E-MAIL ADDRESS (if any)
    email = models.EmailField(blank=True, null=True)

    # FAMILY BACKGROUND 22
    spouse_surname = models.CharField(max_length=100, blank=True, null=True)
    spouse_first_name = models.CharField(max_length=100, blank=True, null=True)
    spouse_middle_name = models.CharField(max_length=100, blank=True, null=True)
    spouse_name_ext = models.CharField(max_length=10, blank=True, null=True)
    spouse_occupation = models.CharField(max_length=100, blank=True, null=True)
    spouse_employer = models.CharField(max_length=100, blank=True, null=True)
    spouse_business_address = models.CharField(max_length=200, blank=True, null=True)
    spouse_telephone = models.CharField(max_length=20, blank=True, null=True)

    #23. NAME of CHILDREN (Write full name and list all)	
    children1_name = models.CharField(max_length=100, blank=True, null=True)
    children1_BDAY = models.DateField(blank=True, null=True)

    children2_name = models.CharField(max_length=100, blank=True, null=True)
    children2_BDAY = models.DateField(blank=True, null=True)

    children3_name = models.CharField(max_length=100, blank=True, null=True)
    children3_BDAY = models.DateField(blank=True, null=True)

    children4_name = models.CharField(max_length=100, blank=True, null=True)
    children4_BDAY = models.DateField(blank=True, null=True)

    children5_name = models.CharField(max_length=100, blank=True, null=True)
    children5_BDAY = models.DateField(blank=True, null=True)

    children6_name = models.CharField(max_length=100, blank=True, null=True)
    children6_BDAY = models.DateField(blank=True, null=True)

    children7_name = models.CharField(max_length=100, blank=True, null=True)
    children7_BDAY = models.DateField(blank=True, null=True)

    children8_name = models.CharField(max_length=100, blank=True, null=True)
    children8_BDAY = models.DateField(blank=True, null=True)

    children9_name = models.CharField(max_length=100, blank=True, null=True)
    children9_BDAY = models.DateField(blank=True, null=True)

    children10_name = models.CharField(max_length=100, blank=True, null=True)
    children10_BDAY = models.DateField(blank=True, null=True)

    children11_name = models.CharField(max_length=100, blank=True, null=True)
    children11_BDAY = models.DateField(blank=True, null=True)

    children12_name = models.CharField(max_length=100, blank=True, null=True)
    children12_BDAY = models.DateField(blank=True, null=True)

    #24. FATHER'S SURNAME, FIRST AND MIDDLE AND EXT
    father_surname = models.CharField(max_length=100, blank=True, null=True)
    father_first_name = models.CharField(max_length=100, blank=True, null=True)
    father_middle_name = models.CharField(max_length=100, blank=True, null=True)
    father_name_ext = models.CharField(max_length=10, blank=True, null=True)

    #25. MOTHER'S MAIDEN NAME, IRST AND MIDDLE AND EXT
    mother_surname = models.CharField(max_length=100, blank=True, null=True)
    mother_first_name = models.CharField(max_length=100, blank=True, null=True)
    mother_middle_name = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.first_name