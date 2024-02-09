import React, {useState} from 'react';
import '../styles/card.css';

interface CardProps {
    onClick: () => void;
    properties: {
        image: string;
        title: string;
        description: string;
        technologies: string[];
        tehcnologiesIcon: string[];
        skills: number[];
    }
}

const Card: React.FC<CardProps> = ( { onClick, properties } ) => {

    const [focusedSkill, setFocusedSkill] = useState<number | null>(null);
    const [firstSkillClassName, setFirstSkillClassName] = useState<string>('first-skill');
    const [secondSkillClassName, setSecondSkillClassName] = useState<string>('second-skill');
    const [thirdSkillClassName, setThirdSkillClassName] = useState<string>('third-skill');

    const skills = [
        "Adapter des applications sur un ensemble des supports", 
        "Analyser et optimiser des applications", 
        "Manager une équipe enformatique"
    ]



    const handleFocus = (index: number) => {

        if (index === 0) {
            setFirstSkillClassName('first-skill-focused');
            setSecondSkillClassName('second-skill-hidden');
            setThirdSkillClassName('third-skill-hidden');
        }

        else if (index === 1) {
            setSecondSkillClassName('second-skill-focused');
        }

        else if (index === 2) {
            setThirdSkillClassName('third-skill-focused');
        }
    }

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
                    {
                        properties.skills.map((skill, index) => {
                            if (skill === 1) {
                                return <div className={firstSkillClassName} onMouseEnter={
                                    () => { 
                                        setFocusedSkill(index)
                                        handleFocus(index)
                                    }
                                }                                             
                                onMouseLeave={() => setFocusedSkill(null)}> <p className='skill-number'>1</p> </div>
                            }
                            if (skill === 2) {
                                return <div className={secondSkillClassName} onMouseEnter={() => setFocusedSkill(index)} onMouseLeave={() => setFocusedSkill(null)}> <p className='skill-number'>2</p> </div>
                            }
                            if (skill === 3) {
                                return <div className={thirdSkillClassName} onMouseEnter={() => setFocusedSkill(index)} onMouseLeave={() => setFocusedSkill(null)}> <p className='skill-number'>3</p> </div>
                            }
                        })
                    }

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