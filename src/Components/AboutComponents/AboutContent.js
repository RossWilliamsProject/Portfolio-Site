import "./AboutContentStyles.css";
import ross from "../../Assets/ross.png";
import React from 'react';

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>
                    Hello! I'm Ross
                </h1>
                <p>
                    Presently a computer science masters sudent at the University of Nottingham in my fourth and final year.
                    Predicted a First Class after achieving a First Class in all graded years so far.
                    Now pursuing a career related to my primary interests in data science and human computer interaction.
                </p>
                <p>
                    I believe that data science and user interface have a lot in common,
                    both have a fundemental foundation of comprehension and communication.
                    In data - that understanding is recognising the story the data tells,
                    and in UI/UX the skill is allowing users to data in their own specific way - afterall,
                    "an interface without data is simply decoration". 
                </p>
                <p>
                    After undertaking a few large projects using Javascript and React
                    (such as my dissertation and personal portfolio website),
                    I've decided to branch out and learn more about the field of data science
                    - with modules at university in R under my belt already, I've been programming mostly in python
                    and learning more about machine learning.
                </p>
            </div>
            <div className="right">
                <div>
                    <img src={ross} alt="ross" className="image" />
                </div>
            </div>
        </div>
    )
}

export default AboutContent