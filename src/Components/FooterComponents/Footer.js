import "./FooterStyles.css";
import { FaMailBulk, FaLinkedin, FaGithub } from "react-icons/fa"
import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{
                                color: "#fff", marginRight: "2rem"
                            }} />
                            rosswilliamsrw11@gmail.com
                        </h4>
                    </div>
                    <div className="GitHub">
                        <h4>
                            <FaGithub size={20} style={{
                                color: "#fff", marginRight: "2rem"
                            }} />
                            https://github.com/RossWilliamsProject
                        </h4>
                    </div>
                    <div className="LinkedIn">
                        <h4>
                            <FaLinkedin size={20} style={{
                                color: "#fff", marginRight: "2rem"
                            }} />
                            https://www.linkedin.com/in/ross-williams-3a433b213/
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>
                        About Me
                    </h4>
                    <p>This is a short description about me and what ive done</p>
                    <div className="GitHub">
                        <FaGithub size={20} style={{
                            color: "#fff", marginRight: "2rem"
                        }} />
                    </div>
                    <div className="Linkedin">
                        <FaLinkedin size={20} style={{
                            color: "#fff", marginRight: "2rem"
                        }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer