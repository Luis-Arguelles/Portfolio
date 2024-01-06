//navbar
import React from "react";
import { Link } from "react-router-dom"; 
import '../styles/navBar.css';

const NavBar = () => {

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>

            </ul>
        </nav>
    );

}


export default NavBar;