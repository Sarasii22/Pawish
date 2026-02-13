// Frontend: PetAlert.jsx
// No changes needed, as the form submission is already correct.

import React, { useState } from "react";
import "./PetAlert.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const PetAlert = () => {
  const [formData, setFormData] = useState({
    petName: '',
    species: '',
    breed: '',
    age: '',
    ageUnit: 'years',
    gender: '',
    behavior: '',
    health: '',
    goodWith: '',
    cityTown: '',
    address: '',
    phone: '',
    email: '',
    story: '',
    reason: '',
    confirmDetails: false,
    agreePolicies: false,
  });
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const navigate = useNavigate();

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
    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));
    if (profilePhoto) data.append('images', profilePhoto);
    if (image1) data.append('images', image1);
    if (image2) data.append('images', image2);
    if (image3) data.append('images', image3);
    try {
      const res = await axios.post('/api/alerts', data, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      alert(res.data.message);
      setFormData({
        petName: '',
        species: '',
        breed: '',
        age: '',
        ageUnit: 'years',
        gender: '',
        behavior: '',
        health: '',
        goodWith: '',
        cityTown: '',
        address: '',
        phone: '',
        email: '',
        story: '',
        reason: '',
        confirmDetails: false,
        agreePolicies: false,
      });
      setProfilePhoto(null);
      setImage1(null);
      setImage2(null);
      setImage3(null);
      document.querySelectorAll('input[type="file"]').forEach(input => (input.value = ''));
      navigate('/homepage');
    } catch (err) {
      alert(err.response?.data?.error || 'Submission failed');
    }
  };

  return (
    <div className="petalert-container">
      <button className="logout-btn" onClick={() => {
        localStorage.removeItem('token');
        navigate('/login');
      }}>
        Log Out
      </button>
      <div className="petalert-title">
        <h1>Help a Pet Find a Home</h1>
        <p>Every pet deserves love. If you know one waiting for a second chance, let us help you give them hope.</p>
      </div>
      <div className="petalert-guide">
        <h2>Before Posting ...</h2>
        <div className="petalert-steps">
          <div className="step">
            <ul>
              <li>Make sure you’re ready to let go.</li>
              <li>Use clear, kind photos.</li>
              <li>Be honest and detailed.</li>
              <li>You are responsible until they’re adopted.</li>
              <li>Include your location.</li>
              <li>Tell their story.</li>
              <li>No selling of pets allowed.</li>
            </ul>
          </div>
          <div className="step">
            <h3>You’re not just posting an alert—you’re giving a life a chance to be loved.</h3>
          </div>
        </div>
      </div>
      <div className="petalert-form">
        <h2>Pet Alert Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Pet Details</h3>
            <div className="form-group">
              <label>Pet Name</label>
              <input type="text" name="petName" value={formData.petName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Species</label>
              <select name="species" value={formData.species} onChange={handleChange} required>
                <option value="">Select Species</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="bird">Bird</option>
                <option value="rabbit">Rabbit</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Breed (if known)</label>
              <input type="text" name="breed" value={formData.breed} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Age</label>
              <div className="age-selector">
                <input type="number" name="age" min="0" placeholder="Enter number" value={formData.age} onChange={handleChange} required />
                <select name="ageUnit" value={formData.ageUnit} onChange={handleChange}>
                  <option value="days">Days</option>
                  <option value="weeks">Weeks</option>
                  <option value="months">Months</option>
                  <option value="years">Years</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="unknown">Unknown</option>
              </select>
            </div>
            <div className="form-group">
              <label>Behavior</label>
              <select name="behavior" value={formData.behavior} onChange={handleChange}>
                <option value="">Select Behavior</option>
                <option value="friendly">Friendly</option>
                <option value="shy">Shy</option>
                <option value="energetic">Energetic</option>
                <option value="calm">Calm</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Health Condition</label>
              <div className="radio-group">
                <label className="radio-label"><input type="radio" name="health" value="No Issues" checked={formData.health === 'No Issues'} onChange={handleChange} /> No Issues</label>
                <label className="radio-label"><input type="radio" name="health" value="Minor Care" checked={formData.health === 'Minor Care'} onChange={handleChange} /> Minor Care</label>
              </div>
            </div>
            <div className="form-group">
              <label>Good with kids/other pets?</label>
              <div className="radio-group">
                <label className="radio-label"><input type="radio" name="goodWith" value="Yes" checked={formData.goodWith === 'Yes'} onChange={handleChange} /> Yes</label>
                <label className="radio-label"><input type="radio" name="goodWith" value="No" checked={formData.goodWith === 'No'} onChange={handleChange} /> No</label>
              </div>
            </div>
          </div>
          <div className="form-section">
            <h3>Location Info</h3>
            <div className="form-group">
              <label>City/Town</label>
              <input type="text" name="cityTown" value={formData.cityTown} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="text" name="email" value={formData.email} onChange={handleChange} />
            </div>
          </div>
          <div className="form-section">
            <div className="form-group">
              <label>Pet Profile Photo</label>
              <div className="upload-container">
                <input type="file" accept="image/*" className="upload-input" onChange={(e) => setProfilePhoto(e.target.files[0])} />
              </div>
            </div>
            <div className="form-group">
              <label>Images</label>
              <div className="image-upload">
                <div className="upload-container">
                  <input type="file" accept="image/*" className="upload-input" onChange={(e) => setImage1(e.target.files[0])} />
                </div>
                <div className="upload-container">
                  <input type="file" accept="image/*" className="upload-input" onChange={(e) => setImage2(e.target.files[0])} />
                </div>
                <div className="upload-container">
                  <input type="file" accept="image/*" className="upload-input" onChange={(e) => setImage3(e.target.files[0])} />
                </div>
              </div>
            </div>
            <div className="form-text">
              <div className="form-group">
                <label>Pet's story or anything special</label>
                <textarea name="story" rows="4" value={formData.story} onChange={handleChange}></textarea>
              </div>
              <div className="form-group">
                <label>Reason for giving up</label>
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

export default PetAlert;