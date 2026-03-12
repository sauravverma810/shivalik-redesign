import React from "react";
import "../css/navbar.css";
import logo from "../assets/logo.png";
import naac from "../assets/naac.png";   

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaSearch
} from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">

      {/* ===== Top Black Bar ===== */}
      <div className="nav-top">
        <div className="nav-links-left">
          <a href="#">About</a>
          <a href="#">Alumni</a>
          <a href="#">Student Area</a>
          <a href="#">Notice & Event</a>
          <a href="#">Gallery</a>
        </div>

        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </div>

      {/* ===== Main Navbar ===== */}
      <div className="nav-main">

        {/* Logo Section */}
        <div className="logo-section">
          <img src={logo} alt="Shivalik College Logo" className="main-logo" />
          <img src={naac} alt="NAAC A+ Grade" className="naac-logo" />
        </div>

        <nav className="menu">

          <div className="dropdown">
            <a href="#">Academics</a>
            <div className="dropdown-content">
              <a href="#">Departments</a>
              <a href="#">Faculty</a>
              <a href="#">Syllabus</a>
            </div>
          </div>

          <div className="dropdown">
            <a href="https://shivalikcollege.edu.in/apply-now/?">Admissions</a>
            <div className="dropdown-content">
              <a href="https://shivalikcollege.edu.in/apply-now/?">Apply Online</a>
              <a href="#">Eligibility</a>
              <a href="#">Fee Structure</a>
            </div>
          </div>

          <div className="dropdown">
            <a href="#">Placements</a>
            <div className="dropdown-content">
              <a href="#">Welcome To Career Development Cell</a>
              <a href="#">Placement</a>
              <a href="#">Our Recruitment Partners</a>
              <a href="#">Industry Tieups</a>
              <a href="#">Trainings for Enhancing Employability</a>
              <a href="#">Team Training & Placement</a>
            </div>
          </div>

          <div className="dropdown">
            <a href="https://shivalikcollege.edu.in/ihub-cbii/">CBII / iHub</a>
            <div className="dropdown-content">
              <a href="https://shivalikcollege.edu.in/ihub-cbii/">About CBII</a>
              <a href="#">Innovation Hub</a>
              <a href="#">Startup Support</a>
            </div>
          </div>

          <a href="https://erp.shivalikcollege.edu.in/?_gl=1*3je075*_gcl_au*MTA2NTgyMjcxOC4xNzcwNzQ2Mjc5*_ga*NzA1NzUzMDcxLjE3MzYwMDQ5NTI.*_ga_CF5QHF662G*czE3NzE0MzIyMzAkbzI1JGcxJHQxNzcxNDMzNDE0JGo2MCRsMCRoMA." className="https://erp.shivalikcollege.edu.in/?_gl=1*3je075*_gcl_au*MTA2NTgyMjcxOC4xNzcwNzQ2Mjc5*_ga*NzA1NzUzMDcxLjE3MzYwMDQ5NTI.*_ga_CF5QHF662G*czE3NzE0MzIyMzAkbzI1JGcxJHQxNzcxNDMzNDE0JGo2MCRsMCRoMA.">ERP Login</a>

          <div className="dropdown">
            <a href="#">Courses</a>
            <div className="dropdown-content">
              <a href="#">B.Tech</a>
              <a href="#">BCA</a>
              <a href="#">BBA</a>
              <a href="#">MBA</a>
              <a href="#">Pharmacy</a>
              <a href="#">Diploma</a>
            </div>
          </div>

          <div className="dropdown">
            <a href="#">Research</a>
            <div className="dropdown-content">
              <a href="#">Projects</a>
              <a href="#">Publications</a>
            </div>
          </div>

          <div className="dropdown">
            <a href="#">Campus Life</a>
            <div className="dropdown-content">
              <a href="#">Clubs</a>
              <a href="#">Events</a>
              <a href="#">Sports</a>
            </div>
          </div>

        </nav>

        <div className="right-section">
          <div className="search-icon-wrapper">
            <FaSearch />
          </div>
          <button className="apply-btn">APPLY NOW</button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
