import React from "react";
import "../css/labs.css";

import lab1 from "../assets/lab1.jpg";
import lab2 from "../assets/lab2.jpg";
import lab3 from "../assets/lab3.jpg";

function Labs() {
  return (
    <section className="labs-section">

      <div className="labs-container">

        <h2 className="labs-heading">
          Explore Dehradun’s Top-Tier Labs for <br />
          Hands-On Learning and Practical Excellence
        </h2>

        <div className="labs-grid">

          <div className="lab-card">
            <img src={lab1} alt="Computer Lab" />
          </div>

          <div className="lab-card">
            <img src={lab2} alt="AI Lab" />
          </div>

          <div className="lab-card">
            <img src={lab3} alt="Robotics Lab" />
          </div>

        </div>

      </div>

    </section>
  );
}

export default Labs;