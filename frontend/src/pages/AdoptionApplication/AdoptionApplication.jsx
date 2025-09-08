import React from "react";
import "./AdoptionApplication.css";
import { Link } from "react-router-dom";

const AdoptionApplication = () => {
    return (
        <div className="adopapp-container">
            <Link to="/login" className="logout-btn">
                Log Out
            </Link>
            <div className="adopapp-title">
                <h1>Adopt a Pet</h1>
                
            </div>
            <div className="adopapp-guide">
                
                <div className="adopapp-steps">
                    <div className="step">
                        <h3>You’re not just posting an alert—you’re giving a life a chance to be loved.</h3>
                    </div>
                    <div className="step">
                        <h2>Before you apply ...</h2>
                        <ul>
                            <li> Be honest in the form to help us match you with the right pet.</li>
                            <li>Pets need time, love, and patience to adjust to a new home.</li>
                            <li> Make sure your daily routine allows time for care and play.</li>
                            <li>Talk with your family or housemates before adopting.</li>
                            <li>Some pets may need special care—be prepared.</li>
                            <li>A quick home check or interview may be part of the process.</li>
                            <li>You're changing a life—thank you for choosing adoption!</li>
                        </ul>
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
                        <select>
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
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <div className="age-selector">
                            <input type="number" min="0" placeholder="Enter number" />
                            <select>
                                <option value="days">Days</option>
                                <option value="weeks">Weeks</option>
                                <option value="months">Months</option>
                                <option value="years">Years</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Gender</label>
                        <select>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="unknown">Unknown</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Behavior</label>
                        <select>
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
                            <label className="radio-label"><input type="radio" name="health" /> No Issues</label>
                            <label className="radio-label"><input type="radio" name="health" /> Minor Care</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Good with kids/other pets?</label>
                        <div className="radio-group">
                            <label className="radio-label"><input type="radio" name="goodWith" /> Yes</label>
                            <label className="radio-label"><input type="radio" name="goodWith" /> No</label>
                        </div>
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
                        <input type="checkbox" className="checkbox-input" required /> I confirm the above details are true
                    </label>
                    <label className="checkbox-label">
                        <input type="checkbox" className="checkbox-input" required /> I agree to follow PetCare's adoption policies
                    </label>
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </div>
        </div>
    );
};

export default AdoptionApplication;