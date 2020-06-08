import React, { useEffect } from "react";
import "./Styles/Landing.scss";
import { Link } from "react-router-dom";
import MainButton from "./MainButton";

function Landing({ match }) {
  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, [match]);

  return (
    <div className="landing">
      <div className="landing-filter" />
      <div className="landing-container">
        <h1>The Best Hotel Rooms</h1>
        <hr />
        <h2>Find the best room for you at the lowest price</h2>
        <Link to="/rooms/">
          {" "}
          <MainButton
            style={{ marginTop: "30px" }}
            content={"Find Rooms"}
          ></MainButton>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
