import "./OverviewStyles.css";
import portfolio from "../../Assets/portfolio.png";
import React from 'react';
import { Link } from "react-router-dom";

const PortfolioOverview = () => {
    return (
        <div className="overview">
            <div className="left">
                <h1>
                    PortfolioOverview
                </h1>
                <p>
                    Blah blah, Blah bblah blah balha. Blah bblah blah balha. Blah bblah blah balha.
                    Blah bblah blah balha.Blah bblah blah balha.Blah bblah blah balha.Blah bblah blah balha.
                    Blah bblah blah balha.Blah bblah blah balha.Blah bblah blah balha.
                    Blah bblah blah balha.lah bblah blah balha.Blah bblah blah balha.
                    Blah bblah blah balha.
                </p>
                <p>
                    Blah blah, Blah bblah blah balha. Blah bblah blah balha. Blah bblah blah balha.
                    Blah bblah blah balha.Blah bblah blah balha.Blah bblah blah balha.Blah bblah blah balha.
                    Blah bblah blah balha.Blah bblah blah balha.Blah bblah blah balha.
                    Blah bblah blah balha.lah bblah blah balha.Blah bblah blah balha.
                    Blah bblah blah balha.
                </p>
                <p>
                    Blah blah, Blah bblah blah balha. Blah bblah blah balha. Blah bblah blah balha.
                    Blah bblah blah balha.Blah bblah blah balha.Blah bblah blah balha.Blah bblah blah balha.
                    Blah bblah blah balha.Blah bblah blah balha.Blah bblah blah balha.
                    Blah bblah blah balha.lah bblah blah balha.Blah bblah blah balha.
                    Blah bblah blah balha.
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

export default PortfolioOverview