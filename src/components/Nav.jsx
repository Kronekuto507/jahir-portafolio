import React from "react";
import { Link } from "react-router-dom";
import "./nav.css"
function Nav(){
    return (
        <nav className="nav">
            <img src="../src/assets/logos/nav-logo.png" alt="logo" />
            <ul>
                <li>
                    <Link to={"/"}><h3>BIENVENIDA</h3></Link>
                </li>
                <li>
                    <Link to={"/portfolio"}><h3>PORTAFOLIO</h3></Link>
                </li>
                <li>
                    <Link to={"/planes"}><h3>PLANES</h3></Link>
                </li>
                <li>
                    <Link to={"/contact"}><h3>CONTACTO</h3></Link>
                </li>
            </ul>
        </nav>
    )
}


export default Nav