import React, { useState } from 'react';
import Card from './card';
import "../styles/flippingCard.css"
import { CSSTransition } from 'react-transition-group';

interface FlippingCardProps {
    properties: {    
        title: string;
        image: string;
        description: string;
        technologies: string[];
        tehcnologiesIcon: string[];
        skills: number[];
    }
}


const FlippingCard: React.FC<FlippingCardProps> = ({properties}) => {

    const [isFlipped, setIsFlipped] = useState(true);

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    }

    return(
        <div className="flippingCard">   
            <CSSTransition
                in={isFlipped}
                timeout={300}
                classNames="flip"
            >
                <Card onClick={flipCard} properties={properties}/>     
            </CSSTransition>
        </div>
    )
}


export default FlippingCard;

