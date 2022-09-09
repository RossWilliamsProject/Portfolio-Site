import "./HeroImageStyles.css";
import tesselation from "../../Assets/tesselation.jpg";
import React from 'react';

const HomeHeroImage = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img"
                    src={tesselation}
                    alt="tesselation"
                />
            </div>
            <div className="content">   
                <h1>Ross Williams</h1>
                <p>Software Development Portfolio</p>

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