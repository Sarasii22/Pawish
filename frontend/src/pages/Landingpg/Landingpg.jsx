import React from "react";

import Herosection from "../../components/Herosection/Herosection";
import Aboutus from "../../components/Aboutus/Aboutus";
import Whoarewaiting from "../../components/Whoarewaiting/Whoarewaiting";
import Whyadopt from "../../components/Whyadopt/Whyadopt";


const Landingpg = () => {
    return (
        <div className="landing-page">
        <Herosection />
        <Aboutus />
        <Whoarewaiting />
        <Whyadopt />
        {/* Additional components can be added here */}
        </div>
    );
}
export default Landingpg;