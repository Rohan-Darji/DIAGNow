import "./PatientID.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { convertLength } from "@mui/material/styles/cssUtils";
import axios from "axios";

function PatientID({prescription, setPrescription }) {
  const [secretPhrase, setSecretPhrase] = useState("");

  const handleSubmit = async (e) => {
    console.log(secretPhrase);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/prescriptions/getByPhrase",
        { secretPhrase: secretPhrase }
      );
      console.log(response.data);
      setPrescription(response.data);
    //   console.log(prescription)
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (value) => {
    setSecretPhrase(value);
  };

  return (
    <div className="card">
      <div className="container">
        <div className="form">
          <form>
            <div className="input-container">
              <h3>Find Patient Receipt</h3>
              <label>Secret Phrase </label>
              <br />
              <input
                type="text"
                name="uname"
                required
                id="input"
                value={secretPhrase}
                onChange={(e) => onChange(e.target.value)}
              />
              {/* {renderErrorMessage("uname")} */}
            </div>
            <div className="btn">
              <Link to="/getPrescription">
                <button type="submit" onClick={handleSubmit} className="button">
                  Find Patient Receipt
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default PatientID;
