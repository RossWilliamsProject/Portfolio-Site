import "./HeroImageStyles.css";
import tesselation from "C:/Work/NotUni/portfolio-site/src/Assets/tesselation.jpg";
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
                <p>Scroll For Projects</p>
                <p>v</p>

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
        </div>
    )
}

export default HomeHeroImage