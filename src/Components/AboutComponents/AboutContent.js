import "./AboutContentStyles.css";
import tesselation from "../../Assets/tesselation.jpg";
import tesselation2 from "../../Assets/tesselation2.png";

import React from 'react';
import { Link } from "react-router-dom";

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>
                    Who Am I?
                </h1>
                <p>
                    Short Description about who I Am
                </p>
                <Link to="/contact">
                    <button className="btn"> Contact </button>
                </Link>
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={tesselation} alt="tesselation" className="img" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={tesselation2} alt="tesselation" className="img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent