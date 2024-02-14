import React from "react";
import "../styles/contact.css"

const Contact = () => {


    const handleClick = () => {
        window.open('mailto:luisarguelles2003@gmail.com', '_blank');
    }

    return (
        <div>
            <h1>Contact</h1>
            <button className="contact-button" onClick={handleClick}>Contactez-moi</button>
        </div>
    );

}

export default Contact;