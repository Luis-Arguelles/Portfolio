import React from "react";
import "../styles/home.css";
import TechComponent from "./techComponent";
import photo from "../assets/Yo-removebg-preview.png";
import JavaScript from "../assets/techIcons/JavaScript.png";
import ReactLogo from "../assets/techIcons/React.svg"


const Home = () => {

    return (
        <div className="container">
            <div className="presentation-container">
                <div className="presentation-text">
                    <h1 className="name">Luis Antonio Argüelles González.</h1>
                    <p className="paragraph">Étudiant en troisième année de BUT informatique parcours Réalisation d’Applications : conception, développement, validation à l'IUT Paul Sabatier de l'Université Toulouse III.</p>
                </div>
                    <img src={photo} alt="profilePhoto"/>
            </div>
            <div className="knowledge-container">
                <h2>Technologies</h2>
                <div className="technologies-container">
                    <TechComponent techName="JavaScript" techLogo={JavaScript}/>
                    <TechComponent techName="React" techLogo={ReactLogo}/>
                </div>
            </div>
        </div>
    );

}

export default Home;