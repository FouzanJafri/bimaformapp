
import './App.css';
import {Route,  Routes} from "react-router-dom";
import Memberform from './Memberform';
import DoctorandDiagnosisDetails from './DoctorandDiagnosisDetails';
import AdmissonDetails from './AdmissonDetails';
import Navbar from 'react-bootstrap/Navbar';

import Tabs from './Tabs'

function App() {
  return (
    <div className="App">
     
       <>

       <Navbar>
      <Navbar.Brand href="/">BimaXpress Form</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Made by: <a href= "/">Fouzan Jafri</a>
      </Navbar.Text>
      </Navbar.Collapse>
      </Navbar>
    </>   
<Tabs/>
    </div>
  

  );
}


export default App;
