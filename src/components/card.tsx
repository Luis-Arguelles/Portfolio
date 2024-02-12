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

    const [focusedSkill, setFocusedSkill] = useState<number>(0);
    const [firstSkillClassName, setFirstSkillClassName] = useState<string>('first-skill');
    const [secondSkillClassName, setSecondSkillClassName] = useState<string>('second-skill');
    const [thirdSkillClassName, setThirdSkillClassName] = useState<string>('third-skill');

    const skills = [
        "Adapter des applications sur un ensemble des supports", 
        "Analyser et optimiser des applications", 
        "Manager une équipe informatique"
    ]



    const handleFocus = (skill: number) => {

        if (skill === 1) {
            setFirstSkillClassName('first-skill-focused');
            setSecondSkillClassName('second-skill-hidden');
            setThirdSkillClassName('third-skill-hidden');
        }

        else if (skill === 2) {
            setSecondSkillClassName('second-skill-focused');
            setFirstSkillClassName('first-skill-hidden');
            setThirdSkillClassName('third-skill-hidden');
        }

        else if (skill === 3) {
            setThirdSkillClassName('third-skill-focused');
            setFirstSkillClassName('first-skill-hidden');
            setSecondSkillClassName('second-skill-hidden');
        }

        else if(skill === 0){
            setFirstSkillClassName('first-skill');
            setSecondSkillClassName('second-skill');
            setThirdSkillClassName('third-skill');
        }
    }

    return(
        <div className='card' onClick={onClick}>
            <div className='card-back'>

                <div className='back-top'>
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

                <div className='back-bottom'>
                    <h1 className='back-subtitle'>Compétences du PN</h1>
                    <div className='skills-container'>
                        {
                            properties.skills.map((skill) => {

                                if (skill === 1) {
                                    if(focusedSkill === 1){
                                        return (<div className='first-skill-focused' onMouseLeave={() => {
                                            setFocusedSkill(0);
                                            handleFocus(0)}}>
                                            <p className='skill-number-focused'>1</p>
                                            <h2 className='skill-text'>{skills[0]}</h2>
                                        </div>)
                                    }

                                    return (
                                    
                                    <div className={firstSkillClassName} 
                                    onMouseEnter={() => {
                                            setFocusedSkill(skill);
                                            handleFocus(skill);
                                        }}>
                                    <p className='skill-number'>1</p> </div> 
                                    )}


                                else if (skill === 2) {

                                    if(focusedSkill === 2){
                                        return (<div className='second-skill-focused' onMouseLeave={() => {
                                            setFocusedSkill(0);
                                            handleFocus(0)}}>
                                            <p className='skill-number-focused'>2</p>
                                            <h2 className='skill-text'>{skills[1]}</h2>
                                        </div>)
                                    }
                                    
                                    return <div className={secondSkillClassName} onMouseEnter={
                                        () => {
                                            setFocusedSkill(skill);
                                            handleFocus(skill);
                                        }
                                    } 
                                    onMouseLeave={() => {
                                        setFocusedSkill(0);
                                        handleFocus(0);
                                    }}> <p className='skill-number'>2</p> </div>
                                }

                                else {

                                    if(focusedSkill === 3){
                                        return (<div className='third-skill-focused' onMouseLeave={() => {
                                            setFocusedSkill(0);
                                            handleFocus(0)}}>
                                            <p className='skill-number-focused'>3</p>
                                            <h2 className='skill-text'>{skills[2]}</h2>
                                        </div>)
                                    }

                                    return <div className={thirdSkillClassName} onMouseEnter={() => {
                                        setFocusedSkill(skill);
                                        handleFocus(skill)
                                    }} 
                                    onMouseLeave={() => {
                                        setFocusedSkill(0);
                                        handleFocus(0);
                                    }}> <p className='skill-number'>3</p> </div>
                                }
                            })
                        }
                    </div>
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