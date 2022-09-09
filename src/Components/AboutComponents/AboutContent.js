import "./AboutContentStyles.css";
import ross from "../../Assets/ross.jpg";
import React from 'react';

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
                    "What a strange combo!" - I believe that data and UI have loads in common,
                    both have a fundemental foundation of comprehension and understanding.
                    In data - that understanding is recognising the story the data tells,
                    and in UI/UX the skill is allowing users to follow their own story and interact
                    with the data in a specific way - afterall,
                    interface design without data is not a functional system!
                </p>
                <p>
                    After undertaking a few large projects using Javascript and React
                    (such as my dissertation, and personal portfolio website),
                    I've decided to branch out and learn more about the field of data science
                    - with modules at university in R under my belt already, I've been brushing up on my Python skills,
                    and learning more about machine learning.
                </p>
            </div>
            <div className="right">
                <div>
                    <img src={ross} alt="ross" className="img" />
                </div>
            </div>
        </div>
    )
}

export default AboutContent