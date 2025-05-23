import live from "../../Assets/LiveBrief/brief1.jpg";
import duck from "../../Assets/AnimationDissertation/duck2.png";
import movie from "../../Assets/MicroMovie/movie.jpg";

const UIWorkCardData = [
     {
        imgsrc: movie,
        title: "5-Shot MicroMovie",
        description: "A short film about a girl and a magical cat, plotted and storyboarded - set in the aforementioned tavern.",
        skills: "Skills Used: Maya, Zbrush",
        view: "/Page_MicroMovie"
    },
    {
        imgsrc: live,
        title: "Live Client Brief",
        description: "A group based project which involved creating characters to be used for a virtual environment.",
        skills: "Skills Used: Maya",
        view: "/Page_LiveClientBrief"
    },
    {
        imgsrc: duck,
        title: "Animation Theory Dissertation",
        description: "An Investigation into the United States Use of Animation for Propaganda",
        skills: "Skills Used: Animation Theory, Research",
        view: "/Page_AnimationDisseration"
    },
]
export default UIWorkCardData;