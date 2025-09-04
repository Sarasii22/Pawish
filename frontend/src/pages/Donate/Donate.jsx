import React, { useState } from "react";
import "./Donate.css";
import { Link } from "react-router-dom";
import bowl from "../../assets/donateCards/bowl.png";
import injection from "../../assets/donateCards/injec.png";
import home from "../../assets/donateCards/home.png";
import paws from "../../assets/donateCards/paws.png";

const DonateCard = ({ image, price, description }) => {
  return (
    <div className="donate-card">
      <img src={image} alt={description} className="donatecard-image" />
      <div className="donate-info">
        <h3> ${price}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Donate = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    amount: "",
    cardNo: "",
    expDate: "",
    cvc: "",
    cardholderName: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const donate = [
    { image: bowl, price: "10", description: "Feeds a pet for a week" },
    { image: injection, price: "25", description: "Basic vaccinations plan" },
    { image: home, price: "50", description: "Spay/ neuter procedure" },
    { image: paws, price: "100", description: "Rescue & care for an abandoned pet" },
  ];

  return (
    <div className="donate-container">
        <Link to="/login" className="logout-btn">
            Log Out
        </Link>
        <div className="donate-title">
            <h1>Help Our Furry friends</h1>
            <p>Your donation can make a difference in the lives of animals in need</p>
        </div>
        <div className="donate-cards">
            {donate.map((pet, index) => (
            <DonateCard key={index} {...pet} />
            ))}
        </div>
        <div className="donation-form">
            <h2>Donation Form</h2>
            <div className="form-section">
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Amount ($)</label>
                    <input type="number" name="amount" value={formData.amount} onChange={handleChange} />
                </div>
            </div>
            <div className="form-section">
                <div className="form-group">
                    <label>Card No.</label>
                    <input type="text" name="cardNo" value={formData.cardNo} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Exp. Date</label>
                    <input type="text" name="expDate" value={formData.expDate} onChange={handleChange} placeholder="MM/YY" />
                </div>
                <div className="form-group">
                    <label>CVC</label>
                    <input type="text" name="cvc" value={formData.cvc} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Cardholder Name</label>
                    <input type="text" name="cardholderName" value={formData.cardholderName} onChange={handleChange} />
                </div>
            </div>
        </div>
        <div>
            <button className="button" type="submit">Donate Now</button>
        </div> {/*car payment ekat link kranna one */}
        
        
    </div>
  );
};

export default Donate;