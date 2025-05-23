import "./OverviewStyles.css";

import blender1 from "../../Assets/Blender/blender1.png";
import blender2 from "../../Assets/Blender/blender2.png";
import blender3 from "../../Assets/Blender/blender3.png";
import blender4 from "../../Assets/Blender/blender4.png";
import blender5 from "../../Assets/Blender/blender5.png";
import blender6 from "../../Assets/Blender/blender6.png";
import blender7 from "../../Assets/Blender/blender7.png";
import blender8 from "../../Assets/Blender/blender8.png";

const PICS_PROJECT_BLENDERCOURSE = () => {
    return (
        <div className="overview">

            <div className="cent">
                <p> Scene Renders</p>
                <img src={blender1} alt="blender1" className="image" />
                <img src={blender2} alt="blender2" className="image" />
                <img src={blender3} alt="blender3" className="image" />
                <img src={blender4} alt="blender4" className="image" />
                <img src={blender5} alt="blender5" className="image" />
                <img src={blender6} alt="blender6" className="image" />
                <img src={blender7} alt="blender7" className="image" />
                <img src={blender8} alt="blender8" className="image" />

            </div>
        </div>
    )
}

export default PICS_PROJECT_BLENDERCOURSE