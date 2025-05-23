import "./OverviewStyles.css";

import frank1 from "../../Assets/AntiqueShopLookDev/frank1.png";
import frank2 from "../../Assets/AntiqueShopLookDev/frank2.png";
import rose1 from "../../Assets/AntiqueShopLookDev/rose1.png";
import rose2 from "../../Assets/AntiqueShopLookDev/rose2.png";

import shop1 from "../../Assets/AntiqueShopLookDev/shop1.png";
import shop2 from "../../Assets/AntiqueShopLookDev/shop2.png";
import shop3 from "../../Assets/AntiqueShopLookDev/shop3.png";
import shop4 from "../../Assets/AntiqueShopLookDev/shop4.png";
import shop5 from "../../Assets/AntiqueShopLookDev/shop5.png";
import shop6 from "../../Assets/AntiqueShopLookDev/shop6.png";
import shop7 from "../../Assets/AntiqueShopLookDev/shop7.jpg";

import design1 from "../../Assets/AntiqueShopLookDev/design1.png";
import design2 from "../../Assets/AntiqueShopLookDev/design2.png";

const PICS_PROJECT_ANTIQUESHOP = () => {
    return (
        <div className="overview">

            <div className="cent">
                <p> Scene Renders</p>
                <img src={shop1} alt="shop1" className="image" />
                <img src={shop2} alt="shop2" className="image" />
                <img src={shop3} alt="shop3" className="image" />
                <img src={shop4} alt="shop4" className="image" />
                <img src={shop5} alt="shop5" className="image" />
                <img src={shop7} alt="shop7" className="image" />

                <p> Asset Renders</p>
                <img src={shop6} alt="shop6" className="image" />

                <p> Character Renders</p>
                <img src={frank1} alt="frank1" className="image" />
                <img src={frank2} alt="frank2" className="image" />

                <img src={rose1} alt="rose1" className="image" />
                <img src={rose2} alt="rose2" className="image" />

                <p> Design Insight</p>
                <img src={design1} alt="design1" className="image" />
                <img src={design2} alt="design2" className="image" />
            </div>


        </div>
    )
}

export default PICS_PROJECT_ANTIQUESHOP