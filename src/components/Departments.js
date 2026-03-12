import React from "react";
import "../css/departments.css";

import cse from "../assets/cse.jpg";
import mech from "../assets/mech.jpg";
import civil from "../assets/civil.jpg";
import eee from "../assets/eee.jpg";
import ece from "../assets/ece.jpg";
import mba from "../assets/mba.jpg";
import pharmacy from "../assets/pharmacy.jpg";
import agriculture from "../assets/agriculture.jpg";

function Departments() {
  const departments = [
    { name: "Computer Science & Engineering", img: cse },
    { name: "Mechanical Engineering", img: mech },
    { name: "Civil Engineering", img: civil },
    { name: "Electrical & Electronics Engineering", img: eee },
    { name: "Electronics & Communication Engineering", img: ece },
    { name: "MBA (Management Studies)", img: mba },
    { name: "Pharmacy", img: pharmacy },
    { name: "B.Sc Agriculture", img: agriculture }
  ];

  return (
    <section className="departments">
      <h2 className="dept-heading">Our Departments</h2>

      <div className="dept-container">
        {departments.map((dept, index) => (
          <div className="dept-card" key={index}>
            
            <div className="dept-image">
              <img src={dept.img} alt={dept.name} />
              <div className="dept-overlay">
                {/* <button className="dept-btn">View More</button> */}
              </div>
            </div>

            <div className="dept-title">
              {dept.name}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Departments;
