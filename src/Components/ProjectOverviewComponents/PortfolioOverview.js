import "./OverviewStyles.css";
import portfolio from "../../Assets/portfolio.png";
import React from 'react';
import { Link } from "react-router-dom";

const PortfolioOverview = () => {
    return (
        <div className="overview">
            <div className="left">
                <h1>
                    Software Portfolio Website
                </h1>
                <p>
                    This project is this website! I designed and developed the entire thing from
                    scratch - from the very first UI design on figma, to the CSS you're looking at now.
                    The site is written in react and associated react libraries (such as react animation, navigation
                    and router dom), with heavy use of CSS. The site is hosted using Google firebase,
                    a site and API that I was familiar with from previous use.
                    Most of the site works using "conditional rendering" - which works by detecting the width of the screen
                    that the site is open on and then adjusting the CSS to fit. For example, the mobile site uses a hamburger
                    button instead of a navigation bar. 
                </p>
                <p>
                    The most difficult part of this project was ensuring the design was "interesting" - but projects
                    and the skills needed for each one are still easy to understand at a glance.
                    I did this using a "card" based system that have a
                    high glance value - composed of react components that are filled based on a data file
                    (so new projects can be added easily).
                </p>
                <p>
                    The sites progress can be seen on the gitHub, accessable from the button on the right!
                </p>
                <Link to="/Projects">
                    <button className="btn"> Back to Projects </button>
                </Link>
            </div>
            <div className="right">

                <div>
                    <img src={portfolio} alt="portfolio" className="image" />
                </div>
                <p>
                    Languages Used: Javascript, CSS
                    <br></br>
                    Libraries Used: React, Firebase
                </p>
                <a href="https://github.com/RossWilliamsProject/Portfolio-Site">
                    <button className="btn"> View in GitHub </button>
                </a>
            </div>
        </div>
    )
}

export default PortfolioOverview