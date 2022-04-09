import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./components/login/Login";
import AddPrescription from "./components/addPrescription/AddPrescription";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/createPrescription" element={<AddPrescription />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
