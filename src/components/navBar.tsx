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
                <Link to="/projects">Projets</Link>
            </li>
            <li className="content">
                <Link to="/contact">Contact</Link>
            </li>
            <li className="download">
                <Link to="/download">Télécharger CV</Link>
            </li>
        </ul>
    </nav>

    );

}


export default NavBar;