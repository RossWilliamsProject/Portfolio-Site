import "./OverviewStyles.css";
import cat from "../../Assets/cat.jpg";
import React from 'react';
import { Link } from "react-router-dom";

const CovidROverview = () => {
    return (
        <div className="overview">
            <div className="left">
                <h1>
                    Modelling project 1
                </h1>
                <p>
                    blah blah blah blah
                </p>
                <p>
                blah blah blah blah 
                </p>
                <p>
                blah blah blah blah
                </p>
                <Link to="/Projects">
                    <button className="btn"> Back to Projects </button>
                </Link>
            </div>
            <div className="right">

                <div>
                    <img src={cat} alt="cat" className="image" />
                </div>
                <p>
                    Skills used: blah blah blah blah
                </p>
            </div>
        </div>
    )
}

export default CovidROverview