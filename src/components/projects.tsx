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
import Redux from "../assets/techIcons/Redux.svg";
import Firebase from "../assets/techIcons/Firebase.webp";
import ReactNavigation from "../assets/techIcons/ReactNavigation.svg";
import Axios from "../assets/techIcons/Axios.png";

const Projects = () => {

    const petitGramProperties = {
        title: "PetitGram",
        description: "Application mobile qu'imite certaines fonctionnalités d'Instagram, avec une interface simple et intuitive, qui permet la creation des posts, ainsi que des likes, commentaires et d'autres fonctionnalités.",
        image: Instagram,
        technologies: ["React Native", "React Navigation", "Redux", "Firebase", ],
        tehcnologiesIcon: [ReactNative, ReactNavigation, Redux, Firebase],
        skills: [1, 2, 3],
    };

    const flagsProperties = {

        title: "Country cards",
        description: "Application mobile qui permet de visualiser les drapeaux de tous les pays du monde, des informations sur chaque pays, une barre de recherche et la possibilité de filtrer les pays par continent.",
        image: Flags,
        technologies: ["React Native","React Navigation", "Redux", "Axios"],
        tehcnologiesIcon: [ReactNative, ReactNavigation, Redux, Axios],
        skills: [1, 2],

    };

    const geneticAlgorithmProperties = {

        title: "Algorithme génétique",
        description: "Algorithme génétique qui essaie de trouver une solution optimale pour résoudre le problème du voyageur du commerce (TSP), avec une sortie graphique pour visualiser le résultat.",
        image: GeneticAlgorithm,
        technologies: ["Python"],
        tehcnologiesIcon: [Python],
        skills: [1, 2, 3],

    };

    const notesProperties = {

        title: "CRUD site web de notes",
        description: "Mise en place d'un CRUD pour un site web des notes des élèves, avec une base de données pour stocker les notes.",
        image: Notes,
        technologies: ["Laravel", "SQL"],
        tehcnologiesIcon: [Laravel, MySQL],
        skills: [1, 2],

    };

    const blogProperties = {

        title: "CRUD pour un blog",
        description: "Mise en place d'un CRUD pour un blog, avec une base de données pour stocker les articles et les éditeurs.",
        image: Blog,
        technologies: ["Spring Boot", "SQL"],
        tehcnologiesIcon: [SpringBoot, MySQL],
        skills: [1, 2],

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