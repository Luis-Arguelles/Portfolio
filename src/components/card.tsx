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
                <h1 className='back-subtitle'>Compétences du PN</h1>
                <div className='skills-container'>
                    <div className='first-skill'>
                        <p className='skill-number'>1</p>
                    </div>
                    <div className='second-skill'>
                        <p className='skill-number'>2</p>
                    </div>
                    <div className='third-skill'>
                        <p className='skill-number'>3</p>
                    </div>

                    {/* properties.skills.map((skill, index) => {
                        return <h2 key={index} className='skill-text'>{skill}</h2>
                    }) */}
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