import "./OverviewStyles.css";
import duck from "../../Assets/duck2.png";
import React from 'react';
import { Link } from "react-router-dom";

const Project5Overview = () => {
    return (
        <div className="overview">
            <div className="left">
                <h1>
                    Animation Theory Dissertation
                </h1>
                <p>
                    A research paper written to answer the question "An Investigation into Why
                    the United States Government Chose to Use Animation as a Medium for Second World War Propaganda". 
                    This involved researching into the history of propaganda, US government laws and regulations in the 
                    second world war, and the historic context needed to understand what the purpose of each scene was. 
                </p>
                <p> 
                    Not only did I learn a lot about animation theory, how propaganda works, and some of the different uses of animation, 
                    I also learned a lot about the beginning of huge companies like disney, and how they came to be the multimedia giants they are 
                    today. This was super interesting to me, and only increased my desire to work in the animation industry!
                </p>
                <p>
                    This essay was graded at a first class. Full paper is available on request!
                </p>
                <Link to="/Projects">
                    <button className="btn"> Back to Projects </button>
                </Link>
            </div>
            <div className="right">

                <div>
                    <img src={duck} alt="cat" className="image" />
                </div>
                <p>
                    Skills Used: Animation Theory, Research
                </p>
            </div>
        </div>
    )
}

export default Project5Overview