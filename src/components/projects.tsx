import React from "react";
import FlippingCard from "./flippingCard";
import "../styles/projects.css";
import icon from "../assets/Instagram.png";
import flags from "../assets/flags.jpg";

const Projects = () => {

    const TitleInstagram = "PetiGram"
    const descriptionInstagram = "Application mobile qui essaie d'imiter les fonctinalités d'Instagram, mais avec des fonctionnalités plus simples."
    const TitleFlags = "Country cards"
    const descriptionFlags = ""


    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="cards-container">
                <div className="inner-cards-container">
                    <FlippingCard image={icon} frontTitle={TitleInstagram} description={descriptionInstagram}/>
                    <FlippingCard image={flags} frontTitle={TitleFlags} description={descriptionFlags}/>
                    <FlippingCard image={flags} frontTitle={TitleFlags} description={descriptionFlags}/>
                </div>

                <div className="inner-cards-container">
                    <FlippingCard image={flags} frontTitle={TitleFlags} description={descriptionFlags}/>
                    <FlippingCard image={icon} frontTitle={TitleInstagram} description={descriptionInstagram}/>
                    <FlippingCard image={flags} frontTitle={TitleFlags} description={descriptionFlags}/>
                </div>     
            </div>
        </div>
    );

}

export default Projects;