import React from "react";
import './Whyadopt.css'; // Ensure you have the CSS file for styling
import whyAdoptImage from "../../assets/whyadopt/cat 2.jpg"; //
import saveImage from "../../assets/about/paws.png"; // Adjust the path as necessary
import unconditionalImage from "../../assets/whyadopt/heart.png"; // Adjust the path as necessary
import findImage from "../../assets/whyadopt/search.png"; // Adjust the path as necessary
import { useNavigate } from 'react-router-dom'; // Added import for navigation

const Whyadopt = () => {
    const navigate = useNavigate(); // Added hook to get navigate function

    const handleAdoptClick = () => {
        navigate('/application'); // Navigate to the adoption page
    };

    return (
        <div className="why-adopt">
        <h2>Why Adopted a Pet ?</h2>
        <div className="why-adopt-content">
            <p>Adopting a pet not only brings joy and companionship into your life, but it also saves lives. When you adopt, you give a homeless animal a second chance at life and provide them with a loving forever home. Every pet deserves a chance to be loved, so consider adoption today!</p>
            <img src={whyAdoptImage} alt="Why Adopt" />
        </div>
        <div className="why-adopt-reasons">
            <div className="reason">
                <img src={saveImage} alt="Save a Life" />
                <h3>Save a Life</h3>
                <p>Give a homeless pet to second chance at happiness and loving home.</p>
            </div>
            <div className="reason">
                <img src={unconditionalImage} alt="Unconditional Love" />
                <h3>Unconditional Love</h3>
                <p>Experience the endless affection only a rescued pet can give.</p>
            </div>
            <div className="reason">
                <img src={findImage} alt="Find Your Match" />
                <h3>Find Your Match</h3>
                <p>Discover the pet whose personality perfectly complements yours.</p>
            </div>
        </div>
        <div className="adopt-button">
            <button className="button" onClick={handleAdoptClick}>Adopt Now</button> {/* Added onClick handler */}
        </div>
        
        </div>
    );
    }

export default Whyadopt;