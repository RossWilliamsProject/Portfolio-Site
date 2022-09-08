import "./FooterStyles.css";
import { FaMailBulk, FaLinkedin, FaGithub } from "react-icons/fa"
import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="email">
                        <h4 href='rosswilliamsrw11@gmail.com'>
                            <FaMailBulk size={20} style={{
                                color: "#fff", marginRight: "2rem"
                            }} />
                            rosswilliamsrw11@gmail.com
                        </h4>
                    </div>
                    <div className="GitHub">
                        <h4 href='https://github.com/RossWilliamsProject'>
                            <FaGithub size={20} style={{
                                color: "#fff", marginRight: "2rem"
                            }} />
                            https://github.com/RossWilliamsProject
                        </h4>
                    </div>
                    <div className="LinkedIn">
                        <h4 href='https://www.linkedin.com/in/ross-williams-3a433b213/'>
                            <FaLinkedin size={20} style={{
                                color: "#fff", marginRight: "2rem"
                            }} />
                            www.linkedin.com/in/ross-williams-3a433b213/
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>
                        About Me
                    </h4>
                    <p>
                        Im Ross,
                        presently a Computer Science MSci student at University of Nottingham in my fourth and final year,
                        looking for a graduate job in data or UI/UX.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer