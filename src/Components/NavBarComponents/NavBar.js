import "./NavBarStyles.css";

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"

const NavBar = () => {

    const [click, setClick] = useState(false);
    const [color, setColor] = useState(false);

    const handleClick = () => setClick(!click)
    const changeColor = () => {
        if(window.scrollY >=100){
            setColor(true);
        } else {
            setColor(false);
        }
    }

    window.addEventListener("scroll", changeColor);


    return (
        <div className={color ? "header header-bg" : "header"}>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/"> Home </Link>
                </li>
                <li>
                    <Link to="/Projects"> Projects </Link>
                </li>
                <li>
                    <Link to="/About"> About </Link>
                </li>
                <li>
                    <Link to="/Contact"> Contact </Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (
                    <FaTimes size={20} style={{color:"#1a1919"}} />
                ) : (
                    <FaBars size={20} style={{color:"#1a1919"}} />)
                }

            </div>
            <Link to="/">
                <h1>Portfolio</h1>
            </Link>
        </div>
    )
}

export default NavBar