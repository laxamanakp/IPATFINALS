import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ItemList = ({onEdit,onDelete})=>{
      const [ items, setItems ]= useState([]);
      useEffect( ()=> {
            fetchItems();
        }, []);
       
        const fetchItems = async () => {
            try{
                const response = await
                axios.get(`http://localhost:8000/api/items/`);
                setItems(response.data);
            } catch(error){
                console.error('There was an error fetching the items!', error);
            }
};

    return (
        <div>
            <h1>Personal Data Sheet</h1>
            <table>
                    <thead>
                        <tr>
                        <th>id</th>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Name Extension</th>
                        <th>Middle Name</th>
                        <th>Email</th>
                        <th>Date of Birth</th>
                        <th>Place of Birth</th>
                        <th>Sex</th>
                        <th>Civil Status</th>
                        <th>Height (m)</th>
                        <th>Weight (kg)</th>
                        <th>Blood Type</th>
                        <th>GSIS No</th>
                        <th>PAGIBIG No</th>
                        <th>PhilHealth No</th>
                        <th>SSS No</th>
                        <th>TIN No</th>
                        <th>Agency Employer</th>
                        <th>Citizenship</th>
                        <th>Residential House No</th>
                        <th>Residential Street</th>
                        <th>Residential Subd</th>
                        <th>Residential Brgy</th>
                        <th>Residential City</th>
                        <th>Residential Province</th>
                        <th>Residential Zipcode</th>
                        <th>Permanent House No</th>
                        <th>Permanent Street</th>
                        <th>Permanent Subd</th>
                        <th>Permanent Brgy</th>
                        <th>Permanent City</th>
                        <th>Permanent Province</th>
                        <th>Permanent Zipcode</th>
                        <th>Telephone</th>
                        <th>Mobile Number</th>
                        <th>Spouse Surname</th>
                        <th>Spouse First Name</th>
                        <th>Spouse Middle Name</th>
                        <th>Spouse Name Extension</th>
                        <th>Spouse Occupation</th>
                        <th>Spouse Employer</th>
                        <th>Spouse Business Address</th>
                        <th>Spouse Telephone</th>
                        <th>Child 1 Name</th>
                        <th>Child 1 Birthday</th>
                        <th>Child 2 Name</th>
                        <th>Child 2 Birthday</th>
                        <th>Child 3 Name</th>
                        <th>Child 3 Birthday</th>
                        <th>Child 4 Name</th>
                        <th>Child 4 Birthday</th>
                        <th>Child 5 Name</th>
                        <th>Child 5 Birthday</th>
                        <th>Child 6 Name</th>
                        <th>Child 6 Birthday</th>
                        <th>Child 7 Name</th>
                        <th>Child 7 Birthday</th>
                        <th>Child 8 Name</th>
                        <th>Child 8 Birthday</th>
                        <th>Child 9 Name</th>
                        <th>Child 9 Birthday</th>
                        <th>Child 10 Name</th>
                        <th>Child 10 Birthday</th>
                        <th>Child 11 Name</th>
                        <th>Child 11 Birthday</th>
                        <th>Child 12 Name</th>
                        <th>Child 12 Birthday</th>
                        <th>Father Surname</th>
                        <th>Father First Name</th>
                        <th>Father Middle Name</th>
                        <th>Father Name Extension</th>
                        <th>Mother Surname</th>
                        <th>Mother First Name</th>
                        <th>Mother Middle Name</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                            {items.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.last_name}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.name_ext}</td>
                                    <td>{item.middle_name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.date_of_birth}</td>
                                    <td>{item.place_of_birth}</td>
                                    <td>{item.sex}</td>
                                    <td>{item.civil_status}</td>
                                    <td>{item.height_m}</td>
                                    <td>{item.weight_kg}</td>
                                    <td>{item.blood_type}</td>
                                    <td>{item.gsis_no}</td>
                                    <td>{item.pagibig_no}</td>
                                    <td>{item.philhealth_no}</td>
                                    <td>{item.sss_no}</td>
                                    <td>{item.tin_no}</td>
                                    <td>{item.agency_em}</td>
                                    <td>{item.citizenship}</td>
                                    <td>{item.residential_house_no}</td>
                                    <td>{item.residential_street}</td>
                                    <td>{item.residential_subd}</td>
                                    <td>{item.residential_brgy}</td>
                                    <td>{item.residential_city}</td>
                                    <td>{item.residential_province}</td>
                                    <td>{item.residential_zipcode}</td>
                                    <td>{item.permanent_house_no}</td>
                                    <td>{item.permanent_street}</td>
                                    <td>{item.permanent_subd}</td>
                                    <td>{item.permanent_brgy}</td>
                                    <td>{item.permanent_city}</td>
                                    <td>{item.permanent_province}</td>
                                    <td>{item.permanent_zipcode}</td>
                                    <td>{item.telephone}</td>
                                    <td>{item.mobile_number}</td>
                                    <td>{item.spouse_surname}</td>
                                    <td>{item.spouse_first_name}</td>
                                    <td>{item.spouse_middle_name}</td>
                                    <td>{item.spouse_name_ext}</td>
                                    <td>{item.spouse_occupation}</td>
                                    <td>{item.spouse_employer}</td>
                                    <td>{item.spouse_business_address}</td>
                                    <td>{item.spouse_telephone}</td>
                                    <td>{item.children1_name}</td>
                                    <td>{item.children1_BDAY}</td>
                                    <td>{item.children2_name}</td>
                                    <td>{item.children2_BDAY}</td>
                                    <td>{item.children3_name}</td>
                                    <td>{item.children3_BDAY}</td>
                                    <td>{item.children4_name}</td>
                                    <td>{item.children4_BDAY}</td>
                                    <td>{item.children5_name}</td>
                                    <td>{item.children5_BDAY}</td>
                                    <td>{item.children6_name}</td>
                                    <td>{item.children6_BDAY}</td>
                                    <td>{item.children7_name}</td>
                                    <td>{item.children7_BDAY}</td>
                                    <td>{item.children8_name}</td>
                                    <td>{item.children8_BDAY}</td>
                                    <td>{item.children9_name}</td>
                                    <td>{item.children9_BDAY}</td>
                                    <td>{item.children10_name}</td>
                                    <td>{item.children10_BDAY}</td>
                                    <td>{item.children11_name}</td>
                                    <td>{item.children11_BDAY}</td>
                                    <td>{item.children12_name}</td>
                                    <td>{item.children12_BDAY}</td>
                                    <td>{item.father_surname}</td>
                                    <td>{item.father_first_name}</td>
                                    <td>{item.father_middle_name}</td>
                                    <td>{item.father_name_ext}</td>
                                    <td>{item.mother_surname}</td>
                                    <td>{item.mother_first_name}</td>
                                    <td>{item.mother_middle_name}</td>
                                    <td class="button-container">
                                        <button onClick={()=>onEdit(item)}>Edit</button>
                                        <button onClick={()=>onDelete(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
            </table>
        </div>
    );
};

export default ItemList;