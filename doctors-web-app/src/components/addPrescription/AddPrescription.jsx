import React, { useState } from "react";
import axios from "axios";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import "./AddPrescription.css";

const AddPrescription = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    patientAge: "",
    medicineName1: "",
    medicineDose1: "",
    medicineStrength1: "",
    medicineDuration1: "",
    medicineName2: "",
    medicineDose2: "",
    medicineStrength2: "",
    medicineDuration2: "",
    medicineName3: "",
    medicineDose3: "",
    medicineStrength3: "",
    medicineDuration3: "",
  });
  const [secretPhrase, setSecretPhrase] = useState("");
  const [showSecret, setShowSecret] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const onChange = (value) => {
    return setFormData((prev) => {
      return { ...prev, ...value };
    });
  };

  const submitPrescription = async (e) => {
    e.preventDefault();
    setButtonClicked(true);
    // console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/prescriptions/new",
        formData
      );
      setSecretPhrase(response.data.secretPhrase);
    } catch (err) {
      console.log(err);
    }
  };

  const handleShowSecret = () => {
    setShowSecret((prev) => !prev);
    // console.log(showSecret);
  };

  return (
    <div className="addPrescription">
      <form className="formContainer">
        <div className="patientDetails">
          <div className="formSection">
            <label htmlFor="patientName">Patient Name </label>
            <input
              id="patientName"
              type="text"
              value={formData.patientName}
              onChange={(e) => {
                onChange({ patientName: e.target.value });
              }}
            />
          </div>
          <div className="formSection patientAge">
            <label htmlFor="patientAge">Patient Age </label>
            <input
              id="patientAge"
              type="number"
              value={formData.patientAge}
              onChange={(e) => {
                onChange({ patientAge: e.target.value });
              }}
            />
          </div>
        </div>
        <hr />
        {/* Medicine 1 */}
        <div className="formSection medicineDetails">
          <label htmlFor="medicineName">Medicine #1</label>
          <input
            id="medicineName"
            type="text"
            value={formData.medicineName1}
            onChange={(e) => {
              onChange({ medicineName1: e.target.value });
            }}
          />
        </div>
        <div className="medicineUsage">
          <div className="formSection">
            <label htmlFor="medicineDose">Dose #1</label>
            <input
              id="medicineDose"
              type="text"
              value={formData.medicineDose1}
              onChange={(e) => {
                onChange({ medicineDose1: e.target.value });
              }}
            />
          </div>
          <div className="formSection">
            <label htmlFor="medicineStrength">Strength #1</label>
            <input
              id="medicineStrength"
              type="text"
              value={formData.medicineStrength1}
              onChange={(e) => {
                onChange({ medicineStrength1: e.target.value });
              }}
            />
          </div>
          <div className="formSection">
            <label htmlFor="medicineDuration">Duration #1</label>
            <input
              id="medicineDuration"
              type="text"
              value={formData.medicineDuration1}
              onChange={(e) => {
                onChange({ medicineDuration1: e.target.value });
              }}
            />
          </div>
        </div>

        <hr />
        {/* Medicine 2 */}
        <div className="formSection medicineDetails">
          <label htmlFor="medicineName">
            Medicine #2 <span>(*optional)</span>
          </label>
          <input
            id="medicineName"
            type="text"
            value={formData.medicineName2}
            onChange={(e) => {
              onChange({ medicineName2: e.target.value });
            }}
          />
        </div>
        <div className="medicineUsage">
          <div className="formSection">
            <label htmlFor="medicineDose">Dose #2</label>
            <input
              id="medicineDose"
              type="text"
              value={formData.medicineDose2}
              onChange={(e) => {
                onChange({ medicineDose2: e.target.value });
              }}
            />
          </div>
          <div className="formSection">
            <label htmlFor="medicineStrength">Strength #2</label>
            <input
              id="medicineStrength"
              type="text"
              value={formData.medicineStrength2}
              onChange={(e) => {
                onChange({ medicineStrength2: e.target.value });
              }}
            />
          </div>
          <div className="formSection">
            <label htmlFor="medicineDuration">Duration #2</label>
            <input
              id="medicineDuration"
              type="text"
              value={formData.medicineDuration2}
              onChange={(e) => {
                onChange({ medicineDuration2: e.target.value });
              }}
            />
          </div>
        </div>

        <hr />
        {/* Medicine 3 */}
        <div className="formSection medicineDetails">
          <label htmlFor="medicineName">
            Medicine #3 <span>(*optional)</span>
          </label>
          <input
            id="medicineName"
            type="text"
            value={formData.medicineName3}
            onChange={(e) => {
              onChange({ medicineName3: e.target.value });
            }}
          />
        </div>
        <div className="medicineUsage">
          <div className="formSection">
            <label htmlFor="medicineDose">Dose</label>
            <input
              id="medicineDose"
              type="text"
              value={formData.medicineDose3}
              onChange={(e) => {
                onChange({ medicineDose3: e.target.value });
              }}
            />
          </div>
          <div className="formSection">
            <label htmlFor="medicineStrength">Strength</label>
            <input
              id="medicineStrength"
              type="text"
              value={formData.medicineStrength3}
              onChange={(e) => {
                onChange({ medicineStrength3: e.target.value });
              }}
            />
          </div>
          <div className="formSection">
            <label htmlFor="medicineDuration">Duration</label>
            <input
              id="medicineDuration"
              type="text"
              value={formData.medicineDuration3}
              onChange={(e) => {
                onChange({ medicineDuration3: e.target.value });
              }}
            />
          </div>
        </div>

        <button onClick={submitPrescription}>Create</button>
      </form>
      <br />
      <div>
        {/* <button onClick={handleShowSecret}>show</button> */}
        {showSecret === true ? (
          <div className="secretPhrase">
            <h3>Get your secret phrase -</h3>
            <div className="secret">
              <VisibilityOffIcon
                onClick={handleShowSecret}
                className="visibility"
              />
              <p>{secretPhrase}</p>
            </div>
          </div>
        ) : buttonClicked ? (
          <div className="secretPhrase">
            <h3>Get your secret phrase -</h3>
            <div className="secret">
              <VisibilityIcon
                onClick={handleShowSecret}
                className="visibility"
              />
              <br />
              <p>**** **** **** **** ****</p>
            </div>
          </div>
        ) : (
          <div className="secretPhrase">
            <h3>Get your secret phrase -</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddPrescription;
