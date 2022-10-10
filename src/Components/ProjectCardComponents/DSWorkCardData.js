import store from "../../Assets/store.jpg";
import titanic from "../../Assets/titanic.jpg";
import covid from "../../Assets/covid.jpg";

const DSWorkCardData = [
    {
        imgsrc: store,
        title: "Time Series Prediction",
        description: "Using machine learning to forecast grocery stores future sales - involved data cleaning, manipulation, visualisation and modelling.",
        skills: "Skills Used: Python, Pandas, Scikit-Learn",
        view: "/TimeSeriesPage"
    },
    {
        imgsrc: covid,
        title: "Covid EDA",
        description: "An Exploratory Data Analysis performed on a large Covid-19 Dataset. Part of a Data Visualisation module completed using R.",
        skills: "Skills Used: R,GGplot2, GGplotly, dplyr",
        view: "/CovidRPage"
    },
    {
        imgsrc: titanic,
        title: "Titanic ML",
        description: "A project based around survival prediction using the Titanic ML database, my first python data science project ouside of university.",
        skills: "Skills Used: Python, Pandas, Scikit-Learn",
        view: "/TitanicPage"
    },
]
export default DSWorkCardData;