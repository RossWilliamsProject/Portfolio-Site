import "./OverviewStyles.css";

import frank1 from "../../Assets/frank1.png";
import frank2 from "../../Assets/frank2.png";
import rose1 from "../../Assets/rose1.png";
import rose2 from "../../Assets/rose2.png";

import render1 from "../../Assets/render1.png";
import render2 from "../../Assets/render2.png";
import render3 from "../../Assets/render3.png";
import render4 from "../../Assets/render4.png";
import render5 from "../../Assets/render5.png";

import design1 from "../../Assets/design1.png";
import design2 from "../../Assets/design2.png";
import assets1 from "../../Assets/assets1.png";


import React from 'react';

const Project1Overview = () => {
    return (
        <div className="overview">

            <div>
                <p> Scene Renders</p>
                <img src={render1} alt="render1" className="image" />
                <img src={render2} alt="render2" className="image" />
                <img src={render3} alt="render3" className="image" />
                <img src={render4} alt="render4" className="image" />
                <img src={render5} alt="render5" className="image" />

                <p> Asset Renders</p>
                <img src={assets1} alt="assets1" className="image" />

                <p> Character Renders</p>
                <img src={frank1} alt="frank1" className="image" />
                <img src={frank2} alt="frank2" className="image" />

                <img src={rose1} alt="rose1" className="image" />
                <img src={rose2} alt="rose2" className="image" />

                <p> Design Insight</p>
                <img src={design1} alt="design1" className="image" />
                <img src={design2} alt="design2" className="image" />
            </div>


        </div>
    )
}

export default Project1Overview