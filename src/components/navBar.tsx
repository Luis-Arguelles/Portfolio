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
                <Link to="/" className="pages">Home</Link>
            </li>
            <li className="content">
                <Link to="/projects" className="pages">Projets</Link>
            </li>
            <li className="content">
                <Link to="/pn" className="pages">Compétences</Link>
            </li>
        </ul>

        <div className="gitHubButton">
            <a href="https://github.com/Luis-Arguelles" target="_blank" className="buttonText">GitHub</a>
        </div>

        <div className="contactButton" onClick={() => window.open("mailto:luisarguelles2003@gmail.com", "_blank")}>
            <p className="buttonText">Contact</p>
        </div>

        <div className="downloadButton">
            <a  href={CV} target="_blank" className="downloadButtonText">CV</a>
        </div>
    </nav>

    );

}


export default NavBar;