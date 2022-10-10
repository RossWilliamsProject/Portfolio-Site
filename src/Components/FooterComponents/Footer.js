import "./FooterStyles.css";
import { FaMailBulk, FaLinkedin, FaGithub } from "react-icons/fa"
import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="GitHub">
                        <h4>
                            <a href="https://github.com/RossWilliamsProject">
                                <FaGithub size={20} style={{
                                    color: "#fff", marginRight: "2rem"
                                }} />
                            </a>
                            <a href="https://github.com/RossWilliamsProject">
                                GitHub
                            </a>
                        </h4>
                    </div>
                    <div className="LinkedIn">
                        <h4>
                            <a href='https://www.linkedin.com/in/ross-williams-3a433b213/'>
                                <FaLinkedin size={20} style={{
                                    color: "#fff", marginRight: "2rem"
                                }} />
                            </a>
                            <a href='https://www.linkedin.com/in/ross-williams-3a433b213/'>
                                LinkedIn
                            </a>
                        </h4>
                    </div>
                    <div className="email">
                        <h4 href='rosswilliamsrw11@gmail.com'>
                            <FaMailBulk size={20} style={{
                                color: "#fff", marginRight: "2rem"
                            }} />
                            Email: rosswilliamsrw11@gmail.com
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
                        looking for a graduate job in data science or UI/UX.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer