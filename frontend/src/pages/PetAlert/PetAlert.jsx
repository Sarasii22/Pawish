import React, { /*useState*/ } from "react";
import "./PetAlert.css";
import { Link } from "react-router-dom";

const PetAlert = () => {
    return (
        <div className="petalert-container">
           <Link to="/login" className="logout-btn">
                Log Out
            </Link> 
            <div className="petalert-title">
                <h1>Help a Pet Find a Home</h1>
                <p>Every pet deserves love. If you know one waiting for a second chance, let us help you give them hope.</p>
            </div>
        </div>
    );
};

export default PetAlert;