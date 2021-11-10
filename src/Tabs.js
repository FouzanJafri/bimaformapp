import { useState } from "react";
import AdmissonDetails from "./AdmissonDetails";
import "./App.css";
import DoctorandDiagnosisDetails from "./DoctorandDiagnosisDetails";
import Memberform from "./Memberform";
import { Button } from "react-bootstrap";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="tabs_container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Member Details
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Doctor and Diagnosis Details
         
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Bill Details
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
        <Memberform/>
        <Button variant="outline-primary" className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}>Next</Button>{' '}
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <DoctorandDiagnosisDetails/>
          <Button variant="outline-primary" className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}>Next</Button>{' '}
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <AdmissonDetails/>
        </div>
      </div>
    </div>
  );
}

export default Tabs;