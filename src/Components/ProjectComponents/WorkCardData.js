import tesselation from "C:/Work/NotUni/portfolio-site/src/Assets/tesselation.jpg";
import titanic from "C:/Work/NotUni/portfolio-site/src/Assets/titanic.jpg";
import tesselation2 from "C:/Work/NotUni/portfolio-site/src/Assets/tesselation2.png";

const ProjectCardData = [
    {
        imgsrc: titanic,
        title: "Titanic",
        description: "A project based around the Titanic ML database on Kaggle, my first python data science project.",
        skills: "Skills Used: Python, Pandas, Scikit-Learn",
        view: "/Project1"
    },
    {
        imgsrc: tesselation2,
        title: "Project Two",
        text: "this is a short description of project Two",
        view: "/Project2"
    },
    {
        imgsrc: tesselation,
        title: "Project Three",
        text: "this is a short description of project Three",
        view: "/Project3"
    }
]
export default ProjectCardData;