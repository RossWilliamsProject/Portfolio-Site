import "./OverviewStyles.css";
import tesselation from "../../Assets/tesselation.jpg";
import React from 'react';
import { Link } from "react-router-dom";

const Project3Overview = () => {
    return (
        <div className="overview">
            <div className="left">
                <h1>
                    Project3Overview
                </h1>
                <p>
                    Blah blah, Blah bblah blah balha. Blah bblah blah balha. Blah bblah blah balha.
                    Blah bblah blah balha.Blah bblah blah balha.Blah bblah blah balha.Blah bblah blah balha.
                    Blah bblah blah balha.Blah bblah blah balha.Blah bblah blah balha.
                    Blah bblah blah balha.lah bblah blah balha.Blah bblah blah balha.
                    Blah bblah blah balha.
                </p>
                <p>
                    Blah blah, Blah bblah blah balha. Blah bblah blah balha. Blah bblah blah balha.
                    Blah bblah blah balha.Blah bblah blah balha.Blah bblah blah balha.Blah bblah blah balha.
                    Blah bblah blah balha.Blah bblah blah balha.Blah bblah blah balha.
                    Blah bblah blah balha.lah bblah blah balha.Blah bblah blah balha.
                    Blah bblah blah balha.
                </p>
                <p>
                    Blah blah, Blah bblah blah balha. Blah bblah blah balha. Blah bblah blah balha.
                    Blah bblah blah balha.Blah bblah blah balha.Blah bblah blah balha.Blah bblah blah balha.
                    Blah bblah blah balha.Blah bblah blah balha.Blah bblah blah balha.
                    Blah bblah blah balha.lah bblah blah balha.Blah bblah blah balha.
                    Blah bblah blah balha.
                </p>
                <Link to="/Projects">
                    <button className="btn"> Back to Projects </button>
                </Link>
            </div>
            <div className="right">

                <div>
                    <img src={tesselation} alt="tesselation2" className="image" />
                </div>
                <p>
                    Languages Used: Blah Blah Blah Blah
                    <br></br>
                    Libraries Used: Blah Blah Blah Blah
                </p>
                <Link to="">
                    <button className="btn"> View in GitHub </button>
                </Link>
            </div>
        </div>
    )
}

export default Project3Overview