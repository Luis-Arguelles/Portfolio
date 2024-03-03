//navbar
import React from "react";
import { Link } from "react-router-dom"; 
import '../styles/navBar.css';
import CV from "../assets/CV.pdf";

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
                <Link to="/pn">Compétences</Link>
            </li>
        </ul>

        <div className="contactButton" onClick={() => window.open("mailto:luisarguelles2003@gmail.com", "_blank")}>
            <p className="contactButtonText">Contact</p>
        </div>

        <div className="downloadButton">
            <a href={CV} download="CV" className="downloadButtonText">Télécharger CV</a>
        </div>
    </nav>

    );

}


export default NavBar;