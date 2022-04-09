import "./datatable.css";

import * as React from "react";
import {useState} from "react"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

// function createData(Medicine: string, Days: number, DosagesPerDay: number) {
//   return { Medicine, Days, DosagesPerDay };
// }

// const rows = [
//   createData("Paracetamol", 10, 6),
//   createData("Gontazol", 10, 9),
//   createData("Gabatron", 12, 2),
//   createData("Combiflam", 23, 1),
//   createData("Jamalghota", 5, 2),
// ];

export default function BasicTable({ prescription }) {
  const id = prescription._id;
  const name = prescription.patientName;
  const age = prescription.patientAge;
  const medicineName1 = prescription.medicineName1;
  const medicineName2 = prescription.medicineName2;
  const medicineName3 = prescription.medicineName3;
  const medicineDose1 = prescription.medicineDose1;
  const medicineDose2 = prescription.medicineDose2;
  const medicineDose3 = prescription.medicineDose3;
  const medicineStrength1 = prescription.medicineStrength1;
  const medicineStrength2 = prescription.medicineStrength2;
  const medicineStrength3 = prescription.medicineStrength3;
  const medicineDuration1 = prescription.medicineDuration1;
  const medicineDuration2 = prescription.medicineDuration2;
  const medicineDuration3 = prescription.medicineDuration3;

  const [verifyResponse, setVerifyResponse] = useState("")

  const verifyPrescription = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.patch("http://localhost:5000/api/prescriptions/update", {id: id})
      console.log(response.data)
      setVerifyResponse("This prescription is now been expired. You cannot use this prescription again!")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="table">
      <h1>Patient Receipt</h1>
      <div className="details">
        <span>
          {" "}
          <b>Name</b> : {name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <span>
          {" "}
          <b>Age</b> : {age}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </div>

      <div className="prescriptionOutput">
        <div className="singleOutput">
          <h3>Medicine 1: {medicineName1}</h3>
          <p>
            <b>Dose:</b> {medicineDose1}
          </p>
          <p>
            <b>Strength:</b> {medicineStrength1}
          </p>
          <p>
            <b>Duration:</b> {medicineDuration1}
          </p>
        </div>

        {prescription.medicineName2 !== "" && (
          <div className="singleOutput">
            <h3>Medicine 2: {medicineName2}</h3>
            <p>
              <b>Dose:</b> {medicineDose2}
            </p>
            <p>
              <b>Strength:</b> {medicineStrength2}
            </p>
            <p>
              <b>Duration:</b> {medicineDuration2}
            </p>
          </div>
        )}

        {prescription.medicineName3 !== "" && (
          <div className="singleOutput">
            <h3>Medicine 3: {medicineName3}</h3>
            <p>
              <b>Dose:</b> {medicineDose3}
            </p>
            <p>
              <b>Strength:</b> {medicineStrength3}
            </p>
            <p>
              <b>Duration:</b> {medicineDuration3}
            </p>
          </div>
        )}
      </div>

      <div className="output">
        <button type="submit" onClick={verifyPrescription} className="button">
          Confirm
        </button>
        <p className="verifyResponse">{verifyResponse}</p>
      </div>
    </div>
  );
}
