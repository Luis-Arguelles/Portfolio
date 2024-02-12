import React from "react";
import "../styles/home.css";
import TechComponent from "./techComponent";
import photo from "../assets/Yo-removebg-preview.png";
import JavaScript from "../assets/techIcons/JavaScript.png";
import ReactLogo from "../assets/techIcons/React.svg"
import ReactNative from "../assets/techIcons/ReactNative.svg"
import Python from "../assets/techIcons/Python.svg"
import HTML from "../assets/techIcons/HTML.png"
import CSS from "../assets/techIcons/CSS.png"
import Laravel from "../assets/techIcons/Laravel.png"
import SpringBoot from "../assets/techIcons/SpringBoot.png"
import SQL from "../assets/techIcons/MySQL.png"
import MongoDB from "../assets/techIcons/MongoDB.png"
import Java from "../assets/techIcons/Java.png"
import Csharp from "../assets/techIcons/Csharp.png"
import CPlusPlus from "../assets/techIcons/C++.png"
import Express from "../assets/techIcons/Express.svg"
import Git from "../assets/techIcons/Git.png"
import Mongoose from "../assets/techIcons/Mongoose.png"
import TypeScript from "../assets/techIcons/TypeScript.png"
import Axios from "../assets/techIcons/Axios.png"
import Redux from "../assets/techIcons/Redux.svg"
import ReactNavigation from "../assets/techIcons/ReactNavigation.svg"

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
                    <TechComponent techName="TypeScript" techLogo={TypeScript}/>
                    <TechComponent techName="HTML" techLogo={HTML}/>
                    <TechComponent techName="CSS" techLogo={CSS}/>
                    <TechComponent techName="Express" techLogo={Express}/>

                </div>
                <div className="technologies-container">
                    <TechComponent techName="React" techLogo={ReactLogo}/>
                    <TechComponent techName="React Native" techLogo={ReactNative}/>
                    <TechComponent techName="React Navigation" techLogo={ReactNavigation}/>
                    <TechComponent techName="Redux" techLogo={Redux}/>
                    <TechComponent techName="Axios" techLogo={Axios}/>
                </div>
                <div className="technologies-container">
                    <TechComponent techName="Laravel" techLogo={Laravel}/>
                    <TechComponent techName="SpringBoot" techLogo={SpringBoot}/>
                    <TechComponent techName="MongoDB" techLogo={MongoDB}/>
                    <TechComponent techName="Mongoose" techLogo={Mongoose}/>
                    <TechComponent techName="SQL" techLogo={SQL}/>
                </div>
                <div className="technologies-container">
                    <TechComponent techName="Python" techLogo={Python}/>
                    <TechComponent techName="Java" techLogo={Java}/>
                    <TechComponent techName="C#" techLogo={Csharp}/>
                    <TechComponent techName="C++" techLogo={CPlusPlus}/>
                    <TechComponent techName="Git" techLogo={Git}/>
                </div>
            </div>
        </div>
    );

}

export default Home;