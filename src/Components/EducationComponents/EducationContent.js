import "./EducationContentStyles.css";
import React from 'react';
import { Link } from "react-router-dom";

const EducatonContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>
                    Formal Education
                </h1>
                <p>
                BA Animation (Nottingham Trent University): Currently Working at a First Class
                    <br></br><br></br>
                    A-Levels (The Highfield School): Graphics: A, Art: B, Biology: C
                    <br></br><br></br>
                    GCSEs (The Highfield School): 9 in the Range A* - A 
                </p>
                <br></br>
                <br></br>
                <div>
                    <Link to="/contact">
                        <button className="btn"> Contact </button>
                    </Link>
                    <div className="divider" />
                    <a href="/JasmineBlytheCV.pdf">
                        <button className="btn"> CV </button>
                    </a>
                </div>
            </div>

            {/*
            <div className="right">
                <div>
                    <img src={ross} alt="ross" className="img" />
                </div>
            </div>
            */}
        </div>
    )
}

export default EducatonContent