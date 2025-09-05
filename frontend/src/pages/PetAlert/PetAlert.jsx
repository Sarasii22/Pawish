import React from "react";
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
                <div className="form-section">
                    <h3>Pet Details</h3>
                    <div className="form-group">
                        <label>Pet Name</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>Species</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>Breed (if known)</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>Gender</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>Behavior</label>
                        <input type="text" />                        
                    </div>
                    <div className="form-group">
                        <label>Health Condition</label>
                        <input type="radio" name="health" /> No Issues
                        <input type="radio" name="health" /> Minor Care                        
                    </div>
                    <div className="form-group">
                        <label>Good with kids/other pets?</label>
                        <input type="radio" name="goodWith" /> Yes
                        <input type="radio" name="goodWith" /> No                    
                    </div>
                </div>
                <div className="form-section">
                    <h3>Location Info</h3>
                    <div className="form-group">
                        <label>City/Town</label>
                        <input type="text" />                        
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" />                        
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="text" />                        
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="text" />                        
                    </div>
                </div>   
                <div className="form-section">
                    <div className="form-group">
                        <label>Pet Profile Photo</label>
                        <div className="upload-container">
                            <input type="file" accept="image/*" className="upload-input" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Images</label>
                        <div className="image-upload">
                            <div className="upload-container">
                                <input type="file" accept="image/*" className="upload-input" />
                            </div>
                            <div className="upload-container">
                                <input type="file" accept="image/*" className="upload-input" />
                            </div>
                            <div className="upload-container">
                                <input type="file" accept="image/*" className="upload-input" />
                            </div>         
                        </div>                                     
                    </div>
                    <div className="form-text">
                        <div className="form-group">
                            <label>Pet's story or anything special</label>
                            <textarea rows="4"></textarea>                        
                        </div>
                        <div className="form-group">
                            <label>Reason for giving up</label>
                            <textarea rows="4"></textarea>                        
                        </div>  
                    </div>                  
                </div>
                <div className="checkbox-container">
                    <label className="checkbox-label">
                        <input type="checkbox" /> I confirm the above details are true
                    </label>
                    <br />
                    <label className="checkbox-label">
                        <input type="checkbox" /> I agree to follow PetCare's adoption policies
                    </label>
                </div>
            </div>
        </div>
    );
};

export default PetAlert;