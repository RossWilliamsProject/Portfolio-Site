import "./WorkCardStyles.css";
import React from 'react'
import WorkCard from "./WorkCard";
import DSWorkCardData from "./DSWorkCardData";
import UIWorkCardData from "./UIWorkCardData";

const Work = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">Data Science Projects</h1>
            <div className="project-container">
                {DSWorkCardData.map((val, ind) => {
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

            <h1 className="project-heading">UI/UX Projects</h1>
            <div className="project-container">
                {UIWorkCardData.map((val, ind) => {
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