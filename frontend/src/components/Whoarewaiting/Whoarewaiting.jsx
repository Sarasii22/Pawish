import React from "react";
import "./Whoarewaiting.css"
import waiting from "../../assets/waiting.png"
import { Link } from "react-router-dom";

const Whoarewaiting = () => {
    return (
        <div className="Whoarewaiting-content">
            <h1>Who Are waiting For You ?</h1>
            <img src={waiting} alt="Who are waiting" className="waiting-image"/>
            <Link to={"/pets"}><button className="SeeMore">See More</button></Link>
        </div>
    );
}

export default Whoarewaiting;