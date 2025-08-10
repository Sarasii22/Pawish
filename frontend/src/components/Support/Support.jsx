import React from "react";
import "./Support.css";
import supportImage from "../../assets/support/donate us.png"; // Example image path

const Support = () => {
    return (
        <div className="support">
        <div className="support-container">
            <img src={supportImage} alt="Support Us" className="support-image" />
            <div className="support-content">
                <h1>Support Our Mission</h1>
                <p>Your donation helps us provide care, shelter, and
                medical treatment to pets in need. By donating you
                become a vital part of our mission to save and improve
                the lives of animals.</p>

                <p>Whether it's a one-time contribution or a monthly
                pledge, every donation helps us make a difference in
                the lives of pets awaiting their forever homes!</p>

                <p>Together, we can give these animals the love and care
                they deserve. Please consider making a donation
                today!</p>
            </div>
        </div>
        <div className="support-button">
            <button className="button">Donate Now</button>
        </div>
        </div>
    );
};

export default Support;