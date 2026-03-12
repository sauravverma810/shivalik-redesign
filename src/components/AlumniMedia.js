import React from "react";
import "../css/alumniMedia.css";

function AlumniMedia() {

  const alumni = [
    {
      name: "Vishal",
      course: "BTECH | CSE",
      text: "I am extremely grateful to have attended Shivalik College of Engineering for my Computer Science degree. The education provided was top-notch, and the professors were knowledgeable and always willing to help.",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Ankita Sharma",
      course: "BTECH | ECE 2017–21",
      text: "My journey at SCE was filled with knowledge, support, and opportunities that shaped my professional life. I’ll always cherish the environment that encouraged creativity and leadership.",
      img: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Rahul Verma",
      course: "MBA | 2018–20",
      text: "Shivalik College gave me the confidence and vision to pursue my dreams. The practical learning environment and experienced faculty made all the difference.",
      img: "https://randomuser.me/api/portraits/men/55.jpg"
    }
  ];

  return (
    <>
      <section className="alumni-section">
        <h2>Alumni Voice</h2>

        <div className="alumni-container">
          {alumni.map((item, index) => (
            <div className="alumni-card" key={index}>
              <div className="alumni-header">
                <img src={item.img} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.course}</span>
                </div>
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="media-section">
        <h2>Media Coverage</h2>

        <div className="media-container">
          <div className="media-card">Dainik Jagran</div>
          <div className="media-card">Amar Ujala</div>
          <div className="media-card">Hindustan</div>
          <div className="media-card">Sahara India</div>
        </div>
      </section>
    </>
  );
}

export default AlumniMedia;