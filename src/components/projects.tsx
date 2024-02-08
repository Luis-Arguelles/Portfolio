import React from "react";
import FlippingCard from "./flippingCard";
import "../styles/projects.css";
import Instagram from "../assets/Instagram.png";
import Flags from "../assets/flags.jpg";
import GeneticAlgorithm from "../assets/GeneticAlgorithm.jpeg";
import Notes from "../assets/Notes.jpg";
import Blog from "../assets/Blog.jpg";

//Logos
import ReactNative from "../assets/techIcons/ReactNative.svg";
import Python from "../assets/techIcons/Python.svg";
import Laravel from "../assets/techIcons/Laravel.png";
import SpringBoot from "../assets/techIcons/SpringBoot.png";
import MySQL from "../assets/techIcons/MySQL.png";

const Projects = () => {

    const petitGramProperties = {
        title: "PetitGram",
        description: "Application mobile qu'imite certaines fonctionnalités d'Instagram, avec une interface simple et intuitive, qui permet la creation des posts, ainsi que des likes, commentaires et d'autres fonctionnalités.",
        image: Instagram,
        technologies: ["React Native"],
        tehcnologiesIcon: [ReactNative],
        skills: ["Adapter des applications sur un ensemble des supports"],
    };

    const flagsProperties = {

        title: "Country cards",
        description: "Application mobile qui permet de visualiser les drapeaux de tous les pays du monde, avec des informations sur chaque pays, avec une barre de recherche pour faciliter la recherche et la possibilité de filtrer les pays par continent.",
        image: Flags,
        technologies: ["React Native"],
        tehcnologiesIcon: [ReactNative],
        skills: ["Adapter des applications sur un ensemble des supports"],

    };

    const geneticAlgorithmProperties = {

        title: "Algorithme génétique",
        description: "Algorithme génétique qui essaie de trouver une solution optimale pour résoudre le problème du voyageur du commerce (TSP), avec une sortie graphique pour visualiser le résultat.",
        image: GeneticAlgorithm,
        technologies: ["Python"],
        tehcnologiesIcon: [Python],
        skills: ["Adapter des applications sur un ensemble des supports"],

    };

    const notesProperties = {

        title: "CRUD site web de notes",
        description: "Mise en place d'un CRUD pour un site web des notes des élèves, avec une base de données pour stocker les notes.",
        image: Notes,
        technologies: ["Laravel", "SQL"],
        tehcnologiesIcon: [Laravel, MySQL],
        skills: ["Adapter des applications sur un ensemble des supports"],

    };

    const blogProperties = {

        title: "CRUD pour un blog",
        description: "Mise en place d'un CRUD pour un blog, avec une base de données pour stocker les articles et les éditeurs.",
        image: Blog,
        technologies: ["Spring Boot", "SQL"],
        tehcnologiesIcon: [SpringBoot, MySQL],
        skills: ["Adapter des applications sur un ensemble des supports"],

    };
     
    return (
        <div className="projects">
            <h1 className="title">Projets</h1>
            <div className="cards-container">
                <div className="inner-cards-container">
                    <FlippingCard properties={petitGramProperties}/>
                    <FlippingCard properties={flagsProperties}/>
                    <FlippingCard properties={geneticAlgorithmProperties}/>
                </div>

                <div className="inner-cards-container">
                    <FlippingCard properties={notesProperties}/>
                    <FlippingCard properties={blogProperties}/>
                </div>     
            </div>
        </div>
    );

}

export default Projects;