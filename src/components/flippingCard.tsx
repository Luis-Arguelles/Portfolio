import React, { useState } from 'react';
import Card from './card';
import "../styles/flippingCard.css"
import { CSSTransition } from 'react-transition-group';

interface FlippingCardProps {
    image: string;
    frontTitle: string;
    description: string;
}

const FlippingCard: React.FC<FlippingCardProps> = (props) => {

    const { image, frontTitle, description } = props;

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
                <Card onClick={flipCard} image={image} frontTitle={frontTitle} description={description}/>     
            </CSSTransition>
        </div>
    )
}


export default FlippingCard;

