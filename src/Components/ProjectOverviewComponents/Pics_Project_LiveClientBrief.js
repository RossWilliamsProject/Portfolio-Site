import "./OverviewStyles.css";

import brief1 from "../../Assets/LiveBrief/brief1.jpg";
import brief3 from "../../Assets/LiveBrief/brief3.png";
import brief4 from "../../Assets/LiveBrief/brief4.png";


const PICS_PROJECT_LIVECLIENTBRIEF = () => {
    return (
        <div className="overview">

            <div className="cent">
                <p> Scene Renders</p>
                <img src={brief1} alt="brief1" className="image" />
                <img src={brief3} alt="brief3" className="image" />
                <img src={brief4} alt="brief4" className="image" />
            </div>
        </div>
    )
}

export default PICS_PROJECT_LIVECLIENTBRIEF