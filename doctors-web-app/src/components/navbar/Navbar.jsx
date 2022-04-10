import React from "react";

import "./Navbar.css";
import brand from "./DIAGNow.png";
import logo from "./iconWithShadow.png";
import userImg from "./dummy-user-img.png";

const Navbar = ({doctorName}) => {
  return (
    <div className="navbar">
      <div className="brand">
        <img src={logo} alt="brand logo" className="brandLogo" />
        <img src={brand} alt="brand name" className="brandName" />
      </div>
      <div className="loginUser">
        <h3>{doctorName}</h3>
        <img src={userImg} alt="user img" className="userImg" />
      </div>
    </div>
  );
};

export default Navbar;
