import React from 'react'
import './Contacts.css'
import icon1 from '../../assets/icons/email.png'
import icon2 from '../../assets/icons/call.png'
import icon3 from '../../assets/icons/location.png'


const Contacts = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bb80d27f-53c5-4160-b5bd-776d92004a21");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='çontact'>
      
      <div className='title'>
        <h4>Contacts</h4>
        <h1>Get in touch</h1>
      </div>
      <div className="contact-col">
        <div className='col1'>
          <h3>Send us a message</h3>
            <p>Feel fee to reach out through contact from or 
              find out contact information below. Your feedback, 
              questions, and suggestions are important to us as we strive 
              to provide exceptional service to our travelling community
            </p>
            <ul>
              <li><img src={icon1} alt=""/>ceylonbliss@gmail.com</li>
              <li><img src={icon2} alt=""/>+94 11 245 5486</li>
              <li><img src={icon3} alt=""/>No. 12, Ceylon Bliss (PVT) LTD, Baththaramulla, Colombo.</li>
            </ul>
        </div>
        <div className="col2">
          <form onSubmit={onSubmit}>
            <label>Enter Your Name</label>
            <input type="text" name='name 'placeholder='John Doe' required/>
            <label>Enter Your Contry</label>
            <input type="text" name='country'cplaceholder='Sri Lanka' required/>
            <label>Enter Your Mobile Number</label>
            <input type='tel' name='phone' placeholder='xxx xxx xxxx' required/>
            <label>Write Your Message</label>
            <textarea name='message' rows="6" placeholder='Enter Your Message' required></textarea>
            <button type='submit' className='btn'>Submit</button>
          </form>
          <span>{result}</span>
        </div>

      </div>
      
    </div>
  )
}

export default Contacts
