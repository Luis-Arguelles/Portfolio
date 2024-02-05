import React from 'react';
import '../styles/card.css';

interface CardProps {
    onClick: () => void;
    image: string;
    frontTitle: string;
    description: string;
}


const Card: React.FC<CardProps> = ( { onClick, image, frontTitle, description } ) => {
    return(
        <div className='card' onClick={onClick}>
            <div className='card-back'>
                <h1 className='title-card'>Back</h1>
            </div>
            <div className='card-front'>
                <img className="image" src={image}/>
                <h1 className='title-card'>{frontTitle}</h1>
                <p className='description-card'>{description}</p>
            </div>
        </div>
    )

};




export default Card;