import { useState } from "react";


const DoctorandDiagnosisDetails = () => {

    const [userRegistration , setUserRegistration] = useState({
        doctor_email:"",
        Contact_number:"",
        doctor_natureOfLiness:"",
        doctor_releventClinicFindings:"",
        doctor_durationOfPresentAliment:"",
        doctor_dateOfFirstConsultation:"",
        doctor_PastHistoryOfPresentAlignment:"",
        doctor_provisionalDiagnosis:"",
        doctor_icdCode:"",
        doctor_proposedLineOfTreatment_Medical_Managment:"",
        doctor_proposedLineOfTreatment_Surgical_Managment:"",
        doctor_proposedLineOfTreatment_Intensive_Care:"",
        doctor_proposedLineOfTreatment_Investigation:"",
        doctor_proposedLineOfTreatment_Allopathic_Treatment:"",
        If_Investigation_Or_Medical_Management_Provide_Details:"",
        Route_Of_Drug_Administration:"",
        If_Surgical_Name_of_Surgery:"",
        ICD_Code_10_PCS:"",
        doctor_ifOtherTratmentProvideDetails:"",
        doctor_howDidInjuryOccure:"",
        doctor_inCaseOfAccident:"",
        doctor_reportedToPolice:"",
        doctor_injuryorDiseaseCausedDueToSubstance:"",
        doctor_testAlcohol:"",
        doctor_inCaseMaternityG:"",
        doctor_inCaseMaternityP:"",
        doctor_inCaseMaternityL:"",
        doctor_inCaseMaternityA:"",
        doctor_expectedDateOfDelivery:"",

    });
    
    const handleInput = (e) => {
        const name= e.target.name; 
        const value=e.target.value;
        console.log(name , value);

        setUserRegistration({ ...userRegistration , [name]: value});
    }
  
  
    return (
        <div>

            <div>

                <section className="Secondform">

                    <form className="DoctorandDiagnosisDetailsform" id="DoctorandDiagnosisDetailsform" >
                        <div className="second_container">
                            <div className="row">
                                <div className="col">

                                    <label>Name Of The Treating Doctor   </label><br />
                                    <select className="form-control" name="doctor_email" id="tpa" onfocusout="getdata()">
                                        <option value="unselect">Select</option>


                                        <option value="abnewh@gmail.com+ayush jain">AYUSH JAIN</option>



                                        <option value="doc@gmail.com+arpit saraf">ARPIT SARAF</option>



                                        <option value="doctorcheck@gmail.com+roshni mehta">ROSHNI MEHTA</option>


                                    </select>



                                    <label for="exampleInputEmail1">Contact Number</label>
                                    <input className="form-control" name="Contact_number" type="text"
                                        value={userRegistration.exampleInputEmail1} onChange={handleInput} />
                                    <label for="exampleInputEmail1">Nature of illness / Disease With Presenting complaints</label>
                                    <input className="form-control" name="doctor_natureOfLiness" type="text" value={userRegistration.exampleInputEmail1} onChange={handleInput} />

                                    <label for="exampleInputEmail1">Relevant Clinic Findings</label>
                                    <input className="form-control" name="doctor_releventClinicFindings" type="text"
                                        value={userRegistration.exampleInputEmail1} onChange={handleInput} />

                                    <label for="exampleInputEmail1">Duration of Present Ailment</label>
                                    <input className="form-control" name="doctor_durationOfPresentAliment" type="text"
                                        value={userRegistration.exampleInputEmail1} onChange={handleInput} />

                                    <label for="exampleInputEmail1">Date Of First Consultation</label>
                                    <input className="form-control" name="doctor_dateOfFirstConsultation" type="date"
                                        value={userRegistration.exampleInputEmail1} onChange={handleInput} />

                                    <label for="exampleInputEmail1">Past History Of Present Ailment , If Any</label>
                                    <input className="form-control" name="doctor_PastHistoryOfPresentAlignment" type="text"
                                        value={userRegistration.exampleInputEmail1} onChange={handleInput} />

                                    <label for="exampleInputEmail1">Provisional Diagnosis</label>
                                    <input className="form-control" name="doctor_provisionalDiagnosis" type="text"
                                        value={userRegistration.exampleInputEmail1} onChange={handleInput} />

                                    <label for="exampleInputEmail1">ICD Code </label>
                                    <input className="form-control" name="doctor_icdCode" type="tel"
                                        value={userRegistration.exampleInputEmail1} onChange={handleInput} />

                                    <label for="exampleInputEmail1">Proposed Line Of Treatment </label> <br />
                                    <input name="doctor_proposedLineOfTreatment_Medical_Managment" value="Yes"
                                        id="madical_managment" type="checkbox"  />
                                    
                                    Medical Managment *
                                    <input name="doctor_proposedLineOfTreatment_Surgical_Managment" value="Yes" id="surgical"
                                        type="checkbox" /> Surgical
                                    Managment <br />
                                    <input name="doctor_proposedLineOfTreatment_Intensive_Care" value="Yes" id='intensiveCare'
                                        type="checkbox" />
                                    Intensive Care &nbsp;&nbsp;&nbsp;
                                    <input name="doctor_proposedLineOfTreatment_Investigation" value="Yes" id="investigation"
                                        type="checkbox" />
                                    Investigation <br />
                                    <input name="doctor_proposedLineOfTreatment_Allopathic_Treatment" value="Yes"
                                        id='nonAllopathic' type="checkbox" /> Non
                                    Allopathic Treatment <br />

                                    <label for="exampleInputEmail1">If Investigation & /or medical management provide
                                        details</label>
                                    <input className="form-control" type="text"
                                        value={userRegistration.exampleInputEmail1} onChange={handleInput}
                                        name="If_Investigation_Or_Medical_Management_Provide_Details" />
                                    
                                    <label for="exampleInputEmail1">route of drug administration</label>
                                    <input className="form-control" type="text"
                                        value={userRegistration.exampleInputEmail1} onChange={handleInput}
                                        name="Route_Of_Drug_Administration" />                        </div>
                              
                              
                                <div className="col">
                              
                              
                              
                                <label for="exampleInputEmail1">If surgical name of surgery </label>
                            <input className="form-control" type="text"
                              value={userRegistration.exampleInputEmail1} onChange={handleInput}
                              name="If_Surgical_Name_of_Surgery"/>

                            <label for="exampleInputEmail1">ICD 10 PCS code </label>
                            
                            <input className="form-control" type="text" value={userRegistration.exampleInputEmail1} onChange={handleInput}
                              name="ICD_Code_10_PCS"/>


                            <label for="exampleInputEmail1">If Other Tratment Provide Details</label>
                            <input className="form-control" name="doctor_ifOtherTratmentProvideDetails"
                              value={userRegistration.exampleInputEmail1} onChange={handleInput} type="text"/>

                            <label for="exampleInputEmail1">How Did Injury Occure</label>
                            <input className="form-control" value={userRegistration.exampleInputEmail1} onChange={handleInput}
                              name="doctor_howDidInjuryOccure" type="text"/>

                            <label for="exampleInputEmail1">In Case Of Accident ,Is It RTA</label> <br/>
                            <input type="radio" value="Yes" name="doctor_inCaseOfAccident"
                              id="doctor_inCaseOfAccidentYes"/> Yes
                            <input type="radio" value="No" name="doctor_inCaseOfAccident"
                              id="doctor_inCaseOfAccidentNo"/> No <br/>

                             <label for="exampleInputEmail1">Reported To Police</label>
                            <br />
                            <input type="radio" value="Yes" name="doctor_reportedToPolice" id="policeReportYes"
                              />
                            Yes
                            <input type="radio" value="No" name="doctor_reportedToPolice" id="policeReportNo"
                               />
                            No <br />
                            


                         
                             <label for="exampleInputEmail1">Injury/Disease Caused Due To Substance Abuse / Alcohol
                              Consumption</label> <br/>
                            <input type="radio" name="doctor_injuryorDiseaseCausedDueToSubstance" value="Yes"
                              id="InjuryYes"/>
                            Yes
                            <input type="radio" name="doctor_injuryorDiseaseCausedDueToSubstance" value="No"
                              id="InjuryNo"/>
                            No <br/>

                            <label for="exampleInputEmail1">Test Conducted To Establish This</label> <br/>
                            <input type="radio" name="doctor_testAlcohol" value="Yes" id="testAlcoholYes"
                           />Yes
                    
                               <input type="radio" name="doctor_testAlcohol" value="No" id="testAlcoholNo"
                            /> No <br/>

                            <label for="exampleInputEmail1">In Case Maternity</label> <br/>
                            <input type="checkbox" name="doctor_inCaseMaternityG" value="Yes" id="G"/> G
                            <input type="checkbox" name="doctor_inCaseMaternityP" value="Yes" id="P"/> P
                            <input type="checkbox" name="doctor_inCaseMaternityL" value="Yes" id="L"/> L
                            <input type="checkbox" name="doctor_inCaseMaternityA" value="Yes" id="A"/> A
                            <br/>
                            
                            <label for="exampleInputEmail1">Expected Date Of Delivery</label>
                            <input className="form-control" name="doctor_expectedDateOfDelivery"
                              value={userRegistration.exampleInputEmail1} onChange={handleInput} type="date"/>
                            

                                </div>
                            </div>
                        </div>
                    </form>

                </section>
            </div>
        </div>


    )
}

export default DoctorandDiagnosisDetails;