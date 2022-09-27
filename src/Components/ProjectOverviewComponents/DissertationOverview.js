import "./OverviewStyles.css";
import dissertation from "../../Assets/dissertation.png";
import React from 'react';
import { Link } from "react-router-dom";

const DissertationOverview = () => {
    return (
        <div className="overview">
            <div className="left">
                <h1>
                    DissertationOverview
                </h1>
                <p>
                    This project was my dissertation - graded at 76%. The purpose of the study was to investigate the relationship between the use of gamification
                    methods on an E-Learning platform and student motivation levels. The study was carried out using
                    three prototypes – one with no gamification methods, one with extrinsic gamification methods, and
                    another with intrinsic gamification methods (specifically narration). The student’s motivation levels
                    were measured, analysed and compared using data collected using a professional student
                    motivation survey, and coded observations.
                </p>
                <p>
                    The study discovered a potential link between the use of both intrinsic and extrinsic gamification
                    methods and increased student motivation – alongside additional potential conclusions that were
                    drawn using the subgroups (Boosters and Guzzlers) of the student motivation survey, which
                    demonstrate possible relationships between gamification methods and anxiety, work avoidance and
                    self-belief.
                </p>
                <p>
                    The prototypes were iteratively designed and improved using user feedback and existing design frameworks
                    on FIGMA. Each prototype was written in React Native, as an application for android devices.
                    This project involved use of complex navigation systems (Tab/Stack) and use of the react animation library. 
                </p>
                <Link to="/Projects">
                    <button className="btn"> Back to Projects </button>
                </Link>
            </div>
            <div className="right">

                <div>
                    <img src={dissertation} alt="dissertation" className="image" />
                </div>
                <p>
                    Languages Used: Blah Blah Blah Blah
                    <br></br>
                    Libraries Used: Blah Blah Blah Blah
                </p>
                <Link to="">
                    <button className="btn"> View in GitHub </button>
                </Link>
            </div>
        </div>
    )
}

export default DissertationOverview