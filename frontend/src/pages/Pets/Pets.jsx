import React from 'react';
import './Pets.css'; // Optional: if you have styles
import { Link } from 'react-router-dom';

const Pets = () => {
  return (
   
    <div className="pets">
      <div className="pets-header">
        <Link to="/login" className="logout-btn">
          Log Out
        </Link> 
        <div className="petspage-text">
          <h1>They don’t ask for much—just a safe place and a kind soul.</h1>
        </div>
      </div>
    </div> 
      
 
  );
};

export default Pets;