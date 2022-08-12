import "./WorkCardStyles.css";
import React from 'react'
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <NavLink to={props.view} className="project-card">
      <img src={props.imgsrc} alt="tesselation" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>
          {props.description}
          <br></br>
          {props.skills}
        </p>
      </div>
    </NavLink>
  )
}

export default WorkCard