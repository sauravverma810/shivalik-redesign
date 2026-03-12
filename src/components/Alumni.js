import React, { useState } from "react";
import "../css/alumni.css";

function Alumni() {
  const [active, setActive] = useState(0);

  const alumniData = [
    {
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "It was my immense luck and fortune to be part of Shivalik College of Engineering where I have grown.",
      name: "Gaurav Srivastav",
      course: "Civil Engineering 2012–16"
    },
    {
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "I am really thankful to Shivalik College because besides studies it shaped my personality.",
      name: "Shikha Kumari",
      course: "B.Sc. Agriculture 2017–21"
    }
  ];

  return (
    <section className="alumni-section">
      <h2>
        Alumni <span>Voices</span>
      </h2>

      <div className="alumni-wrapper">
        {alumniData.map((item, index) => (
          <div className="alumni-card" key={index}>
            <div className="alumni-img">
              <img src={item.img} alt={item.name} />
            </div>

            <div className="alumni-content">
              <p>"{item.text}"</p>
              <h3>{item.name}</h3>
              <span>{item.course}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="dots">
        <span
          className={active === 0 ? "active" : ""}
          onClick={() => setActive(0)}
        ></span>
        <span
          className={active === 1 ? "active" : ""}
          onClick={() => setActive(1)}
        ></span>
      </div>
    </section>
  );
}

export default Alumni;