import React from "react";
import "../css/leaders.css";

import viceChairman from "../assets/vicechairman.jpg";
import director from "../assets/director.jpg";
import principal from "../assets/principal.jpg";
import pant from "../assets/pant.jpg";

function Leaders() {

  const leaders = [
    {
      name: "Mr. Ajay Kumar",
      designation: "Vice Chairman",
      img: viceChairman,
      short: "At Shivalik College, we not only flourish to create an equilibrium that is scholastically enriching, but also additionally focus on the overall development of our students. In other  to become true citizens of the world in careers or as entrepreneurs.From the very first day, we plan their education as an end-to-end process, from making our students comfortable with the academic the best facilities and faculty."
    },
    {
      name: "Prof. (Dr.) T.S. Sidhu",
      designation: "Director",
      img: director,
      short: "It is a privilege to lead Shivalik College of Engineering, an institution committed to excellence in higher education and recognized for its academic distinction and progressive vision. With NAAC A+ accreditation, NBA accreditation for the CSE program, and the prestigious status of a UGC Autonomous Institution, Shivalik stands as a benchmark of quality and credibility in Technical."
    },
    {
      name: "Prof. (Dr.) Sayantan Mukhopadhyay",
      designation: "Principal",
      img: principal,
      short: "What is education? You may already be aware of the bookish meaning of the term. However, for me education drives away obliviousness in an individual and provides confidence and certaintyto perform ."
    },
    {
      name: "Dr. Surmadhur Pant",
      designation: "Director Admission",
      img: pant,
      short: "As the Dean of Student Welfare and Director Admissions, my primary focus is to ensure that each student receives the support they need to grow not just academically, but holistically."
    }
  ];

  return (
    <section className="leaders-section">
      <h2 className="leaders-heading">Leadership Team</h2>

      <div className="leaders-container">
        {leaders.map((leader, index) => (
          <div className="leader-card" key={index}>
            <img src={leader.img} alt={leader.name} />

            <div className="leader-content">
              <h3>{leader.name}</h3>
              <span>{leader.designation}</span>
              <p>{leader.short}</p>
              <button className="read-btn">
                Read More
              </button>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Leaders;
