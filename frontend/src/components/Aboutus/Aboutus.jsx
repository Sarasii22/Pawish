import React from "react";
import './Aboutus.css';
import aboutimg from "../../assets/about/about 1.png"; // Adjust the path as necessary
import helpedImage from "../../assets/about/paws.png"; // Adjust the path as necessary
import donationsImage from "../../assets/about/donate.png"; // Adjust the path as necessary
import activeImage from "../../assets/about/active.png"; // Adjust the path as necessary

const Aboutus = () => {
  return (
    <div>
    <div className="about-section">
  <div className="about-content">
        <h1>About Us</h1>
        <p>At Pawish, we believe that every animal deserves love, safety, and a place to call home. Our mission is to connect kind-hearted people with pets in need—whether it’s through adoption, donations, or simply sharing their stories. From abandoned puppies to rescued kittens and other forgotten lives, we’re here to give them a second chance. With your support, we’re not just building homes—we’re building hope, one paw at a time.</p>
  </div>
  <div className="about-image">
  <img src={aboutimg} alt="About" />
      </div>
    </div>
    <div className="about-cards-container">
      <div className="about-card">
        <img src={helpedImage} alt="helped" />
        <h1>1200 +</h1>
        <h4>Pets Helped</h4>
      </div>
  <div className="about-card">
        <img src={donationsImage} alt="donations" />
        <h1>$50K +</h1>
        <h4>Donations Raised</h4>
      </div>
  <div className="about-card">
        <img src={activeImage} alt="active" />
        <h1>500 +</h1>
        <h4>Active Campaigns</h4>
      </div>
      
    </div>
    </div>
  );
}

export default Aboutus;