import "./OverviewStyles.css";
import mealplan from "../../Assets/mealplan.jpg";
import React from 'react';
import { Link } from "react-router-dom";

const MealPlannerOverview = () => {
    return (
        <div className="overview">
            <div className="left">
                <h1>
                    Meal Planner Application
                </h1>
                <p>
                    The Meal Planner App was a project made in a small group under the compant Kainos 
                    in which I was the group administator, responsible for organisation and
                    documentation alongside dditional responsibilties of design and developement
                    due to three of six group members dropping out. 
                    Despite these troubles, the project achieved a grade of 86% (a high first class).
                </p>
                <p>
                    The meal planner app was a fully functional application using react native and expo for IOS and android devices -
                    it primarily made use of the react animation and interactive calender libraries. The app allowed the user 
                    to plan meals for future dates from a fuzzy searchable list of recipes, 
                    which would then show up on the calendar, and allow 
                    the user to see a list of ingredients they need to buy. 
                </p>
                <p>
                    The list of recipes was stored on a noSQL firebase live database - and could be added to by the user.
                    The users plan was stored under their account (protected by a pass  word), allowing the plan to be 
                    viewed from any device - authentication was also implemented by using google firebase API.
                    
                </p>
                <Link to="/Projects">
                    <button className="btn"> Back to Projects </button>
                </Link>
            </div>
            <div className="right">

                <div>
                    <img src={mealplan} alt="mealplan" className="image" />
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

export default MealPlannerOverview