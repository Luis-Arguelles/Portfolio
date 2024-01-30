import React, { useState } from 'react';
import Card from './card';
import "../styles/flippingCard.css"


const FlippingCard = () => {

    const [isFlipped, setIsFlipped] = useState(false);


    const flipCard = () => {
        setIsFlipped(!isFlipped);
    }

    return(
        <div className="flippingCard">
            <Card />    
        </div>
    )
}


export default FlippingCard;

