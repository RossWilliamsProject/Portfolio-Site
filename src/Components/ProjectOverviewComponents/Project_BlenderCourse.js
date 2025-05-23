import "./OverviewStyles.css";
import antiqueshop from "../../Assets/Blender/blender3.png";
import { Link } from "react-router-dom";

const PROJECT_BLENDERCOURSE = () => {
    return (
        <div className="overview">
            <div className="left">
                <h1>
                    Foundations of 3D modelling in Blender - Online Course
                </h1>
                <p>
                    This is a 3D modelling course that teaches the basics of blender, progressing to more advanced
                    techniques later in the course. During it, I was shown how to model, UV unwrap and texture a
                    variety of small and large assets - these included a bookcase filled with books and scrolls, and a
                    treasure chest filled with gems and treasures. I also learnt how to manage and organise my
                    assets using Blenders asset manager.
                </p>
                <p>
                    After completing this course, I have a much better understanding of the Blender software and
                    feel comfortable and confident creating assets and adding materials to them to create stylized
                    and realistic models. I am now looking forward to creating many new projects in Blender, and
                    am currently completing part two of the course: Intermediate 3D Modelling And Game Asset
                    creation.
                </p>
                <p>
                    See below for more detailed images!
                </p>
                <Link to="/Projects">
                    <button className="btn"> Back to Projects </button>
                </Link>
                <br></br>
            </div>
            <div className="right">

                <div>
                    <img src={antiqueshop} alt="antiqueshop" className="image" />
                </div>
                <p>
                    Skills Used: Blender
                </p>
            </div>

        </div>
    )
}

export default PROJECT_BLENDERCOURSE