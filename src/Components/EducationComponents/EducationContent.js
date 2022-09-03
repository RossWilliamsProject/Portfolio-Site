import "./EducationContentStyles.css";
import ross from "../../Assets/ross.jpg";

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
                    Msci Computer Science (University of Nottingham): First Class, Average Grade 73% <br></br>
                    (76% average in 3rd year and 76% graded dissertation)
                    <br></br><br></br>
                    A-Levels (The Highfield School): A* A A in Computer Science, Maths and Physics
                    <br></br><br></br>
                    GCSEs (The Highfield School): 10 in the range A* - A
                </p>
                <br></br>
                <h1>
                    Informal Education
                </h1>
                <p>
                    I pride myself on continuing my learning outside of university, and I enjoy exploring
                    subjects not covered in full detail in my official education. This includes completing all available
                    Python and associated libraries in data manipulation, visualisation, and machine learning learning
                    courses on Kaggle, alongside smaller accomplishments such as machine learning competitions on the same site,
                    and an SQL course on Udemy.
                </p>
                <br></br>
                <div>
                    <Link to="/contact">
                        <button className="btn"> Contact </button>
                    </Link>
                    <div className="divider" />
                    <Link to="">
                        <button className="btn"> CV </button>
                    </Link>
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