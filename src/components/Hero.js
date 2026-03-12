import React from "react";
import "../css/hero.css";
import heroImage from "../assets/hero2.png";   
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaCheck
} from "react-icons/fa";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          <span className="gold">Shivalik</span>
          <br />
          <span className="white">College of Engineering</span>
        </h1>

        <p>
          Empowering Minds, Building Futures with Excellence & Innovation
        </p>

        <div className="hero-buttons">
          <button className="explore-btn">EXPLORE PROGRAMS</button>
          <button className="tour-btn">CAMPUS TOUR</button>
        </div>
      </div>

      <div className="floating-buttons">
        <a href="/admissions" className="float-item">
          <span className="label">Apply Now</span>
          <div className="icon-box apply">
            <FaCheck />
          </div>
        </a>
        <a href="tel:+919876543210" className="float-item">
          <span className="label">Call Us</span>
          <div className="icon-box">
            <FaPhoneAlt />
          </div>
        </a>
        <a href="mailto:info@shivalikcollege.edu" className="float-item">
          <span className="label">Email Us</span>
          <div className="icon-box">
            <FaEnvelope />
          </div>
        </a>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="float-item"
        >
          <span className="label">WhatsApp</span>
          <div className="icon-box">
            <FaWhatsapp />
          </div>
        </a>

      </div>

    </section>
  );
}

export default Hero;