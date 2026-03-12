import React from "react";
import "../css/mediaNotice.css";

import media1 from "../assets/media1.jpg";
import media2 from "../assets/media2.jpg";
import media3 from "../assets/media3.jpg";
import media4 from "../assets/media4.jpg";

function MediaNotice() {

  const notices = [
    {
      title: "Engineering First year and SIPS Mid term Examination Notice",
      date: "16/11/2021 - 31/12/2021"
    },
    {
      title: "Appointment of Departmental CoDs of CSE, ME ECE and EEE",
      date: "16/11/2021 - 30/11/2021"
    },
    {
      title: "Proctor Board Of Shivalik Group Of Institutions",
      date: "15/11/2021 - 30/06/2022"
    },
    {
      title: "NOTICE-FEE DEPOSIT FINAL REMINDER TO ALL STUDENTS",
      date: "13/11/2021 - 30/06/2022"
    }
  ];

  return (
    <section className="media-notice-section">
      <h2 className="section-title">Media Coverage</h2>

      <div className="media-logos">
        <div className="logo-box">
          <img src={media1} alt="media1" />
        </div>

        <div className="logo-box">
          <img src={media2} alt="media2" />
        </div>

        <div className="logo-box">
          <img src={media3} alt="media3" />
        </div>

        <div className="logo-box">
          <img src={media4} alt="media4" />
        </div>
      </div>
      <div className="notice-container">
        <div className="notice-header">
          CIRCULAR NOTICES
        </div>

        <div className="notice-list">
          {notices.map((item, index) => (
            <div className="notice-row" key={index}>
              <span className="notice-title">{item.title}</span>
              <span className="notice-date">{item.date}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default MediaNotice;