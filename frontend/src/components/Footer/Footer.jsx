import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem} from 'react-bootstrap'
import fbicon from '../../assets/icons/facebook.png'
import igicon from '../../assets/icons/instagram.png'
import yticon from '../../assets/icons/youtube.png'
import tiktokicon from '../../assets/icons/tik-tok.png'
import eicon from '../../assets/icons/email.png'
import picon from '../../assets/icons/call.png'
import licon from '../../assets/icons/location.png'

const quick_links = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Our Pets',
    link: 'pets'
  },
  
  {
    name: 'Donate',
    link: 'donate'
  },
  {
    name: 'Pet Alert',
    link: 'petalert'
  },
  
]



const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <div>
    <div className='footer-container'>
      <div className='fquick_links_title'>
        <h4>PAWISH</h4>
        <p>We connect rescued and homeless pets with loving hearts, giving them the home, help, and hope they deserve.</p>
        <div className='social_links'>
        <span>
          <Link to='/'><img src={fbicon} alt='facebook' /></Link>
        </span>
        <span>
          <Link to='/'><img src={igicon} alt='instagram' /></Link>
        </span>
        <span>
          <Link to='/'><img src={yticon} alt='youtube' /></Link>
        </span>
        <span>
          <Link to='/'><img src={tiktokicon} alt='github' /></Link>
        </span>
      </div>  
      </div>
      
      <div className='fquick_links_title'>
        <h4>Quick Links</h4>
        <ListGroup className='fquick_links'>
          {
            quick_links.map((item, index) => (
              <ListGroupItem key={index} className='link1'>
                <Link to={item.link}>{item.name}</Link>
              </ListGroupItem>
            ))
          }
        </ListGroup>
        
      </div>
      
      
      <div className='fquick_links_title'>
        <h4>Contact Us</h4>
        <ListGroup className='fquick_links'>
            <ListGroupItem className='fphone'>
            <h6>
              <span>
                <img src={picon} alt='' />
              </span>
               
              </h6>
              <p>
                +94 71 654 8745
              </p>
          </ListGroupItem>
          <ListGroupItem className='flocation'>
            <h6>
              <span>
                <img src={licon} alt='' />
              </span>
        
              </h6>
              <p>
                Pawish (Pvt) Ltd, Colombo 4, Sri Lanka
              </p>
          </ListGroupItem>
          <ListGroupItem className='femail'>
            <h6>
              <span>
                <img src={eicon} alt='' />
              </span>
                 
              </h6>
              <p>
              pawishpvt@gmail.com
              </p>
          </ListGroupItem>
          
        </ListGroup>
      </div>
    </div>
    <div className='ftitle'>
      
      <div className='copyright'>
        <p>
          &copy; {year}, Pawish.
            All rights reserved.
        </p>
      </div>
    </div>
    </div>
  )
}

export default Footer
