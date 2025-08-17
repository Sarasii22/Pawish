import React from "react";
import "./Landingpg.css";
import Herosection from "../../components/Herosection/Herosection";
import Aboutus from "../../components/Aboutus/Aboutus";
import Whoarewaiting from "../../components/Whoarewaiting/Whoarewaiting";
import Whyadopt from "../../components/Whyadopt/Whyadopt";
import Support from "../../components/Support/Support";
import Testimonials from "../../components/Testimonials/Testimonials";
import Contacts from "../../components/Contacts/Contacts";
//import Footer from "../../components/Footer/Footer";

const Landingpg = () => {
    return (
        <div className="landing-page">
        <Herosection />
        <Aboutus />
        <Whoarewaiting />
        <Whyadopt />
        <Support />
        <Testimonials />
        <Contacts />
        <div className="landing-page-text">
            <h1>They don’t ask for much—just a safe place and a kind soul.</h1>
        </div>
        
        {/* Additional components can be added here */}
        </div>
    );
}
export default Landingpg;