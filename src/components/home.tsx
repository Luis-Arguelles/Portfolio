import React from "react";
import "../styles/home.css";
import photo from "../assets/Yo-removebg-preview.png";


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
                <p>Skills container</p>
                <p>Skill 1</p>
                <p>Skill 2</p>
                <p>Skill 3</p>
            </div>
        </div>
    );

}

export default Home;