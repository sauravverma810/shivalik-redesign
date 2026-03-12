import React from "react";
import "../css/footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Apply Online</li>
            <li>Campus Virtual Tour</li>
            <li>Student Clubs</li>
            <li>Guest Lecture</li>
            <li>Fee Structure 2025</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>OTHER QUICK LINKS</h4>
          <ul>
            <li>Affiliation & Approvals</li>
            <li>Admission Process</li>
            <li>Career Form</li>
            <li>Alumni Association</li>
            <li>NAAC A++</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>COURSES OFFERED</h4>
          <ul>
            <li>B.Tech CE</li>
            <li>B.Tech CSE</li>
            <li>B.Tech AI/ML</li>
            <li>MBA</li>
            <li>BBA</li>
          </ul>
        </div>

        <div className="footer-col contact">
          <h4>CONTACT US</h4>
          <p>Shimla Bypass Rd, Sherpur, Dehradun</p>
          <p>+91 9997155111</p>
          <p>info@shivalikcollege.edu.in</p>

          <div className="map-box">
            <iframe
              src="https://www.google.com/maps?q=Shivalik+College+of+Engineering+Dehradun&output=embed"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Shivalik College Map"
            ></iframe>
          </div>
        </div>

      </div>

      <div className="footer-card">
        <h3>Shivalik College of Engineering</h3>
        <p>
          Strives to be a community of academics, students and researchers
          working in cooperation and innovation.
        </p>

        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>

          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>

          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 SHIVALIK COLLEGE OF ENGINEERING — All Rights Reserved
      </div>

    </footer>
  );
}

export default Footer;