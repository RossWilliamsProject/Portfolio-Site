import "./AboutContentStyles.css";
import ross from "../../Assets/ross.jpg";
import tesselation2 from "../../Assets/tesselation.jpg";

import React from 'react';
import { Link } from "react-router-dom";

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>
                    Hello, I'm Ross
                </h1>
                <p>
                    Presently a computer science masters sudent at the University of Nottingham in my fourth and final year.
                    Currently predicted a First Class after achieving 76% in my third year!
                    Now pursuing a career related to my primary interests in data science and human computer interaction. 
                </p>
                <p>
                    
                </p>
                <div>
                    <Link to="/contact">
                        <button className="btn"> Contact </button>
                    </Link>
                    <div class="divider"/>
                    <Link to="">
                        <button className="btn"> CV </button>
                    </Link>
                </div>
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={ross} alt="ross" className="img" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={tesselation2} alt="tesselation" className="imgToFill" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent