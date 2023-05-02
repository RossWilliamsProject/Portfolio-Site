import "./OverviewStyles.css";
import tavern from "../../Assets/tavern.jpg";
import React from 'react';
import { Link } from "react-router-dom";

const Project2Overview = () => {
    return (
        <div className="overview">
            <div className="left">
                <h1>
                Tavern Look Development Project
                </h1>
                <p>
                    My first three dimensional modelling project, with the purpose of teaching me the 
                    basics around animation theory and using Maya. The project involved modelling the 
                    interior of a medieval tarven - including tables, chairs, a fireplace and more. 
                    The scene was lit and rendered using Maya, and was used as the setting for a 5-shot micro-movie. 
                </p>
                <p>
                    This project taught me a lot about the animation three dimensional work flow - and allowed me to learn 
                    how to create assets myself from scratch. This was my first big project using Maya, and I learned alot about 
                    the intracacies of using it throughout the whole process. I had already learnt about the theory behind enviroment
                    creation, but this project really opened my eyes to how important some aspects such as lighting are in a 
                    look development project. 
                </p>
                <Link to="/Projects">
                    <button className="btn"> Back to Projects </button>
                </Link>
            </div>
            <div className="right">

                <div>
                    <img src={tavern} alt="tavern" className="image" />
                </div>
                <p>
                    Skills Used: Maya
                </p>
            </div>
        </div>
    )
}

export default Project2Overview