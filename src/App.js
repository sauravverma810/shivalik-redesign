import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Departments from "./components/Departments";
import IndustryCollaborations from "./components/IndustryCollaborations";
import Chairman from "./components/Chairman";
import Leaders from "./components/Leaders";
import Labs from "./components/Labs";  
import AdmissionHero from "./components/AdmissionHero";
import CampusTour from "./components/CampusTour";
import Alumni from "./components/Alumni";
import MediaNotice from "./components/MediaNotice";
import Footer from "./components/Footer";   

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Departments />
      <IndustryCollaborations />
      <Chairman />
      <Leaders />
      <Labs />  
      <AdmissionHero />
      <CampusTour /> 
      <Alumni />
      <MediaNotice />
      <Footer />   {/* ✅ Footer Added */}
    </>
  );
}

export default App;