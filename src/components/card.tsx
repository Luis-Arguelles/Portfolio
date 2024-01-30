import React from 'react';
import '../styles/card.css';



const Card = () => {

    return(
        <div className='card'>
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