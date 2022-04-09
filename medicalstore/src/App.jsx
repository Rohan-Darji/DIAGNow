import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import NavigationBar from "../src/components/navbar/navbar"
import PatientID from "../src/components/patientID/PatientID"
import Table from "../src/components/datatable/datatable"
function App(){
  return (
      <div>
        <NavigationBar/>
        <Router>
          <Routes>
            <Route path="/" element={<PatientID />} ></Route>
            <Route path="/getPrescription" element={<Table />} ></Route>
          </Routes>
        </Router>
        {/* <PatientID/>
        <Table /> */}
      </div>
  );
}
export default App;