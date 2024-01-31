import React from 'react';
import '../styles/card.css';

interface CardProps {
    onClick: () => void;
}


const Card: React.FC<CardProps> = ( { onClick } ) => {

    return(
        <div className='card' onClick={onClick}>
            <div className='card-back'>
                <h1 className='title-card'>Back</h1>
            </div>
            <div className='card-front'>
                <h1 className='title-card'>Front</h1>
            </div>
        </div>
    )

};




export default Card;