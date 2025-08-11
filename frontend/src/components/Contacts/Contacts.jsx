import React from 'react'
import "./Contacts.css"
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
    <div className='contact'>
      
      
      <div className="contact-col">
        
        <h1 className='title'>Get in touch</h1>
        
      
        <div className='col1'>
          <p>Have a question, want to help, or just want to say hi? We'd love to hear from you!</p>
          <ul>
              <li><img src={icon2} alt=""/>+94 71 654 8745</li>
              <li><img src={icon3} alt=""/>Pawish (Pvt) Ltd, Colombo 4, Sri Lanka</li>
              <li><img src={icon1} alt=""/>pawishpvt@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="column2">
          <form onSubmit={onSubmit}>
            <label>Name</label>
            <input type="text" name='name 'placeholder='John Doe' required/>
            <label>Email</label>
            <input type='email' name='email' placeholder='@gmail.com' required/>
            <label>Message</label>
            <textarea name='message' rows="6" placeholder='Enter Your Message' required></textarea>
            <button type='submit' className='btn'>Submit</button>
          </form>
          <span>{result}</span>
      </div>

      </div>
      
    
  )
}

export default Contacts
