import React from "react";
import "../css/campusTour.css";

function CampusTour() {
  return (
    <section className="campus-section">

      <div className="campus-content">
        <h2>Explore Our Campus Tour</h2>

        <p>
          Discover the vibrant campus life, modern infrastructure,
          advanced laboratories, and world-class facilities at our institution.
        </p>

        <p>
          Take a virtual walk through classrooms, innovation labs,
          sports complexes, and student activity zones.
        </p>

        <p className="programs">
          <strong>Experience:</strong> Campus View, Pharmacy Labs,
          BBA Block, NCC Activities and more.
        </p>

        <a
          href="https://youtu.be/xky52hMEHKE"
          target="_blank"
          rel="noopener noreferrer"
          className="learn-more"
        >
          Watch Full Tour →
        </a>
      </div>

      <div className="campus-video">
        <iframe
          src="https://www.youtube.com/embed/xky52hMEHKE?autoplay=1&mute=1&controls=1&rel=0"
          title="Campus Tour Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

    </section>
  );
}

export default CampusTour;