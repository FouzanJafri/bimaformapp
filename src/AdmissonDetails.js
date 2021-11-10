
import { useState } from "react";
import { Button } from "react-bootstrap";

const AdmissonDetails = () => {

    const [userRegistration , setUserRegistration] = useState({
        AdmissonDetailsform:"",
        admission_date:"",
        admission_time:"",
        admission_isThisAEmergencyPlannedHospitalization:"",
        admission_expectedNoOfDays:"",
        admission_daysInICU:"",
        admission_roomType:"",
        admission_perDayRoomRent:"",
        admission_expectedCostForInvestigation:"",
        admission_icuCharge:"",
        admission_otCharge:"",
        admission_professionalFeesSurgeon:"",
        admission_madicineConsumablesCostOfImplats:"",
        admission_otherHospitalIfAny:"",
        admission_allIncludePackageCharge:"",
        admission_sumTotalExpected:"",
        admission_mandatoryPastHistoryMonth:"",
        admission_mandatoryPastHistoryYear:"",
        admission_heartDiseaseMonth:"",
        admission_heartDiseaseYear:"",
        admission_hypertensionMonth:"",
        admission_hypertensionYear:"",
        admission_HyperlipidemiasMonth:"",
        admission_HyperlipidemiasYear:"",
        admission_osteoarthritisMonth:"",
        admission_osteoarthritisYear:"",
        admission_asthmaOrCOPDOrBronchitisMonth:"",
        admission_asthmaOrCOPDOrBronchitisYear:"",
        admission_cancerMonth:"",
        admission_cancerYear:"",
        admission_alcoholOrDrugAbuseMonth:"",
        admission_alcoholOrDrugAbuseYear:"",
        admission_anyHIVOrSTDOrRelatedAlimentsMonth:"",
        admission_anyHIVOrSTDOrRelatedAlimentsYear:"",
        admission_anyOtherAliments:""
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

                <section className="Thirdform">

                    <form className="AdmissonDetailsform" id="AdmissonDetailsform" >
                        <div className="third_container">
                            <div className="row">
                                <div className="col">

                                <label for="exampleInputEmail1">Date Of Admission
                             </label>

                            <input className="form-control" id="admission_date" name="admission_date" required
                              value={userRegistration.exampleInputEmail1} onChange={handleInput} type="date"/>
                            <br/>

                            <label for="exampleInputEmail1">Time Of Admission
                            </label>

                            <input className="form-control" name="admission_time" required
                              value={userRegistration.exampleInputEmail1} onChange={handleInput} type="time"/>

                            <label for="exampleInputEmail1">Is This a Emergency/Planned Hospitalization Event ? </label>
                            <br/>
                            <input type="radio" name="admission_isThisAEmergencyPlannedHospitalization"
                              value="Emergency" id="Emergency" required/> &nbsp;&nbsp;&nbsp; Emergency &nbsp;&nbsp;&nbsp;
                            <input type="radio" name="admission_isThisAEmergencyPlannedHospitalization" value="Planned"
                              id="Planned" required/> &nbsp;&nbsp;&nbsp; Planned <br/>
                             <label for="exampleInputEmail1">Expected No. Of Days Stay In Hospital 
                                 </label>
                            <input className="form-control" id="admission_expectedNoOfDays" value={userRegistration.exampleInputEmail1} onChange={handleInput}
                              name="admission_expectedNoOfDays" type="number"/>

                            <label for="exampleInputEmail1">Days In ICU</label>
                            <input className="form-control" value={userRegistration.exampleInputEmail1} onChange={handleInput}
                              name="admission_daysInICU" type="number"/>

                            <label for="exampleInputEmail1">Room Type</label>
                            <select className="form-control" name="admission_roomType">
                              <option value="General">General</option>
                              <option value="Semi Private">Semi Private</option>
                              <option value="Private">Private</option>
                              <option value="Deluxe">Deluxe</option>
                              <option value="ICU">ICU</option>
                            </select>

                            <label for="exampleInputEmail1">Per Day Room Rent + Nursing & Services Charge + Patient
                            
                            Diet</label>

                            <input className="form-control" id="admission_perDayRoomRent"
                            name="admission_perDayRoomRent" type="tel" placeholder=""
                            onChange="abc()" value={userRegistration.exampleInputEmail1} onChange={handleInput}/>
                            <label for="exampleInputEmail1">Expected Cost For Investigation + Diagnostics</label>
                            <input className="form-control" id="admission_expectedCostForInvestigation"
                              name="admission_expectedCostForInvestigation" type="number" placeholder=""
                              onChange="abc()" value={userRegistration.exampleInputEmail1} onChange={handleInput}/>

                            <label for="exampleInputEmail1">ICU Charge</label>
                            <input className="form-control" id="admission_icuCharge" name="admission_icuCharge"
                              type="number" placeholder="" onChange="abc()"
                              value={userRegistration.exampleInputEmail1} onChange={handleInput}/>

                            <label for="exampleInputEmail1">OT Charge</label>
                            <input className="form-control" id="admission_otCharge" name="admission_otCharge" type="number"
                              placeholder="" onChange="abc()" value={userRegistration.exampleInputEmail1} onChange={handleInput}/>

                            <label for="exampleInputEmail1">Professional Fees Surgeon + Anesthetist Fees + Consultation
                              Charge</label>
                            <input className="form-control" id="admission_professionalFeesSurgeon"
                              name="admission_professionalFeesSurgeon" type="number" placeholder="" onChange="abc()"
                              value={userRegistration.exampleInputEmail1} onChange={handleInput}/>

                            <label for="exampleInputEmail1">Medicine + Consumables + Cost of Implants (If Applicable
                              Please
                              Specify)</label>
                            <input className="form-control" id="admission_madicineConsumablesCostOfImplats"
                              name="admission_madicineConsumablesCostOfImplats" type="number"
                              onChange="abc()" value={userRegistration.exampleInputEmail1} onChange={handleInput}/>

                            <label for="exampleInputEmail1">Other Hospital If Any</label>
                            <input className="form-control" id="admission_otherHospitalIfAny"
                              name="admission_otherHospitalIfAny" type="number" placeholder="" onChange="abc()"
                              value={userRegistration.exampleInputEmail1} onChange={handleInput}/>

                            <label for="exampleInputEmail1">All Include Package Charges If Any Applicable</label>
                            <input className="form-control" id="admission_allIncludePackageCharge"
                              name="admission_allIncludePackageCharge" type="number" placeholder="" onChange="abc()"
                              value={userRegistration.exampleInputEmail1} onChange={handleInput}/>

                            <label for="exampleInputEmail1">Sum Total Expected Cost Of Hospitalization                                  </label>
                            <input className="form-control" name="admission_sumTotalExpected"
                              id="admission_sumTotalExpected" type="number" value={userRegistration.exampleInputEmail1} onChange={handleInput}
                              placeholder="" required/>

                                </div>
                                <div className="col">
                               
                                <label for="exampleInputEmail1">Mandatory Past History Of Any Chronic Illness If Yes, Since
                              (month / year)</label>
                            <div>
                            <p>i) Diabetes</p>
                            <input type="number" onKeyDown="limit(this);" onKeyUp="limit(this);" value={userRegistration.exampleInputEmail1} onChange={handleInput}
                                name="admission_mandatoryPastHistoryMonth" className="form-control" placeholder="Month"/>
                              <input className="form-control" onKeyDown="limit(this);" onKeyUp="limit(this);" value={userRegistration.exampleInputEmail1} onChange={handleInput}
                                type="number" placeholder="Year" name="admission_mandatoryPastHistoryYear"/>
                       </div>
                           <div>
                             <p>ii) Heart Disease</p>    
                             <input type="number" onKeyDown="limit(this);" onKeyUp="limit(this);" value={userRegistration.exampleInputEmail1} onChange={handleInput}
                                name="admission_heartDiseaseMonth" className="form-control" placeholder="Month"/>
                              <input className="form-control" onKeyDown="limit(this);" onKeyUp="limit(this);" value={userRegistration.exampleInputEmail1} onChange={handleInput}
                                type="number" placeholder="Year" name="admission_heartDiseaseYear"/>
                              </div>
                            <div>
                              <p>iii) Hypertension</p>
                              <input type="number" onKeyDown="limit(this);" onKeyUp="limit(this);" value={userRegistration.exampleInputEmail1} onChange={handleInput}
                                className="form-control" name="admission_hypertensionMonth" placeholder="Month"/>
                              <input className="form-control" onKeyDown="limit(this);" onKeyUp="limit(this);" value={userRegistration.exampleInputEmail1} onChange={handleInput}
                                type="number" placeholder="Year" name="admission_hypertensionYear"/>
                                </div>
                                <div>
                                 <p>iv) Hyperlipidemias</p>
                                 <input type="number" onKeyDown="limit(this);" onKeyUp="limit(this);" value={userRegistration.exampleInputEmail1} onChange={handleInput}
                                className="form-control" name="admission_HyperlipidemiasMonth" placeholder="Month"/>
                              <input className="form-control" onKeyDown="limit(this);" onKeyUp="limit(this);" value={userRegistration.exampleInputEmail1} onChange={handleInput}
                                type="number" placeholder="Year" name="admission_HyperlipidemiasYear"/>
                                </div>
                                <div>
                                <p>v) Osteoarthritis</p>
                            
                              <input type="number" onKeyDown="limit(this);" onKeyUp="limit(this);" value={userRegistration.exampleInputEmail1} onChange={handleInput}
                                className="form-control" name="admission_osteoarthritisMonth" placeholder="Month"/>
                              <input className="form-control" onKeyDown="limit(this);" onKeyUp="limit(this);" value={userRegistration.exampleInputEmail1} onChange={handleInput}
                                type="number" placeholder="Year" name="admission_osteoarthritisYear"/>
                                </div>
                                <div>
                            <p>vi) Asthma / COPD / Bronchitis</p>
                            
                            
                              <input type="number" onKeyDown="limit(this);" onKeyUp="limit(this);" value={userRegistration.exampleInputEmail1} onChange={handleInput}
                                className="form-control" name="admission_asthmaOrCOPDOrBronchitisMonth" placeholder="Month"/>
                              <input className="form-control" onKeyDown="limit(this);" onKeyUp="limit(this);" value={userRegistration.exampleInputEmail1} onChange={handleInput}
                                type="number" placeholder="Year" name="admission_asthmaOrCOPDOrBronchitisYear"/>
                            </div>
                            <div>
                            <p>vii) Cancer</p>
                            
                              <input type="number" onKeyDown="limit(this);" onKeyUp="limit(this);" value={userRegistration.exampleInputEmail1} onChange={handleInput} className="form-control"
                                name="admission_cancerMonth" placeholder="Month"/>
                              <input className="form-control" onKeyDown="limit(this);" onKeyUp="limit(this);" value={userRegistration.exampleInputEmail1} onChange={handleInput} type="number"
                                placeholder="Year" name="admission_cancerYear"/>
                            </div>
                            <div>
                            <p>viii) Alcohol or Drug Abuse</p>
                            
                              <input type="number" onKeyDown="limit(this);" onKeyUp="limit(this);" value={userRegistration.exampleInputEmail1} onChange={handleInput}
                                className="form-control" name="admission_alcoholOrDrugAbuseMonth" placeholder="Month"/>
                              <input className="form-control" onKeyDown="limit(this);" onKeyUp="limit(this);" value={userRegistration.exampleInputEmail1} onChange={handleInput}
                                type="number" placeholder="Year" name="admission_alcoholOrDrugAbuseYear"/>
                            </div>

                            <div>    
                                <p for="exampleInputEmail1">ix) Any HIV or STD / Related Ailments</p>
                            
                              <input type="number" onKeyDown="limit(this);" onKeyUp="limit(this);" value={userRegistration.exampleInputEmail1} onChange={handleInput}
                                className="form-control" name="admission_anyHIVOrSTDOrRelatedAlimentsMonth"
                                placeholder="Month"/>
                              <input className="form-control" onKeyDown="limit(this);" onKeyUp="limit(this);" value={userRegistration.exampleInputEmail1} onChange={handleInput}
                                type="number" placeholder="Year" name="admission_anyHIVOrSTDOrRelatedAlimentsYear"/>
                            </div>
                            <div>
                            <p>Any Other Ailments Give Details</p>
                            <input className="form-control" name="admission_anyOtherAliments" type="text"
                              value={userRegistration.exampleInputEmail1} onChange={handleInput} placeholder=""/>
                               </div> 


                               </div>
                            </div>
                       </div>
                    </form>
                    <Button name="submit" className="submit" onClick="" variant="outline-success" >SUBMIT</Button>{' '}

                </section>
            </div>
        </div>


    )
}

export default AdmissonDetails;