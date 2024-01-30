//navbar
import React from "react";
import { Link } from "react-router-dom"; 
import '../styles/navBar.css';

const NavBar = () => {

    return (
    
    <nav>
        <ul>
            <li className="content">
                <Link to="/">Home</Link>
            </li>
            <li className="content">
                <Link to="/projects">Projects</Link>
            </li>
            <li className="content">
                <Link to="/contact">Contact</Link>
            </li>
            <li className="download">
                <Link to="/download">Download CV</Link>
            </li>
        </ul>
    </nav>

    );

}


export default NavBar;