import "./OverviewStyles.css";

import shot1 from "../../Assets/MicroMovie/movie1.png";
import shot2 from "../../Assets/MicroMovie/movie2.png";
import shot3 from "../../Assets/MicroMovie/movie3.png";
import shot4 from "../../Assets/MicroMovie/movie4.png";
import shot5 from "../../Assets/MicroMovie/movie5.png";

const PICS_PROJECT_MICROMOVIE = () => {
    return (
        <div className="overview">

            <div className="cent">
                <p> Movie Shots</p>
                <img src={shot1} alt="shot1" className="image" />
                <img src={shot2} alt="shot2" className="image" />
                <img src={shot3} alt="shot3" className="image" />
                <img src={shot4} alt="shot4" className="image" />
                <img src={shot5} alt="shot5" className="image" />
            </div>


        </div>
    )
}

export default PICS_PROJECT_MICROMOVIE