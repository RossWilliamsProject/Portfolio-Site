import "./AboutContentStyles.css";
import jasmine from "../../Assets/Jasmine.jpg";
import React from 'react';

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>
                    Hello! I'm Jasmine. 
                </h1>
                <p>
                    I'm currently an animation student at Nottingham Trent University in my third and final year, 
                    currently working at a first class. After my graduation in July, I hope to find a great position to further my career goals!
                    I'm going to be based around London, searching for a job as a 3D artist - as three dimensional modelling and asset/environment creation 
                    is something that I enjoyed a lot during my degree. 
                </p>
                <p>
                    I have experience with a range of software from my three years at university through many different modules.
                    Maya, substance painter, Zbrush and photoshop are the usual tools that I use in my work -
                    more details of how and when I've used them can be seen by looking through my projects in the projects page.
                    I also pride myself on my understanding of the theory behind animation - I've always enjoyed learning about the principles behind the art!
                </p>
                <p>
                    In my spare time, when I'm not pursuing other artistic endevours like drawing, I'm either working hard at the gym, reading a big book, 
                    or visiting the local cat cafe!
                </p>
            </div>
            <div className="right">
                <div>
                    <img src={jasmine} alt="jasmine" className="image" />
                </div>
            </div>
        </div>
    )
}

export default AboutContent