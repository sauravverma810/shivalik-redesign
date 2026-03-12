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
          <a href="https://alumni.shivalikcollege.edu.in/page/About-Us.dz">About</a>
          <a href="https://alumni.shivalikcollege.edu.in/?">Alumni</a>
          <a href="https://shivalikcollege.edu.in/disabledfriendlycampus/">Student Area</a>
          <a href="https://shivalikcollege.edu.in/category/newsevents/">Notice & Event</a>
          <a href="https://shivalikcollege.edu.in/gallery/">Gallery</a>
        </div>

        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </div>
      <div className="nav-main">

        <div className="logo-section">
          <img src={logo} alt="Shivalik College Logo" className="main-logo" />
          <img src={naac} alt="NAAC A+ Grade" className="naac-logo" />
        </div>

        <nav className="menu">

          <div className="dropdown">
            <a href="https://shivalikcollege.edu.in/course/shivalik-college-of-engineering/">Academics</a>
            <div className="dropdown-content">
              <a href="https://shivalikcollege.edu.in/course/shivalik-college-of-engineering/">Departments</a>
              <a href="https://shivalikcollege.edu.in/course/shivalik-college-of-engineering/">Faculty</a>
              <a href="https://shivalikcollege.edu.in/course/shivalik-college-of-engineering/">Syllabus</a>
            </div>
          </div>

          <div className="dropdown">
            <a href="https://shivalikcollege.edu.in/apply-now/?">Admissions</a>
            <div className="dropdown-content">
              <a href="https://shivalikcollege.edu.in/apply-now/?">Apply Online</a>
              <a href="https://shivalikcollege.edu.in/prospectus/">Eligibility</a>
              <a href="https://shivalikcollege.edu.in/fee-structure/">Fee Structure</a>
            </div>
          </div>

          <div className="dropdown">
            <a href="https://shivalikcollege.edu.in/placement-2/about-dotp-overview/">Placements</a>
            <div className="dropdown-content">
              <a href="https://shivalikcollege.edu.in/placement/">Welcome To Career Development Cell</a>
              <a href="https://shivalikcollege.edu.in/placement/">Placement</a>
              <a href="https://shivalikcollege.edu.in/placement/">Our Recruitment Partners</a>
              <a href="https://shivalikcollege.edu.in/placement/industrytieups/">Industry Tieups</a>
              <a href="https://shivalikcollege.edu.in/placement-2/placement-team/">Trainings for Enhancing Employability</a>
              <a href="https://shivalikcollege.edu.in/placement-2/placement-team/">Team Training & Placement</a>
            </div>
          </div>

          <div className="dropdown">
            <a href="https://shivalikcollege.edu.in/ihub-cbii/">CBII / iHub</a>
            <div className="dropdown-content">
              <a href="https://shivalikcollege.edu.in/ihub-cbii/">About CBII</a>
              <a href="https://shivalikcollege.edu.in/startups/">Innovation Hub</a>
              <a href="https://shivalikcollege.edu.in/startups/">Startup Support</a>
            </div>
          </div>

          <a href="https://erp.shivalikcollege.edu.in/?_gl=1*3je075*_gcl_au*MTA2NTgyMjcxOC4xNzcwNzQ2Mjc5*_ga*NzA1NzUzMDcxLjE3MzYwMDQ5NTI.*_ga_CF5QHF662G*czE3NzE0MzIyMzAkbzI1JGcxJHQxNzcxNDMzNDE0JGo2MCRsMCRoMA." className="https://erp.shivalikcollege.edu.in/?_gl=1*3je075*_gcl_au*MTA2NTgyMjcxOC4xNzcwNzQ2Mjc5*_ga*NzA1NzUzMDcxLjE3MzYwMDQ5NTI.*_ga_CF5QHF662G*czE3NzE0MzIyMzAkbzI1JGcxJHQxNzcxNDMzNDE0JGo2MCRsMCRoMA.">ERP Login</a>

          <div className="dropdown">
            <a href="https://shivalikcollege.edu.in/admissions/apply-online/">Courses</a>
            <div className="dropdown-content">
              <a href="https://shivalikcollege.edu.in/admissions/apply-online/">B.Tech</a>
              <a href="https://shivalikcollege.edu.in/admissions/apply-online/">BCA</a>
              <a href="https://shivalikcollege.edu.in/admissions/apply-online/">BBA</a>
              <a href="https://shivalikcollege.edu.in/admissions/apply-online/">MBA</a>
              <a href="https://shivalikcollege.edu.in/admissions/apply-online/">Pharmacy</a>
              <a href="https://shivalikcollege.edu.in/admissions/apply-online/">Diploma</a>
            </div>
          </div>

          <div className="dropdown">
            <a href="https://shivalikcollege.edu.in/research/">Research</a>
            <div className="dropdown-content">
              <a href="https://shivalikcollege.edu.in/research/">Projects</a>
              <a href="https://shivalikcollege.edu.in/research/">Publications</a>
            </div>
          </div>

          <div className="dropdown">
            <a href="https://shivalikcollege.edu.in/student-resources/student-clubs/">Campus Life</a>
            <div className="dropdown-content">
              <a href="https://shivalikcollege.edu.in/student-resources/student-clubs/">Clubs</a>
              <a href="https://shivalikcollege.edu.in/student-resources/student-clubs/">Events</a>
              <a href="https://shivalikcollege.edu.in/student-resources/student-clubs/">Sports</a>
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
