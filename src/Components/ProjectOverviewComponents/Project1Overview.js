import "./OverviewStyles.css";
import antiqueshop from "../../Assets/antiqueshop.jpg";

import React from 'react';
import { Link } from "react-router-dom";

const Project1Overview = () => {
    return (
        <div className="overview">
            <div className="left">
                <h1>
                    Final Year Look Development Project
                </h1>
                <p>
                    A three dimensional look development project based around modelling and texturing an enviroment,
                    and modelling, texturing and rigging the two characters. I used Maya to model the interior and all the assets -
                    including a range of 1980s antique furniture (such as a sofa, and a grandfather clock), a cash register, and other bits and bobs 
                    like lighting fixtures and old telephones!
                </p>
                <p>
                    The project is based around the following story:
                    "A little old antique furniture store, set in the 1980s. The store is filled with furniture from the 1920s and is owned by an old couple
                    called Rose and Frank. Frank became ill and recently passed away, leaving Rose to grieve and take care of their beloved antique store alone."
                </p>
                <p>
                    This project has taught me so much about 3D modelling, I built on skills I already had and learnt so
                    much more about the modelling pipeline in Maya and Zbrush. I noticed myself becoming quicker at things
                    I had previously found very difficult and stepped out of my comfort zone to create two of my own characters.
                </p>
                <p> 
                    Press button to the right to see more detailed pictures!
                </p>
                <Link to="/Projects">
                    <button className="btn"> Back to Projects </button>
                </Link>
                <br></br>
            </div>
            <div className="right">

                <div>
                    <img src={antiqueshop} alt="antiqueshop" className="image" />
                </div>
                <p>
                    Skills Used: Maya, Substance Painter, Zbrush
                </p>
                <Link to="/Project1PicsPage">
                    <button className="btn"> Rendered Images </button>
                </Link>
            </div>

        </div>
    )
}

export default Project1Overview