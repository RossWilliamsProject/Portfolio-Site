import "./OverviewStyles.css";
import store from "../../Assets/store.jpg";
import React from 'react';
import { Link } from "react-router-dom";

const TimeSeriesOverview = () => {
    return (
        <div className="overview">
            <div className="left">
                <h1>
                    Time Series Prediction
                </h1>
                <p>
                    This project involved cleaning, manipulating and analysing store data in order to
                    forecast sales. The stores data was found on the website "kaggle" -  and consisted of
                    five seperate CSV files which had to be joined correctly before use. Data manipulation and
                    visualisation were carried out using the libraries "pandas" and "seaborn"

                </p>
                <p>
                    Primarily the forecasts were carried out using deterministic process and linear regression
                    - which predicts future values using fourier terms and seasonal dummies (as the data appeared
                    to be seasonal based on visualisations). It was key in this model to provide the forecast with the
                    dates for new years - on which all shops are shut. These models (and those implemented after) make use
                    of the functionality provided by the SKLearn library.
                </p>
                <p>
                    After getting good results with the linear regression forecasting, I decided to experiment with hybrid
                    forecasting - using one machine learning model to feed into another - the models that I used were Ridge,
                    ElasticNet and KNeighboursRegressor. While the hybrid machine learning based models were more complex,
                    they produced much less accurate predictions. If I were to do this project again, I would likely implement
                    XGBoost, which has shown much more accurate results in other projects I've seen.
                </p>
                <Link to="/Projects">
                    <button className="btn"> Back to Projects </button>
                </Link>
            </div>
            <div className="right">
                <div>
                    <img src={store} alt="store" className="image" />
                </div>
                <p>
                    Languages Used: Python
                    <br></br>
                    Libraries Used: Pandas, Scikit-Learn
                </p>
                {/*
                <Link to="">
                    <button className="btn"> View in GitHub </button>
                </Link>
                    */}
            </div>
        </div>
    )
}

export default TimeSeriesOverview