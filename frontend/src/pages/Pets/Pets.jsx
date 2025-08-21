import React from 'react';
import './Pets.css'; // Optional: if you have styles
import { Link } from 'react-router-dom';

const Pets = () => {
  return (
    <div>
      <div className="pets">
      <Link to="/login" className="logout-btn">
        Log Out
       </Link> 
      </div> 
      
    </div>
  );
};

export default Pets;