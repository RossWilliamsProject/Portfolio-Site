import "./OverviewStyles.css";
import movie from "../../Assets/movie.jpg";
import React from 'react';
import { Link } from "react-router-dom";

const Project3Overview = () => {
    return (
        <div className="overview">
            <div className="left">
                <h1>
                    5-Shot MicroMovie
                </h1>
                <p>
                    Another project in Maya. This project was a 3D micromovie - applying what I was taught about animating 
                    in the last year while at university. I used character models and rigs that I found online to create this film - 
                    the primary characters were a girl, and a magic cat that wanted to get into the tavern.
                </p>
                <p>
                    Before actually animating this story, a good amount of thought and design was required. This project involved storyboarding
                    the plot, and then creating an animatic using premier to plan the film out in more detail. While animating isnt my primary focus
                    (I'm more interesting in modelling), this project really helped me to further my skills in both areas. One thing that really 
                    stuck with me is desinging enviroments that are easier to animate in - for example, the look development enviroment I created 
                    for this movie (the tavern), was much too dark. I've since learned from my mistakes!
                </p>
                <Link to="/Projects">
                    <button className="btn"> Back to Projects </button>
                </Link>
            </div>
            <div className="right">

                <div>
                    <img src={movie} alt="movie" className="image" />
                </div>
                <p>
                    Skills used: Maya, Zbrush
                </p>
            </div>
        </div>
    )
}

export default Project3Overview