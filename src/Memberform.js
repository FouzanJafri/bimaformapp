import  React,{useState} from "react";
import axios from 'axios';


const Memberform = () => {
    
    
    const [userRegistration , setUserRegistration] = useState({
        patient_details_name:"",
        patient_details_gender:"",
        patient_details_ageYear:"",
        patient_details_ageMonth:"",
        patient_details_date:"",
        patient_details_contact_number:"",
        patient_details_numberOfAttendingRelative:"",
        patient_details_insuredMemberIdCardNo:"",
        patient_details_policyNumberorCorporateName:"",
        patient_details_EmployeeId:"",
        patient_details_HealthInsurance:"",
        patient_details_familyPhysician:"",
        patient_details_currentAddress:"",
        patient_details_occupation:""

    })

    function submit(e) {
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/patient",{
            patient_details_name: userRegistration.patient_details_name,
            patient_details_gender: userRegistration.patient_details_gender,
            patient_details_ageYear: userRegistration.patient_details_ageYear,
            patient_details_ageMonth: userRegistration.patient_details_ageMonth,
            patient_details_date: userRegistration.patient_details_date,
            patient_details_contact_number: userRegistration.patient_details_contact_number,
            patient_details_numberOfAttendingRelative: userRegistration.patient_details_numberOfAttendingRelative,
            patient_details_insuredMemberIdCardNo: userRegistration.patient_details_insuredMemberIdCardNo,
            patient_details_policyNumberorCorporateName: userRegistration.patient_details_policyNumberorCorporateName,
            patient_details_EmployeeId: userRegistration.patient_details_EmployeeId,
            patient_details_HealthInsurance: userRegistration.patient_details_HealthInsurance,
            patient_details_familyPhysician: userRegistration.patient_details_familyPhysician,
            patient_details_currentAddress: userRegistration.patient_details_currentAddress,
            patient_details_currentCity: userRegistration.patient_details_currentCity,
            patient_details_occupation: userRegistration.patient_details_occupation
        })
            .then(response =>{
                 console.log(response)
            })
    }
    
    const handleInput = (e) => {
        const name=e.target.name; 
        const value=e.target.value;
        console.log(name , value);

        setUserRegistration({ ...userRegistration , [name]: value});
    }
    
    return (
        <div>

            <div className="Homeform">

                <section>

                    <form onSubmit={(handleInput) => submit()}>
                        <div className="first_container">
                            <label htmlFor="cars">Insurance Company / TPA</label> <br />
                            <select className="form-control" name="insurance_company" id="tpa" onChange="cars" onFocus="{getdata()}">
                                <option value="hh">hh</option>
                                <option value="Bharti_AXA_General_Insurance">Bharti_AXA_General_Insurance</option>
                                <option value="ICICI_Lombard_General_Insurance">ICICI_Lombard_General_Insurance</option>
                                <option value="Universal_Sompo_General_Insurance">Universal_Sompo_General_Insurance</option>
                                <option value="Paramount_Health_Services_&amp;_Insurance_TPA_Private_Limited">Paramount_Health_Services_&amp;_Insurance_TPA_Private_Limited</option>
                                <option value="Medsave_Health_Insurance_TPA_Limited">Medsave_Health_Insurance_TPA_Limited</option>
                                <option value="Heritage_Health_Insurance_TPA_Private_Limited">Heritage_Health_Insurance_TPA_Private_Limited</option>
                                <option value="Liberty_General_Insurance">Liberty_General_Insurance</option>
                                <option value="Star_Health_Insurance">Star_Health_Insurance</option>
                                <option value="Max_Bupa_Health_Insurance">Max_Bupa_Health_Insurance</option>
                                <option value="Health_Insurance_TPA_of_India_Limited">Health_Insurance_TPA_of_India_Limited</option>
                                <option value="Health_India_Insurance_TPA_Services_Private_Limited">Health_India_Insurance_TPA_Services_Private_Limited</option>
                                <option value="HDFC_ERGO_General_Insurance">HDFC_ERGO_General_Insurance</option>
                                <option value="Vidal_Health_Insurance_TPA_Private_Limited">Vidal_Health_Insurance_TPA_Private_Limited</option>
                                <option value="Vipul_Medcorp_Insurance_TPA_Private_Limited">Vipul_Medcorp_Insurance_TPA_Private_Limited</option>
                                <option value="Future_Generali_General_Insurance">Future_Generali_General_Insurance</option>
                                <option value="MDIndia_Health_Insurance_TPA_Private_Limited">MDIndia_Health_Insurance_TPA_Private_Limited</option>
                                <option value="Medi_Assist_Insurance_TPA_Private_Limited">Medi_Assist_Insurance_TPA_Private_Limited</option>
                                <option value="Bajaj_Allianz_General_Insurance">Bajaj_Allianz_General_Insurance</option>
                                <option value="Cholamandalam_MS_General_Insurance">Cholamandalam_MS_General_Insurance</option>
                                <option value="Family_Health_Plan_Insurance_TPA_Limited">Family_Health_Plan_Insurance_TPA_Limited</option>
                                <option value="Ericson_Insurance_TPA_Private_Limited">Ericson_Insurance_TPA_Private_Limited</option>
                                <option value="Aditya_Birla_Health_Insurance">Aditya_Birla_Health_Insurance</option>
                                <option value="IFFCO_Tokio_General_Insurance">IFFCO_Tokio_General_Insurance</option>
                                <option value="Religare_Health_Insurance">Religare_Health_Insurance</option>
                            </select>
                        </div>
                        <div className="container">
                        <div className ="row">
                        <div className ="col">

                        <label htmlFor="exampleInputEmail1">Patient Full Name</label>
                        <input type ="text" className ="form-control" id="patient_details_name" name="patient_details_name" required
                        value={userRegistration.exampleInputEmail1} onChange={handleInput}/>

                        <label htmlFor="cars">Gender: </label>
                        <select className ="form-control" id="patient_details_gender" name="patient_details_gender"  value={userRegistration.cars} onChange={handleInput} required>

                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="transgender">Transgender</option>
                        </select>

                        <label htmlFor="exampleInputEmail1">Age: Year </label>
                        <input className ="form-control" name="patient_details_ageYear"
                        value={userRegistration.exampleInputEmail1} onChange={handleInput} type ="number" />

                        <label htmlFor="exampleInputEmail1">Age: Month </label>
                        <input className ="form-control" name="patient_details_ageMonth" type ="number"
                        value={userRegistration.exampleInputEmail1} onChange={handleInput}/>

                        <label htmlFor="exampleInputEmail1">Date of birth </label>
                        <input className ="form-control" name="patient_details_date" type ="date"
                        value={userRegistration.exampleInputEmail1} onChange={handleInput}/>



                        <label htmlFor="exampleInputEmail1">Patient Contact Number
                        </label>
                        <input type ="number" id="patient_details_contact_number" className ="form-control" required name="patient_details_contact_number"
                        value={userRegistration.exampleInputEmail1} onChange={handleInput}/>

                        <label htmlFor="exampleInputEmail1">Contact Number of Attending Relative</label>
                        <input className ="form-control" name="patient_details_numberOfAttendingRelative" type ="text"
                        value={userRegistration.exampleInputEmail1} onChange={handleInput}/>

                        </div>
                        <div className ="col">
                        <label htmlFor="exampleInputEmail1">Insured Member ID Card No </label>
                        <input className ="form-control" name="patient_details_insuredMemberIdCardNo" type ="text"
                        value={userRegistration.exampleInputEmail1} onChange={handleInput}/>
                        <label htmlFor="exampleInputEmail1">Policy Number / Corporate Name </label>
                        <input className ="form-control" name="patient_details_policyNumberorCorporateName" type ="text"
                        value={userRegistration.exampleInputEmail1} onChange={handleInput}/>

                        <label htmlFor="exampleInputEmail1">Employee ID</label>
                        <input className ="form-control" name="patient_details_EmployeeId" type ="text"
                        value={userRegistration.exampleInputEmail1} onChange={handleInput}/>



                        <label htmlFor="exampleInputEmail1">Currently Do You Have Any Health Insurance</label> <br/>

                        <input type ="radio" name="patient_details_HealthInsurance" value="Yes" id="nanana" />
                        Yes
                        <input type ="radio" name="patient_details_HealthInsurance" value="No" id="nanana2"/> No
                        <br/>
                        
                        <label htmlFor="exampleInputEmail1">Do You Have a Family Physician</label> <br/>
                            <input type="radio" name="patient_details_familyPhysician" value="Yes" id="physicianYes" />
                            Yes
                            <input type="radio" name="patient_details_familyPhysician" value="No" id="physicianNo"/> No
                            <br/>
                            <label htmlFor="exampleInputEmail1">Current Address </label>
                            <input className="form-control" name="patient_details_currentAddress" type="text"
                              value={userRegistration.exampleInputEmail1} onChange={handleInput}/>
                            
                            <label htmlFor="exampleInputEmail1">City
                            </label>
                            <input type="text" className="form-control" id="city" name="city" required
                              value={userRegistration.exampleInputEmail1} onChange={handleInput}/>
                           

                            <label htmlFor="exampleInputEmail1">Occupation</label>
                            <input className="form-control" name="patient_details_occupation"
                              value={userRegistration.exampleInputEmail1} type="text"/>
                              <button>submit</button>
                        </div>
                        </div>
                        </div>
                    </form>
                    
                 
                </section>

            </div>
        </div>


    )
}

export default Memberform