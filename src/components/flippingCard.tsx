import React, { useState } from 'react';
import Card from './card';
import "../styles/flippingCard.css"
import { CSSTransition } from 'react-transition-group';

const FlippingCard = () => {

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
                <Card onClick={flipCard}/>     
            </CSSTransition>
        </div>
    )
}


export default FlippingCard;

