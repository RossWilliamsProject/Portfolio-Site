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
                blah blah blah blah degree
                    <br></br><br></br>
                    A-Levels (The Highfield School): blah blah blah blah
                    <br></br><br></br>
                    GCSEs (The Highfield School): blah blah blah blah
                </p>
                <br></br>
                <h1>
                    Informal Education
                </h1>
                <p>
                    blah blah blah blah
                </p>
                <br></br>
                <div>
                    <Link to="/contact">
                        <button className="btn"> Contact </button>
                    </Link>
                    <div className="divider" />
                    <a href="/RossWilliamsCV.pdf">
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