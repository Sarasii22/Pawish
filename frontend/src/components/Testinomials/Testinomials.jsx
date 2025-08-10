import React from "react";
import "./Testinomials.css";
import testimonialImage from "../../assets/1.jpg"; // Example image path


const Testimonials = () => {
    return (
        <div className="testimonials">
            <div className="testimonial-container">
                <img src={testimonialImage} alt="Testimonial" className="testimonial-image" />
                <div className="testimonial-content">       
                    <h1>What Our Community Says</h1>
                    <p>"Pawish has been a lifesaver for our family. We adopted our dog, Max, through their program and couldn't be happier. The team was supportive and knowledgeable, making the process smooth and enjoyable."</p>
                    <p>- Sarah Johnson</p>
                    <p>"I love how Pawish not only helps animals find homes but also educates the community about responsible pet ownership. Their dedication to animal welfare is truly inspiring!"</p>
                    <p>- John Smith</p>
                    <p>"Thanks to Pawish, I found my best friend, Bella. The adoption process was transparent, and the staff genuinely cares about the animals. Highly recommend!"</p>
                    <p>- Emily Davis</p>
                </div>
            </div>
            <div className="testimonial-button">
                <button className="button">Share Your Story</button>
            </div>  
        </div>
    );
};


export default Testimonials;