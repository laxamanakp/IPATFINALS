import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemForm = ({ item, onSuccess }) => {
const [first_name, setFirst_name] = useState('');
const [middle_name, setMiddle_name] = useState('');
const [last_name, setLast_name] = useState('');
const [address, setAddress] = useState('');
const [email, setEmail] = useState('');
const [employment_status, setEmployment_status] = useState('');
const [name_ext, setName_ext] = useState('');
const [date_of_birth, setDate_of_birth] = useState('');
const [place_of_birth, setPlace_of_birth] = useState('');
const [sex, setSex] = useState('');
const [civil_status, setCivil_status] = useState('');
const [height_m, setHeight_m] = useState('');
const [weight_kg, setWeight_kg] = useState('');
const [blood_type, setBlood_type] = useState('');
const [gsis_no, setGsis_no] = useState('');
const [pagibig_no, setPagibig_no] = useState('');
const [philhealth_no, setPhilhealth_no] = useState('');
const [sss_no, setSss_no] = useState('');
const [tin_no, setTin_no] = useState('');
const [agency_em, setAgency_em] = useState('');
const [citizenship, setCitizenship] = useState('');
const [residential_house_no, setResidential_house_no] = useState('');
const [residential_street, setResidential_street] = useState('');
const [residential_subd, setResidential_subd] = useState('');
const [residential_brgy, setResidential_brgy] = useState('');
const [residential_city, setResidential_city] = useState('');
const [residential_province, setResidential_province] = useState('');
const [residential_zipcode, setResidential_zipcode] = useState('');
const [permanent_house_no, setPermanent_house_no] = useState('');
const [permanent_street, setPermanent_street] = useState('');
const [permanent_subd, setPermanent_subd] = useState('');
const [permanent_brgy, setPermanent_brgy] = useState('');
const [permanent_city, setPermanent_city] = useState('');
const [permanent_province, setPermanent_province] = useState('');
const [permanent_zipcode, setPermanent_zipcode] = useState('');
const [telephone, setTelephone] = useState('');
const [mobile_number, setMobile_number] = useState('');
const [spouse_surname, setSpouse_surname] = useState('');
const [spouse_first_name, setSpouse_first_name] = useState('');
const [spouse_middle_name, setSpouse_middle_name] = useState('');
const [spouse_name_ext, setSpouse_name_ext] = useState('');
const [spouse_occupation, setSpouse_occupation] = useState('');
const [spouse_employer, setSpouse_employer] = useState('');
const [spouse_business_address, setSpouse_business_address] = useState('');
const [spouse_telephone, setSpouse_telephone] = useState('');
const [children1_name, setChildren1_name] = useState('');
const [children1_BDAY, setChildren1_BDAY] = useState('');
const [children2_name, setChildren2_name] = useState('');
const [children2_BDAY, setChildren2_BDAY] = useState('');
const [children3_name, setChildren3_name] = useState('');
const [children3_BDAY, setChildren3_BDAY] = useState('');
const [children4_name, setChildren4_name] = useState('');
const [children4_BDAY, setChildren4_BDAY] = useState('');
const [children5_name, setChildren5_name] = useState('');
const [children5_BDAY, setChildren5_BDAY] = useState('');
const [children6_name, setChildren6_name] = useState('');
const [children6_BDAY, setChildren6_BDAY] = useState('');
const [children7_name, setChildren7_name] = useState('');
const [children7_BDAY, setChildren7_BDAY] = useState('');
const [children8_name, setChildren8_name] = useState('');
const [children8_BDAY, setChildren8_BDAY] = useState('');
const [children9_name, setChildren9_name] = useState('');
const [children9_BDAY, setChildren9_BDAY] = useState('');
const [children10_name, setChildren10_name] = useState('');
const [children10_BDAY, setChildren10_BDAY] = useState('');
const [children11_name, setChildren11_name] = useState('');
const [children11_BDAY, setChildren11_BDAY] = useState('');
const [children12_name, setChildren12_name] = useState('');
const [children12_BDAY, setChildren12_BDAY] = useState('');
const [father_surname, setFather_surname] = useState('');
const [father_first_name, setFather_first_name] = useState('');
const [father_middle_name, setFather_middle_name] = useState('');
const [father_name_ext, setFather_name_ext] = useState('');
const [mother_surname, setMother_surname] = useState('');
const [mother_first_name, setMother_first_name] = useState('');
const [mother_middle_name, setMother_middle_name] = useState('');
    useEffect(() => {
        if (item) {
            setFirst_name(item.first_name);
            setMiddle_name(item.middle_name);
            setLast_name(item.last_name);
            setAddress(item.address);
            setEmail(item.email);
            setEmployment_status(item.employment_status);
            setName_ext(item.name_ext);
            setDate_of_birth(item.date_of_birth);
            setPlace_of_birth(item.place_of_birth);
            setSex(item.sex);
            setCivil_status(item.civil_status);
            setHeight_m(item.height_m);
            setWeight_kg(item.weight_kg);
            setBlood_type(item.blood_type);
            setGsis_no(item.gsis_no);
            setPagibig_no(item.pagibig_no);
            setPhilhealth_no(item.philhealth_no);
            setSss_no(item.sss_no);
            setTin_no(item.tin_no);
            setAgency_em(item.agency_em);
            setCitizenship(item.citizenship);
            setResidential_house_no(item.residential_house_no);
            setResidential_street(item.residential_street);
            setResidential_subd(item.residential_subd);
            setResidential_brgy(item.residential_brgy);
            setResidential_city(item.residential_city);
            setResidential_province(item.residential_province);
            setResidential_zipcode(item.residential_zipcode);
            setPermanent_house_no(item.permanent_house_no);
            setPermanent_street(item.permanent_street);
            setPermanent_subd(item.permanent_subd);
            setPermanent_brgy(item.permanent_brgy);
            setPermanent_city(item.permanent_city);
            setPermanent_province(item.permanent_province);
            setPermanent_zipcode(item.permanent_zipcode);
            setTelephone(item.telephone);
            setMobile_number(item.mobile_number);
            setSpouse_surname(item.spouse_surname);
            setSpouse_first_name(item.spouse_first_name);
            setSpouse_middle_name(item.spouse_middle_name);
            setSpouse_name_ext(item.spouse_name_ext);
            setSpouse_occupation(item.spouse_occupation);
            setSpouse_employer(item.spouse_employer);
            setSpouse_business_address(item.spouse_business_address);
            setSpouse_telephone(item.spouse_telephone);
            setChildren1_name(item.children1_name);
            setChildren1_BDAY(item.children1_BDAY);
            setChildren2_name(item.children2_name);
            setChildren2_BDAY(item.children2_BDAY);
            setChildren3_name(item.children3_name);
            setChildren3_BDAY(item.children3_BDAY);
            setChildren4_name(item.children4_name);
            setChildren4_BDAY(item.children4_BDAY);
            setChildren5_name(item.children5_name);
            setChildren5_BDAY(item.children5_BDAY);
            setChildren6_name(item.children6_name);
            setChildren6_BDAY(item.children6_BDAY);
            setChildren7_name(item.children7_name);
            setChildren7_BDAY(item.children7_BDAY);
            setChildren8_name(item.children8_name);
            setChildren8_BDAY(item.children8_BDAY);
            setChildren9_name(item.children9_name);
            setChildren9_BDAY(item.children9_BDAY);
            setChildren10_name(item.children10_name);
            setChildren10_BDAY(item.children10_BDAY);
            setChildren11_name(item.children11_name);
            setChildren11_BDAY(item.children11_BDAY);
            setChildren12_name(item.children12_name);
            setChildren12_BDAY(item.children12_BDAY);
            setFather_surname(item.father_surname);
            setFather_first_name(item.father_first_name);
            setFather_middle_name(item.father_middle_name);
            setFather_name_ext(item.father_name_ext);
            setMother_surname(item.mother_surname);
            setMother_first_name(item.mother_first_name);
            setMother_middle_name(item.mother_middle_name);
        }
    }, [item]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!last_name || !first_name || !name_ext) {
            alert("Please fill out all required fields.");
            return;
        }
        const data = {
            first_name,
            middle_name,
            last_name,
            address,
            email,
            employment_status,
            name_ext,
            date_of_birth,
            place_of_birth,
            sex,
            civil_status,
            height_m,
            weight_kg,
            blood_type,
            gsis_no,
            pagibig_no,
            philhealth_no,
            sss_no,
            tin_no,
            agency_em,
            citizenship,
            residential_house_no,
            residential_street,
            residential_subd,
            residential_brgy,
            residential_city,
            residential_province,
            residential_zipcode,
            permanent_house_no,
            permanent_street,
            permanent_subd,
            permanent_brgy,
            permanent_city,
            permanent_province,
            permanent_zipcode,
            telephone,
            mobile_number,
            spouse_surname,
            spouse_first_name,
            spouse_middle_name,
            spouse_name_ext,
            spouse_occupation,
            spouse_employer,
            spouse_business_address,
            spouse_telephone,
            children1_name,
            children1_BDAY,
            children2_name,
            children2_BDAY,
            children3_name,
            children3_BDAY,
            children4_name,
            children4_BDAY,
            children5_name,
            children5_BDAY,
            children6_name,
            children6_BDAY,
            children7_name,
            children7_BDAY,
            children8_name,
            children8_BDAY,
            children9_name,
            children9_BDAY,
            children10_name,
            children10_BDAY,
            children11_name,
            children11_BDAY,
            children12_name,
            children12_BDAY,
            father_surname,
            father_first_name,
            father_middle_name,
            father_name_ext,
            mother_surname,
            mother_first_name,
            mother_middle_name
        };
        try {
            if (item) {
                await axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
                } else { 
                await axios.post('http://localhost:8000/api/items/', data);
                }
                onSuccess();
            } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };
    return(
        <form onSubmit={handleSubmit}>
            <h1>Personal Data Sheet Form</h1>
            <div>
                <label>Last Name</label>
                <input type="text" value={last_name} onChange={(e) => setLast_name(e.target.value)} /> 
            </div>
            
            <div>
                <label>First Name</label>
                <input type="text" value={first_name} onChange={(e) => setFirst_name(e.target.value)} />
            </div>

            <div>
                <label>Name Extension</label>
                <input type="text" value={name_ext} onChange={(e) => setName_ext(e.target.value)} />
            </div>
            
            <div>
                <label>Middle Name</label>
                <input type="text" value={middle_name} onChange={(e) => setMiddle_name(e.target.value)} />
            </div>

            <div>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
                <label>Date of Birth</label>
                <input type="date" value={date_of_birth} onChange={(e) => setDate_of_birth(e.target.value)} />
            </div>

            <div>
                <label>Place of Birth</label>
                <input type="text" value={place_of_birth} onChange={(e) => setPlace_of_birth(e.target.value)} />
            </div>

            <div>
                <label>Sex</label>
                <select value={sex} onChange={(e) => setSex(e.target.value)}>
                    <option value="">Select...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>

            <div>
                <label>Civil Status</label>
                <select value={civil_status} onChange={(e) => setCivil_status(e.target.value)}>
                    <option value="">Select...</option>
                    <option value="SINGLE">Single</option>        
                    <option value="MARRIED">Married</option>
                    <option value="SEPARATED">Separated</option>
                    <option value="DIVORCED">Divorced</option>
                    <option value="WIDOWED">Widowed</option>
                </select>
            </div>

            <div>
                <label>Height (m)</label>
                <input type="number" step="0.01" value={height_m} onChange={(e) => setHeight_m(e.target.value)} />
            </div>

            <div>
                <label>Weight (kg)</label>
                <input type="number" step="0.01" value={weight_kg} onChange={(e) => setWeight_kg(e.target.value)} />
            </div>

            <div>
                <label>Blood Type</label>
                    <select value={blood_type} onChange={(e) => setBlood_type(e.target.value)}>
                        <option value="">Select...</option>
                        <option value="A_POSITIVE">A+</option>
                        <option value="A_NEGATIVE">A-</option>
                        <option value="B_POSITIVE">B+</option>
                        <option value="B_NEGATIVE">B-</option>
                        <option value="O_POSITIVE">O+</option>
                        <option value="O_NEGATIVE">O-</option>
                        <option value="AB_POSITIVE">AB+</option>
                        <option value="AB_NEGATIVE">AB-</option>
                        <option value="UNKNOWN">Unknown</option>
                    </select>
            </div>

            <div>
                <label>GSIS No.</label>
                <input type="text" value={gsis_no} onChange={(e) => setGsis_no(e.target.value)} />
            </div>

            <div>
                <label>Pagibig No.</label>
                <input type="text" value={pagibig_no} onChange={(e) => setPagibig_no(e.target.value)} />
            </div>

            <div>
                <label>Philhealth No.</label>
                <input type="text" value={philhealth_no} onChange={(e) => setPhilhealth_no(e.target.value)} />
            </div>

            <div>
                <label>SSS No.</label>
                <input type="text" value={sss_no} onChange={(e) => setSss_no(e.target.value)} />
            </div>

            <div>
                <label>TIN No.</label>
                <input type="text" value={tin_no} onChange={(e) => setTin_no(e.target.value)} />
            </div>

            <div>
                <label>Agency Employee No.</label>
                <input type="text" value={agency_em} onChange={(e) => setAgency_em(e.target.value)} />
            </div>

            <div>
                <label>Citizenship</label>
                <input type="text" value={citizenship} onChange={(e) => setCitizenship(e.target.value)} />
            </div>

            <div>
                <label>Residential House No.</label>
                <input type="text" value={residential_house_no} onChange={(e) => setResidential_house_no(e.target.value)} />
            </div>

            <div>
                <label>Residential Street</label>
                <input type="text" value={residential_street} onChange={(e) => setResidential_street(e.target.value)} />
            </div>

            <div>
                <label>Residential Subdivision</label>
                <input type="text" value={residential_subd} onChange={(e) => setResidential_subd(e.target.value)} />
            </div>

            <div>
                <label>Residential Barangay</label>
                <input type="text" value={residential_brgy} onChange={(e) => setResidential_brgy(e.target.value)} />
            </div>

            <div>
                <label>Residential City</label>
                <input type="text" value={residential_city} onChange={(e) => setResidential_city(e.target.value)} />
            </div>

            <div>
                <label>Residential Province</label>
                <input type="text" value={residential_province} onChange={(e) => setResidential_province(e.target.value)} />
            </div>

            <div>
                <label>Residential Zipcode</label>
                <input type="text" value={residential_zipcode} onChange={(e) => setResidential_zipcode(e.target.value)} />
            </div>

            <div>
                <label>Permanent House No.</label>
                <input type="text" value={permanent_house_no} onChange={(e) => setPermanent_house_no(e.target.value)} />
            </div>

            <div>
                <label>Permanent Street</label>
                <input type="text" value={permanent_street} onChange={(e) => setPermanent_street(e.target.value)} />
            </div>

            <div>
                <label>Permanent Subdivision</label>
                <input type="text" value={permanent_subd} onChange={(e) => setPermanent_subd(e.target.value)} />
            </div>

            <div>
                <label>Permanent Barangay</label>
                <input type="text" value={permanent_brgy} onChange={(e) => setPermanent_brgy(e.target.value)} />
            </div>

            <div>
                <label>Permanent City</label>
                <input type="text" value={permanent_city} onChange={(e) => setPermanent_city(e.target.value)} />
            </div>

            <div>
                <label>Permanent Province</label>
                <input type="text" value={permanent_province} onChange={(e) => setPermanent_province(e.target.value)} />
            </div>

            <div>
                <label>Permanent Zipcode</label>
                <input type="text" value={permanent_zipcode} onChange={(e) => setPermanent_zipcode(e.target.value)} />
            </div>

            <div>
                <label>Telephone</label>
                <input type="text" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
            </div>

            <div>
                <label>Mobile Number</label>
                <input type="text" value={mobile_number} onChange={(e) => setMobile_number(e.target.value)} />
            </div>

            <div>
                <label>Spouse Surname</label>
                <input type="text" value={spouse_surname} onChange={(e) => setSpouse_surname(e.target.value)} />
            </div>

            <div>
                <label>Spouse First Name</label>
                <input type="text" value={spouse_first_name} onChange={(e) => setSpouse_first_name(e.target.value)} />
            </div>

            <div>
                <label>Spouse Middle Name</label>
                <input type="text" value={spouse_middle_name} onChange={(e) => setSpouse_middle_name(e.target.value)} />
            </div>

            <div>
                <label>Spouse Name Extension</label>
                <input type="text" value={spouse_name_ext} onChange={(e) => setSpouse_name_ext(e.target.value)} />
            </div>

            <div>
                <label>Spouse Occupation</label>
                <input type="text" value={spouse_occupation} onChange={(e) => setSpouse_occupation(e.target.value)} />
            </div>

            <div>
                <label>Spouse Employer</label>
                <input type="text" value={spouse_employer} onChange={(e) => setSpouse_employer(e.target.value)} />
            </div>

            <div>
                <label>Spouse Business Address</label>
                <input type="text" value={spouse_business_address} onChange={(e) => setSpouse_business_address(e.target.value)} />
            </div>

            <div>
                <label>Spouse Telephone</label>
                <input type="text" value={spouse_telephone} onChange={(e) => setSpouse_telephone(e.target.value)} />
            </div>

            <div>
                <label>Child 1 Name</label>
                <input type="text" value={children1_name} onChange={(e) => setChildren1_name(e.target.value)} />
            </div>

            <div>
                <label>Child 1 Birthday</label>
                <input type="date" value={children1_BDAY} onChange={(e) => setChildren1_BDAY(e.target.value)} />
            </div>

            <div>
                <label>Child 2 Name</label>
                <input type="text" value={children2_name} onChange={(e) => setChildren2_name(e.target.value)} />
            </div>

            <div>
                <label>Child 2 Birthday</label>
                <input type="date" value={children2_BDAY} onChange={(e) => setChildren2_BDAY(e.target.value)} />
            </div>

            <div>
                <label>Child 3 Name</label>
                <input type="text" value={children3_name} onChange={(e) => setChildren3_name(e.target.value)} />
            </div>

            <div>
                <label>Child 3 Birthday</label>
                <input type="date" value={children3_BDAY} onChange={(e) => setChildren3_BDAY(e.target.value)} />
            </div>

            <div>
                <label>Child 4 Name</label>
                <input type="text" value={children4_name} onChange={(e) => setChildren4_name(e.target.value)} />
            </div>

            <div>
                <label>Child 4 Birthday</label>
                <input type="date" value={children4_BDAY} onChange={(e) => setChildren4_BDAY(e.target.value)} />
            </div>

            <div>
                <label>Child 5 Name</label>
                <input type="text" value={children5_name} onChange={(e) => setChildren5_name(e.target.value)} />
            </div>

            <div>
                <label>Child 5 Birthday</label>
                <input type="date" value={children5_BDAY} onChange={(e) => setChildren5_BDAY(e.target.value)} />
            </div>

            <div>
                <label>Child 6 Name</label>
                <input type="text" value={children6_name} onChange={(e) => setChildren6_name(e.target.value)} />
            </div>

            <div>
                <label>Child 6 Birthday</label>
                <input type="date" value={children6_BDAY} onChange={(e) => setChildren6_BDAY(e.target.value)} />
            </div>

            <div>
                <label>Child 7 Name</label>
                <input type="text" value={children7_name} onChange={(e) => setChildren7_name(e.target.value)} />
            </div>

            <div>
                <label>Child 7 Birthday</label>
                <input type="date" value={children7_BDAY} onChange={(e) => setChildren7_BDAY(e.target.value)} />
            </div>

            <div>
                <label>Child 8 Name</label>
                <input type="text" value={children8_name} onChange={(e) => setChildren8_name(e.target.value)} />
            </div>

            <div>
                <label>Child 8 Birthday</label>
                <input type="date" value={children8_BDAY} onChange={(e) => setChildren8_BDAY(e.target.value)} />
            </div>

            <div>
                <label>Child 9 Name</label>
                <input type="text" value={children9_name} onChange={(e) => setChildren9_name(e.target.value)} />
            </div>

            <div>
                <label>Child 9 Birthday</label>
                <input type="date" value={children9_BDAY} onChange={(e) => setChildren9_BDAY(e.target.value)} />
            </div>

            <div>
                <label>Child 10 Name</label>
                <input type="text" value={children10_name} onChange={(e) => setChildren10_name(e.target.value)} />
            </div>

            <div>
                <label>Child 10 Birthday</label>
                <input type="date" value={children10_BDAY} onChange={(e) => setChildren10_BDAY(e.target.value)} />
            </div>

            <div>
                <label>Child 11 Name</label>
                <input type="text" value={children11_name} onChange={(e) => setChildren11_name(e.target.value)} />
            </div>

            <div>
                <label>Child 11 Birthday</label>
                <input type="date" value={children11_BDAY} onChange={(e) => setChildren11_BDAY(e.target.value)} />
            </div>

            <div>
                <label>Child 12 Name</label>
                <input type="text" value={children12_name} onChange={(e) => setChildren12_name(e.target.value)} />
            </div>

            <div>
                <label>Child 12 Birthday</label>
                <input type="date" value={children12_BDAY} onChange={(e) => setChildren12_BDAY(e.target.value)} />
            </div>

            <div>
                <label>Father Surname</label>
                <input type="text" value={father_surname} onChange={(e) => setFather_surname(e.target.value)} />
            </div>

            <div>
                <label>Father First Name</label>
                <input type="text" value={father_first_name} onChange={(e) => setFather_first_name(e.target.value)} />
            </div>

            <div>
                <label>Father Middle Name</label>
                <input type="text" value={father_middle_name} onChange={(e) => setFather_middle_name(e.target.value)} />
            </div>

            <div>
                <label>Father Name Extension</label>
                <input type="text" value={father_name_ext} onChange={(e) => setFather_name_ext(e.target.value)} />
            </div>

            <div>
                <label>Mother Surname</label>
                <input type="text" value={mother_surname} onChange={(e) => setMother_surname(e.target.value)} />
            </div>

            <div>
                <label>Mother First Name</label>
                <input type="text" value={mother_first_name} onChange={(e) => setMother_first_name(e.target.value)} />
            </div>
            
            <div>
                <label>Mother Middle Name</label>
                <input type="text" value={mother_middle_name} onChange={(e) => setMother_middle_name(e.target.value)} />
            </div>

            <button type="submit">submit</button>

        </form>
    );
};
export default ItemForm;