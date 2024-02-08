import React from 'react';
import '../styles/card.css';

interface CardProps {
    onClick: () => void;
    properties: {
        image: string;
        title: string;
        description: string;
        technologies: string[];
        tehcnologiesIcon: string[];
        skills: string[];
    }
}

const Card: React.FC<CardProps> = ( { onClick, properties } ) => {
    return(
        <div className='card' onClick={onClick}>
            <div className='card-back'>
                <h1 className='back-subtitle'>Technologies utilisées</h1>
                <div className='logos-container'>
                    {properties.tehcnologiesIcon.map((icon, index) => {
                        return <img key={index} src={icon} className="tech-logo"/>
                    })}
                </div>
                <div className='tech-container'>
                    {properties.technologies.map((tech, index) => {
                        return <h2 key={index} className='tech-text'>{tech}</h2>
                    })}
                </div>

            </div>
            <div className='card-front'>
                <img className="image" src={properties.image}/>
                <h1 className='title-card'>{properties.title}</h1>
                <p className='description-card'>{properties.description}</p>
            </div>
        </div>
    )

};




export default Card;