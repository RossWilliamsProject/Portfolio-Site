import "./OverviewStyles.css";
import titanic from "../../Assets/titanic.jpg";
import React from 'react';
import { Link } from "react-router-dom";

const TitanicOverview = () => {
    return (
        <div className="overview">
            <div className="left">
                <h1>
                    Titanic Machine Learning
                </h1>
                <p>
                    This project is a Jupyter Notebook that was created in order to compete in
                    a python machine learning module compeititon on "kaggle" - and is based around accurately predicted passengers
                    survival on the titanic based on their position, socioeconomic background, gender, etc.
                    The notebook is split into 9 parts, the most important being data cleaning, analysis, and modelling.
                </p>
                <p>
                    The data cleaning mostly involved ordinal encoding and filling missing values. Data analysis
                    was more complex - visualisations to justify analysis points were created using seaborn and pandas.
                    The modelling for this project involved fitting several models using the training data
                    (such as K nearet neighbours, logistic regression, and 4 others) using SkLearn,
                    and simply comparing accuracy scores.
                </p>
                <p>
                    This is the most basic of the data science projects I have completed, so does not contain some important
                    parts of machine learning present in other projects, such as feature engineering, and evaluation tools such as SHAP values and
                    cross validation.
                </p>
                <Link to="/Projects">
                    <button className="btn"> Back to Projects </button>
                </Link>
            </div>
            <div className="right">

                <div>
                    <img src={titanic} alt="titanic" className="image" />
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


export default TitanicOverview