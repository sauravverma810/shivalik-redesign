import React from "react";
import "../css/collaboration.css";

import iitm from "../assets/iitm.png";
import iitropar from "../assets/iitropar.png";
import iitroorkee from "../assets/iitroorkee.png";
import lnt from "../assets/lnt.png";
import campus from "../assets/campus.jpg";

function IndustryCollaborations() {
  const data = [
    {
      title: "IIT Mandi",
      img: iitm,
      desc: "Partnered with IIT Mandi, Shivalik College of Engineering offers a world-class education that aligns with emerging technologies. IIT-integrated specialization programs in Data Science and IoT provide mentorship from IIT experts."
    },
    {
      title: "IIT Ropar",
      img: iitropar,
      desc: "In partnership with IIT Ropar, the college offers B.Tech specialization in AI & ML. The curriculum covers machine learning, deep learning, NLP, computer vision, and AI ethics."
    },
    {
      title: "IIT Roorkee",
      img: iitroorkee,
      desc: "In collaboration with IIT Roorkee, the college provides industry-aligned specialization in AI & Deep Learning. Focused on experiential learning, research exposure, and innovation."
    },
    {
      title: "Larsen & Toubro Limited",
      img: lnt,
      desc: "Through collaboration with L&T EduTech, Shivalik College offers skill-driven programs in engineering and management — focusing on Digital Manufacturing, FinTech, and Business Analytics."
    }
  ];

  return (
    <section
      className="industry-section"
      style={{ backgroundImage: `url(${campus})` }}
    >
      <div className="industry-overlay"></div>

      <div className="industry-content">
        <h2>Industry & Institute Collaborations</h2>
        <p className="industry-subtitle">
          Innovating through strategic partnerships
        </p>

        <div className="industry-grid">
          {data.map((item, index) => (
            <div className="industry-card" key={index}>
              <div className="industry-logo">
                <img src={item.img} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustryCollaborations;
