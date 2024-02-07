import React, { useState } from 'react';
import Card from './card';
import "../styles/flippingCard.css"
import { CSSTransition } from 'react-transition-group';

interface FlippingCardProps {
    image: string;
    frontTitle: string;
    description: string;
    properties: backProperties;
}

interface backProperties {
    technologies: string[];
    tehcnologiesIcon: string[];
    skills: string[];
}

const FlippingCard: React.FC<FlippingCardProps> = (props) => {

    const { image, frontTitle, description, properties } = props;

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
                <Card onClick={flipCard} image={image} frontTitle={frontTitle} description={description} properties={properties}/>     
            </CSSTransition>
        </div>
    )
}


export default FlippingCard;

