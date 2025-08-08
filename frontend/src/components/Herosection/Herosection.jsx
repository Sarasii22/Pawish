import React from "react";
import './Herosection.css';
import d1image from "../../assets/d1.jpg"; // Adjust the path as necessary
import donationImage from "../../assets/donation.png"; // Adjust the path as necessary
import adoptionImage from "../../assets/pet heart.png"; // Adjust the path as necessary
import volunteerImage from "../../assets/volenteer.png"; // Adjust the path as necessary

const Herosection = () => {
  return (
    <div>
    <div className="hero-section">
      <div className="hero-image">
        <img src={d1image} alt="Hero" />
      </div>  
      <div className="hero-content">
        <h1>Not Only People Need a Home</h1>
        <p>Every soul deserves the warmth of a home, even the ones that walk on four legs. Open your heart, and you might just find your best friend waiting</p>
        <button className="hero-button">Login</button>
      </div>
    </div>
    <div className="card-section">
      <div className="card">
        <img src={adoptionImage} alt="Adoption" />
        <h2>Adopt a Pet</h2>
      </div>
      <div className="card">
        <img src={volunteerImage} alt="Volunteer" />
        <h2>Be a Volunteer</h2>
      </div>
      <div className="card">
        <img src={donationImage} alt="Donation" />
        <h2>Donate for Them</h2>
      </div>
      
    </div>
    </div>
  );
}

export default Herosection;