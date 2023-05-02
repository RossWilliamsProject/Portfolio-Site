import "./FooterStyles.css";
import { FaMailBulk, FaLinkedin } from "react-icons/fa"
import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="LinkedIn">
                        <h4>
                            <a href='https://www.linkedin.com/in/ross-williams-3a433b213/'>
                                <FaLinkedin size={20} style={{
                                    color: "#fff", marginRight: "2rem"
                                }} />
                            </a>
                            <a href='https://www.linkedin.com/in/jasmine-blythe-a71253253//'>
                                LinkedIn
                            </a>
                        </h4>
                    </div>
                    <div className="email">
                        <h4 href='jasmine200blyth@gmail.com'>
                            <FaMailBulk size={20} style={{
                                color: "#fff", marginRight: "2rem"
                            }} />
                            Email: jasmine200blyth@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>
                        About Me
                    </h4>
                    <p>
                        I'm Jasmine, an animation graduate looking for a job in 3D art. 
                        Experienced using Maya - see projects page for more details!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer