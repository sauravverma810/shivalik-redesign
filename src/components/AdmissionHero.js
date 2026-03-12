import React from "react";
import "../css/admissionHero.css";
import { FaCheckCircle, FaPhoneAlt, FaEnvelope, FaPlay } from "react-icons/fa";

function AdmissionHero() {
  return (
    <section className="admission-hero">

      <div className="stats">
        <div>
          <h3>25,000+</h3>
          <p>Successful Alumni</p>
        </div>
        <div>
          <h3>95%</h3>
          <p>Placement Rate</p>
        </div>
        <div>
          <h3>50+</h3>
          <p>Industry Partners</p>
        </div>
        <div>
          <h3>15+</h3>
          <p>Years of Excellence</p>
        </div>
      </div>

      <div className="hero-container">
        <div className="hero-left">

          <span className="badge">Admissions Open 2024</span>

          <h1>
            Start Your Engineering <br />
            <span>Journey Today</span>
          </h1>

          <p className="subtitle">
            Join <strong>25,000+</strong> successful alumni who started their careers at 
            Shivalik College of Engineering. Your dream career begins here.
          </p>

          <div className="features">
            <p><FaCheckCircle /> Industry-Ready Curriculum</p>
            <p><FaCheckCircle /> Modern Campus Facilities</p>
            <p><FaCheckCircle /> Industry Partnerships</p>
            <p><FaCheckCircle /> 100% Placement Assistance</p>
            <p><FaCheckCircle /> Expert Faculty</p>
            <p><FaCheckCircle /> Research Opportunities</p>
          </div>

          <div className="buttons">
            <button className="apply-btn">APPLY NOW →</button>
            <button className="tour-btn">
              <FaPlay /> Virtual Tour
            </button>
            <button className="brochure-btn">Brochure</button>
          </div>

          <div className="contact-info">
            <p><FaPhoneAlt /> +91 9997155111</p>
            <p><FaEnvelope /> admissions@shivalik.edu.in</p>
          </div>

        </div>
        
        <div className="hero-right">

          <div className="form-card">
            <h3>Get Admission Info</h3>
            <p>Fill this form to get complete details about admissions</p>

            <input type="text" placeholder="Full Name *" />
            <input type="email" placeholder="Email Address *" />
            <input type="text" placeholder="Phone Number *" />
            <select>
              <option>Program Interest</option>
              <option>B.Tech</option>
              <option>MBA</option>
              <option>BBA</option>
            </select>

            <button className="submit-btn">
              GET ADMISSION DETAILS
            </button>

            <small>* Our counselor will contact you within 24 hours</small>
          </div>

        </div>

      </div>

    </section>
  );
}

export default AdmissionHero;