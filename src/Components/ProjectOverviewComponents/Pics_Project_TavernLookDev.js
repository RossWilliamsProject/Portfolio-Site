import "./OverviewStyles.css";

import shot1 from "../../Assets/TavernLookDev/Tavern1.jpg";
import shot2 from "../../Assets/TavernLookDev/Tavern2.jpg";
import shot3 from "../../Assets/TavernLookDev/Tavern3.jpg";
import shot4 from "../../Assets/TavernLookDev/Tavern4.jpg";
import shot5 from "../../Assets/TavernLookDev/Tavern5.jpg";
import shot6 from "../../Assets/TavernLookDev/Tavern6.jpg";
import shot7 from "../../Assets/TavernLookDev/Tavern7.jpg";
import shot8 from "../../Assets/TavernLookDev/Taverrn8.jpg";

const PICS_PROJECT_TAVERNLOOKDEV = () => {
    return (
        <div className="overview">

            <div className="cent">
                <p> Renders </p>
                <img src={shot1} alt="shot1" className="image" />
                <img src={shot2} alt="shot2" className="image" />
                <img src={shot3} alt="shot3" className="image" />
                <img src={shot4} alt="shot4" className="image" />
                <img src={shot5} alt="shot5" className="image" />
                <img src={shot6} alt="shot6" className="image" />
                <img src={shot7} alt="shot7" className="image" />
                <img src={shot8} alt="shot8" className="image" />

            </div>
        </div>
    )
}

export default PICS_PROJECT_TAVERNLOOKDEV