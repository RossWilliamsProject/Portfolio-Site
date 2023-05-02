import "./OverviewStyles.css";
import live from "../../Assets/breif2.png";
import React from 'react';
import { Link } from "react-router-dom";

const Project4Overview = () => {
    return (
        <div className="overview">
            <div className="left">
                <h1>
                    Live Client Brief
                </h1>
                <p>
                    This project was based around working with a fake client, to work as a team with other animation students,
                    to create a set of characters for use in a virtual reality world. This includes, texturing, designing and modelling 
                    the characters clothes and heads, and rigging them for use in a virtual reality world. My roles in this group project 
                    were modelling the character and rigging them for animation. 
                </p>
                <p>
                    This project taught me a lot about working in a team - something that will definitely benefit me 
                    in the workplace. I learned a lot about communication, being honest about what you can and can't complete, and 
                    managing expectations when there is an upcoming deadline. I also gained some experience about the difficulties of 
                    working with a client, understanding what they want from the project, and adapting to misunderstandings. 
                </p>

                <Link to="/Projects">
                    <button className="btn"> Back to Projects </button>
                </Link>
            </div>
            <div className="right">

                <div>
                    <img src={live} alt="live" className="image" />
                </div>
                <p>
                    Skills used: Maya, Teamwork 
                </p>
            </div>
        </div>
    )
}

export default Project4Overview