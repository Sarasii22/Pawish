import React from "react";
import { useNavigate } from 'react-router-dom';
import './Herosection.css';
import d1image from "../../assets/hero/d1.jpg";
import donationImage from "../../assets/hero/donation.png";
import adoptionImage from "../../assets/hero/pet heart.png";
import volunteerImage from "../../assets/hero/volenteer.png";

const Herosection = ({ buttonText = "Login", navigateTo = "/login", showLogout = false }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate(navigateTo);
  };

  
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div>
      <div className="hero-section">
        <div className="hero-image">
          <img src={d1image} alt="Hero" />
        </div>  
        <div className="hero-content">
          {token && showLogout &&<button className="logout-btn" onClick={handleLogout}>Logout</button>}
          <h1>Not Only People Need a Home</h1>
          <p>Every soul deserves the warmth of a home, even the ones that walk on four legs. Open your heart, and you might just find your best friend waiting</p>
          <button className="hero-button" onClick={handleLoginClick}>{buttonText}</button>
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
};

export default Herosection;