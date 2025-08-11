import React from "react";

import Herosection from "../../components/Herosection/Herosection";
import Aboutus from "../../components/Aboutus/Aboutus";
import Whoarewaiting from "../../components/Whoarewaiting/Whoarewaiting";
import Whyadopt from "../../components/Whyadopt/Whyadopt";
import Support from "../../components/Support/Support";
import Testimonials from "../../components/Testimonials/Testimonials";
import Contacts from "../../components/Contacts/Contacts";


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
        {/* Additional components can be added here */}
        </div>
    );
}
export default Landingpg;