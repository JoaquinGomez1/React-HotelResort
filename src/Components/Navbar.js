import React from "react";
import "./Styles/Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/"> YourLogo</Link>
      </div>

      <div className="nav-links">
        <Link to="/">
          {" "}
          <div className="nav-home">Home</div>{" "}
        </Link>
        <Link to="/rooms/">
          {" "}
          <div className="nav-rooms">Rooms</div>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
