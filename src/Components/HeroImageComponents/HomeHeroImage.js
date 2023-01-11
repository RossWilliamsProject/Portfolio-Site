import "./HeroImageStyles.css";
import sea from "../../Assets/seaHero.png";
import React from 'react';

const HomeHeroImage = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img"
                    src={sea}
                    alt="sea"
                />
            </div>
            <div className="content">   
                <h1>Jasmine Blythe</h1>
                <p>Animation Portfolio</p>

                <div className="btn-container">
                    {/*}
                    <Link to="/Projects" className="btn">
                        Projects
                    </Link>
                    <Link to="/Contact" className="btn">
                        Contact
                    </Link>
                    */}
                </div>
            </div>
            <div className="bottom">
                <p >⌄</p>
            </div>
        </div>
    )
}

export default HomeHeroImage