import React, { useState, useEffect } from "react";
import "./AdoptionApplication.css";
import {  useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const AdoptionApplication = () => {
  const [formData, setFormData] = useState({
    petId: '',
    fullName: '',
    address: '',
    phone: '',
    email: '',
    livingSituation: '',
    experience: '',
    reason: '',
    confirmDetails: false,
    agreePolicies: false,
  });
  const [pets, setPets] = useState([]);
  const navigate = useNavigate();
  const { petId } = useParams();

  useEffect(() => {
    axios.get('/api/pets')
      .then(res => {
        setPets(res.data);
        if (petId) setFormData(prev => ({ ...prev, petId }));
      })
      .catch(err => console.error('Error fetching pets:', err));
  }, [petId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.confirmDetails || !formData.agreePolicies) {
      alert('Please confirm all details are true and agree to adoption policies.');
      return;
    }
    try {
      const res = await axios.post('/api/adoptions', formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      alert(res.data.message);
      setFormData({
        petId: '',
        fullName: '',
        address: '',
        phone: '',
        email: '',
        livingSituation: '',
        experience: '',
        reason: '',
        confirmDetails: false,
        agreePolicies: false,
      });
      navigate('/homepage');
    } catch (err) {
      alert(err.response?.data?.error || 'Submission failed');
    }
  };

  return (
    <div className="adopapp-container">
      <button className="logout-btn" onClick={() => {
        localStorage.removeItem('token');
        navigate('/login');
      }}>
        Log Out
      </button>
      <div className="adopapp-title">
        <h1>Adopt a Pet</h1>
      </div>
      <div className="adopapp-guide">
        <div className="adopapp-steps">
          <div className="step">
            <h3>You’re not just adopting a pet—you’re giving a life a chance to be loved.</h3>
          </div>
          <div className="step">
            <h2>Before you apply ...</h2>
            <ul>
              <li>Be honest in the form to help us match you with the right pet.</li>
              <li>Pets need time, love, and patience to adjust to a new home.</li>
              <li>Make sure your daily routine allows time for care and play.</li>
              <li>Talk with your family or housemates before adopting.</li>
              <li>Some pets may need special care—be prepared.</li>
              <li>A quick home check or interview may be part of the process.</li>
              <li>You're changing a life—thank you for choosing adoption!</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="petalert-form">
        <h2>Adoption Application Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Pet Selection</h3>
            <div className="form-group">
              <label>Pet</label>
              <select name="petId" value={formData.petId} onChange={handleChange} required>
                <option value="">Select Pet</option>
                {pets.map(pet => (
                  <option key={pet._id} value={pet._id}>{pet.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-section">
            <h3>Applicant Details</h3>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="text" name="email" value={formData.email} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-section">
            <div className="form-text">
              <div className="form-group">
                <label>Living Situation</label>
                <textarea name="livingSituation" rows="4" value={formData.livingSituation} onChange={handleChange}></textarea>
              </div>
              <div className="form-group">
                <label>Pet Experience</label>
                <textarea name="experience" rows="4" value={formData.experience} onChange={handleChange}></textarea>
              </div>
              <div className="form-group">
                <label>Reason for Adoption</label>
                <textarea name="reason" rows="4" value={formData.reason} onChange={handleChange}></textarea>
              </div>
            </div>
          </div>
          <div className="checkbox-container">
            <label className="checkbox-label">
              <input type="checkbox" name="confirmDetails" className="checkbox-input" checked={formData.confirmDetails} onChange={handleChange} required /> I confirm the above details are true
            </label>
            <label className="checkbox-label">
              <input type="checkbox" name="agreePolicies" className="checkbox-input" checked={formData.agreePolicies} onChange={handleChange} required /> I agree to follow PetCare's adoption policies
            </label>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AdoptionApplication;