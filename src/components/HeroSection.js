import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import Typical from "react-typical";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Uche Kennedy</h1>
      <div className="profile-details-role">
        <span className="primary-text">
          {" "}
          <h2>
            {" "}
            <Typical
              loop={Infinity}
              steps={[
                "Frontend Developer",
                1000,
                "Social Media Manager",
                1000,
                "Communication Specialist",
                1000,
                "I.T support Professional",
                1000,
              ]}
            />
          </h2>
        </span>
      </div>

      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Contact Me
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
