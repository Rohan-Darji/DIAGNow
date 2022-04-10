import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setDoctorId }) => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const onChange = (value) => {
    setLoginForm((prev) => {
      return { ...prev, ...value };
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://desolate-wave-26485.herokuapp.com/api/doctors/login`,
        { username: loginForm.username, password: loginForm.password }
      );
      // const response = await axios.post(
      //   `http://localhost:5000/api/doctors/login`,
      //   { username: loginForm.username, password: loginForm.password }
      // );
      setDoctorId(response.data.doctorId);
      response.data.message === "Success" && navigate("/createPrescription");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form className="loginContainer">
        <h2>Doctor Login</h2>
        <br />
        <div className="formSection">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={loginForm.username}
            onChange={(e) => onChange({ username: e.target.value })}
          />
        </div>
        <div className="formSection">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={loginForm.password}
            onChange={(e) => onChange({ password: e.target.value })}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
