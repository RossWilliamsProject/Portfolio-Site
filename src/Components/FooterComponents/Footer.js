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
                            <a href='https://www.linkedin.com/in/ross-williams-3a433b213/'>
                                LinkedIn
                            </a>
                        </h4>
                    </div>
                    <div className="email">
                        <h4 href='jasmineblahblah@gmail.com'>
                            <FaMailBulk size={20} style={{
                                color: "#fff", marginRight: "2rem"
                            }} />
                            Email: jasmineblahblah@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>
                        About Me
                    </h4>
                    <p>
                        Im Jasmine, Blah blah blah blah
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer