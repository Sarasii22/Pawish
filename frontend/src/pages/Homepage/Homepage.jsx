import React from 'react';
import './Homepage.css';
import Herosection from '../../components/Herosection/Herosection';
import Aboutus from '../../components/Aboutus/Aboutus';
import Whoarewaiting from '../../components/Whoarewaiting/Whoarewaiting';
import Whyadopt from '../../components/Whyadopt/Whyadopt';
import Support from '../../components/Support/Support';
import Testimonials from '../../components/Testimonials/Testimonials';
import Contacts from '../../components/Contacts/Contacts';

const Homepage = () => {
  return (
    <div className="homepage">
      <Herosection buttonText="Make a Friend" navigateTo="/pets" showLogout={true}/>
      <Aboutus />
      <Whoarewaiting />
      <Whyadopt />
      <Support />
      <Testimonials />
      <Contacts />
      <div className="homepage-text">
        <h1>They don’t ask for much—just a safe place and a kind soul.</h1>
      </div>
    </div>
  );
};

export default Homepage;