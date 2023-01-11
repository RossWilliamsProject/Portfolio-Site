import "./WorkCardStyles.css";
import React from 'react'
import WorkCard from "./WorkCard";
import ModellingWorkCardData from "./ModellingWorkCardData";
import OtherWorkCardData from "./OtherWorkCardData";

const Work = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">Modelling Projects</h1>
            <div className="project-container">
                {ModellingWorkCardData.map((val, ind) => {
                    return (
                        <WorkCard 
                            key = {ind}
                            imgsrc = {val.imgsrc}
                            title = {val.title}
                            description = {val.description}
                            skills = {val.skills}
                            view = {val.view}
                        />
                    )
                })}
            </div>

            <h1 className="project-heading">Other Projects</h1>
            <div className="project-container">
                {OtherWorkCardData.map((val, ind) => {
                    return (
                        <WorkCard 
                            key = {ind}
                            imgsrc = {val.imgsrc}
                            title = {val.title}
                            description = {val.description}
                            skills = {val.skills}
                            view = {val.view}
                        />
                    )
                })}
            </div>


        </div>
    )
}

export default Work