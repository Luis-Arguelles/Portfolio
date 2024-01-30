import React from "react";
import "../styles/home.css";
import photo from "../assets/Yo-removebg-preview.png";


const Home = () => {

    return (
        <div className="container">
            <div className="presentationBox">
                <h1>Hi! I'm Luis, React developer</h1>
            </div>
            <div className="photoBox">
                <img src={photo} alt="profilePhoto" />
            </div>
        </div>
    );

}

export default Home;