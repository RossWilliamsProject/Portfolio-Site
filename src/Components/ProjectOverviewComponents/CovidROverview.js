import "./OverviewStyles.css";
import covid from "../../Assets/covid.jpg";
import React from 'react';
import { Link } from "react-router-dom";

const CovidROverview = () => {
    return (
        <div className="overview">
            <div className="left">
                <h1>
                    COVID Exploratory Data Analysis
                </h1>
                <p>
                    The aim of this project was to explore a large worldwide dataset by asking three initial questions, then further exploring
                    questions that arose from the answers found. This project was undertaken as part of a data visualisation module,
                    and achieved a first class grade. While the code cannot be provided - the accompanying report is present.
                </p>
                <p>
                    This project introduced me to the complexity of data fitness and the boundlessness of exploration - 
                    it was clear to me after this project that there are near endless ways to interpret the data, and that while true
                    exploration must be logical, it must also rely on the skills of the interpreter to understand the underlying message,
                    and then communicate that message in a way that is clear - but unbiased. The dataset I chose made this difficult - it 
                    was massive, with tonnes of data that required extensive cleaning before attempting to visualise. 
                </p>
                <p>
                    This project involved using dplyr for data manipulation and cleaning - which involved handling missing values,
                    data conversion, and selecting the correct data, and ggplot2 for data visualisation. Plotly was also used in 
                    coordination with ggplot to provide interactivity to the visualisations. Out of 20+ graphs created during this analysis,
                    the most complex was a world choropleth map made from geom polygons using longitude and latitude values for each
                    countries borders colour shaded to represent each areas deaths per 100,000 population.
                </p>
                <Link to="/Projects">
                    <button className="btn"> Back to Projects </button>
                </Link>
            </div>
            <div className="right">

                <div>
                    <img src={covid} alt="covid" className="image" />
                </div>
                <p>
                    Languages Used: R
                    <br></br>
                    Libraries Used: GGplot2, GGplotly, dplyr
                </p>
                <Link to="/CovidRPageCode">
                    <button className="btn"> View Report </button>
                </Link>
            </div>
        </div>
    )
}

export default CovidROverview