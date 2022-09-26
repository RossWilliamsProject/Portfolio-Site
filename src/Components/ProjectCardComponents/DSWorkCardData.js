import tesselation from "../../Assets/tesselation.jpg";
import titanic from "../../Assets/titanic.jpg";
import covid from "../../Assets/covid.jpg";

const DSWorkCardData = [
    {
        imgsrc: titanic,
        title: "Titanic ML",
        description: "A project based around survival prediction using the Titanic ML database, my first python data science project ouside of university.",
        skills: "Skills Used: Python, Pandas, Scikit-Learn",
        view: "/TitanicPage"
    },
    {
        imgsrc: covid,
        title: "Covid EDA",
        description: "An Exploratory Data Analysis performed on a large Covid-19 Dataset. Part of a Data Visualisation module completed using R.",
        skills: "Skills Used: GGplot2, GGplotly, dplyr",
        view: "/CovidRPage"
    },
    {
        imgsrc: tesselation,
        title: "Project Three",
        text: "this is a short description of project Three",
        view: "/Project3Page"
    }
]
export default DSWorkCardData;