import dissertation from "../../Assets/dissertation.png";
import mealPlan from "../../Assets/mealplan.jpg";
import portfolio from "../../Assets/portfolio.png";

const UIWorkCardData = [
    {
        imgsrc: dissertation,
        title: "Learning Applications",
        description: "A research dissertation based around learning motivation retention using three application prototypes",
        skills: "Skills Used: React, CSS, Figma",
        view: "/DissertationPage"
    },
    {
        imgsrc: mealPlan,
        title: "Meal Planner App",
        description: "An application created as a group project for students who want to plan meal preparation in advance",
        skills: "Skills Used: React, CSS, Figma, Firebase",
        view: "/MealPlannerPage"
    },
    {
        imgsrc: portfolio,
        title: "Portfolio Site",
        description: "A website designed and developed to display a portfolio of  previous projects to employers",
        skills: "Skills Used: React, CSS, Figma, Firebase",
        view: "/PortfolioPage"
    }
]
export default UIWorkCardData;