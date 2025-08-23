import React from 'react';
import './Pets.css';
import { Link } from 'react-router-dom';
import dog1 from '../../assets/petsCards/d1.jpg';
import cat1 from '../../assets/petsCards/cat.jpg';
import dog2 from '../../assets/petsCards/dog.jpg';
import img1 from '../../assets/adoptpln/image1.png';
import img2 from '../../assets/adoptpln/image2.png';
import img3 from '../../assets/adoptpln/image3.png';

const PetCard = ({ name, age, location, timeAgo, image }) => {
  return (
    <div className="pet-card">
      <img src={image} alt={name} className="pet-image" />
      <div className="pet-info">
        <h3>{name}</h3>
        <p>Age: {age}</p>
        <p>Location: {location}</p>
        <p>{timeAgo}</p>
        <button className="im-waiting-btn">I'm Waiting</button>
      </div>
    </div>
  );
};

const AdoptPlanningCard = ({ topic, image, description }) => {
  return (
    <div className="adoptpln-card">
      <div className="adoptpln-info">
        <h3>{topic}</h3>
      <img src={image} alt={topic} className="adoptpln-image" />
      
        <p>{description}</p>
      </div>
    </div>
  );
};

const Pets = () => {
  const pets = [
    { name: "Roy", age: "2 weeks", location: "Colombo", timeAgo: "2 hours ago", image: dog1 },
    { name: "Roy", age: "4 weeks", location: "Colombo", timeAgo: "2 hours ago", image: cat1 },
    { name: "Roy", age: "2 weeks", location: "Colombo", timeAgo: "2 hours ago", image: dog2 },
    { name: "Roy", age: "2 weeks", location: "Colombo", timeAgo: "2 hours ago", image: dog1 },
    { name: "Roy", age: "2 weeks", location: "Colombo", timeAgo: "2 hours ago", image: cat1 },
    { name: "Roy", age: "2 weeks", location: "Colombo", timeAgo: "2 hours ago", image: dog2 },
  ];

  const adoptpln = [
    { topic: "Preparing Your Home", image: img1, description: "Tips on making your home safe and welcoming for a new pet." },
    { topic: "Choosing the Right Pet", image: img2, description: "Guidance on selecting a pet that fits your lifestyle and needs." },
    { topic: "Pet Care Basics", image: img3, description: "Essential care tips for new pet owners." },
  ];

  return (
    <div className="pets">
      <div className="pets-header">
        <Link to="/login" className="logout-btn">
          Log Out
        </Link>
        <div className="petspage-text">
          <h1>Find Your New Best Friend</h1>
        </div>
      </div>
      <div className="pets-container">
        {pets.map((pet, index) => (
          <PetCard key={index} {...pet} />
        ))}
      </div>
      <div className="adoptpln-section">
        <h2>Adopt Planning</h2>
        <div className="adoptpln-container">
          {adoptpln.map((item, index) => (
            <AdoptPlanningCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pets;