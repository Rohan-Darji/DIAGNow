import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useState, useEffect} from "react"

import "./App.css";
import Login from "./components/login/Login";
import AddPrescription from "./components/addPrescription/AddPrescription";
import Navbar from "./components/navbar/Navbar";
import axios from "axios";

function App() {
  const [doctorId, setDoctorId] = useState("")
  const [doctorName, setDoctorName] = useState("")
  useEffect(() => {
    const getDoctorName = async () => {
      try {
        const response = await axios.get(`https://desolate-wave-26485.herokuapp.com/api/doctors/${doctorId}`)
        // const response = await axios.get(`http://localhost:5000/api/doctors/${doctorId}`)
        setDoctorName(response.data.name)
      } catch (err) {
        console.log(err)
      }
    }

    getDoctorName()
  }, [doctorId])
  
  return (
    <div className="App">
      <Navbar doctorName={doctorName} />
      <Router>
        <Routes>
          <Route path="/" element={<Login setDoctorId={setDoctorId} />}></Route>
          <Route path="/createPrescription" element={<AddPrescription doctorId={doctorId} doctorName={doctorName} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
