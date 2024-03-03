import FlippingCard from "./flippingCard";
import Instagram from "../assets/Instagram.png";
import GeneticAlgorithm from "../assets/GeneticAlgorithm.jpeg";
import "../styles/projects.css";

//Logos
import ReactNative from "../assets/techIcons/ReactNative.svg";
import Python from "../assets/techIcons/Python.svg";
import Redux from "../assets/techIcons/Redux.svg";
import Firebase from "../assets/techIcons/Firebase.webp";
import ReactNavigation from "../assets/techIcons/ReactNavigation.svg";


const Projects2 = () => {

    const petitGramProperties = {
        title: "PetitGram",
        description: "Application mobile qu'imite certaines fonctionnalités d'Instagram, avec une interface simple et intuitive, qui permet la creation des posts, ainsi que des likes, commentaires et d'autres fonctionnalités.",
        image: Instagram,
        technologies: ["React Native", "React Navigation", "Redux", "Firebase", ],
        tehcnologiesIcon: [ReactNative, ReactNavigation, Redux, Firebase],
        skills: [1, 2, 3],
    };

    const geneticAlgorithmProperties = {

        title: "Algorithme génétique",
        description: "Algorithme génétique qui essaie de trouver une solution optimale pour résoudre le problème du voyageur du commerce (TSP), avec une sortie graphique pour visualiser le résultat.",
        image: GeneticAlgorithm,
        technologies: ["Python"],
        tehcnologiesIcon: [Python],
        skills: [1, 2, 3],

    };


    return(
        <div className="projects">
        <h1 className="title">Projets</h1>
        <div className="cards-container">
            <div className="inner-cards-container">
                <FlippingCard properties={petitGramProperties}/>
                <FlippingCard properties={geneticAlgorithmProperties}/>
            </div> 
        </div>
    </div>
    )
};


export default Projects2;