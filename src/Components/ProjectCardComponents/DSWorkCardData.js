import tesselation from "../../Assets/tesselation.jpg";
import titanic from "../../Assets/titanic.jpg";
import covid from "../../Assets/covid.jpg";

const DSWorkCardData = [
    {
        imgsrc: titanic,
        title: "Titanic ML",
        description: "A project based around survival prediction using the Titanic ML database, my first python data science project ouside of university.",
        skills: "Skills Used: Python, Pandas, Scikit-Learn",
        view: "/Project1"
    },
    {
        imgsrc: covid,
        title: "Covid EDA",
        description: "An Exploratory Data Analysis performed on a large Covid-19 Dataset. Part of a Data Visualisation module completed using R.",
        skills: "Skills Used: R, GGplot2",
        view: "/Project2"
    },
    {
        imgsrc: tesselation,
        title: "Project Three",
        text: "this is a short description of project Three",
        view: "/Project3"
    }
]
export default DSWorkCardData;