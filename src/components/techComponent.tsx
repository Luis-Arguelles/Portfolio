import React from 'react';
import "../styles/techComponent.css";

interface techComponentProps{
    techName: string;
    techLogo: string;
}
const TechComponent = (props: techComponentProps) => {

    const { techName, techLogo} = props;     

    return(
        <div className="technology-container">
            <img className="technology-logo" src={techLogo}/>
            <p className="tech-name">{techName}</p>
        </div>
    )
}


export default TechComponent;