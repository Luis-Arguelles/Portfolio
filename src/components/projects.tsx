import React from "react";
import FlippingCard from "./flippingCard";
import "../styles/projects.css";

const Projects = () => {

    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="cards-container">
                <FlippingCard />
                <FlippingCard />
            </div>
        </div>
    );

}

export default Projects;