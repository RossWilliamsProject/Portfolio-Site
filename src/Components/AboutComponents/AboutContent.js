import "./AboutContentStyles.css";
import cat from "../../Assets/cat.jpg";
import React from 'react';

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>
                    Hello! I'm Jasmine
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
            </div>
            <div className="right">
                <div>
                    <img src={cat} alt="cat" className="image" />
                </div>
            </div>
        </div>
    )
}

export default AboutContent