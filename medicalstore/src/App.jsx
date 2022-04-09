import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import NavigationBar from "../src/components/navbar/navbar";
import PatientID from "../src/components/patientID/PatientID";
import Table from "../src/components/datatable/datatable";

function App() {
  const [prescription, setPrescription] = useState({});
  return (
    <div>
      <NavigationBar />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<PatientID prescription={prescription} setPrescription={setPrescription} />}
          ></Route>
          <Route
            path="/getPrescription"
            element={<Table prescription={prescription} />}
          ></Route>
        </Routes>
      </Router>
      {/* <PatientID/>
        <Table /> */}
    </div>
  );
}
export default App;
