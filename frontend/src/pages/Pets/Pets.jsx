import React from 'react';
import './Pets.css';
import { Link } from 'react-router-dom';
import dog1 from '../../assets/petsCards/d1.jpg';
import cat1 from '../../assets/petsCards/cat.jpg';
import dog2 from '../../assets/petsCards/dog.jpg';
import img1 from '../../assets/adoptpln/image1.png';
import img2 from '../../assets/adoptpln/image2.png';
import img3 from '../../assets/adoptpln/image3.png';
import g1 from '../../assets/gallery/pet 1.png';
import g2 from '../../assets/gallery/pet 2.png';
import g3 from '../../assets/gallery/pet 3.png';
import g4 from '../../assets/gallery/pet 4.png';
import g5 from '../../assets/gallery/pet 5.png';
import g6 from '../../assets/gallery/pet 6.png';
import g7 from '../../assets/gallery/pet 7.png';
import g8 from '../../assets/gallery/pet 8.png';

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
    { topic: "The joy of pet adoption", image: img1, description: "Bringing a pet into your life can be an incredibly rewarding experience, not just for you but for the furry friend you welcome into your home. There’s a special kind of magic that comes with adopting any companion animal." },
    { topic: "A Guide to Pet Adoption", image: img2, description: "Are you considering adding a new pet to your family? Pet adoption is a wonderful option to consider. The journey of finding the ideal companion involves careful thought, research, and planning, but the rewards are immeasurable." },
    { topic: "Healing Power of Animal", image: img3, description: "Animals have an extraordinary ability to touch our lives in profound ways, offering not only companionship but also a therapeutic bond that can positively impact our physical, mental, and emotional well-being" },
  ];

  const images = [
    { src: g1, alt: "Pet 1" },
    { src: g2, alt: "Pet 2" },
    { src: g3, alt: "Pet 3" },
    { src: g4, alt: "Pet 4" },
    { src: g5, alt: "Pet 5" },
    { src: g6, alt: "Pet 6" },
    { src: g7, alt: "Pet 7" },
    { src: g8, alt: "Pet 8" },
     // Adjusted to use g1 instead of path if duplicate is intentional
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
        <h2>Planning to Adopt a Pet ?</h2>
        <div className="adoptpln-container">
          {adoptpln.map((item, index) => (
            <AdoptPlanningCard key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="pets-footer">
        <h2>Happy Tails – Pets Who Found a Home!</h2>
        <div className="gallery-container">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.alt} className="gallery-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pets;