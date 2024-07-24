import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "../components/footer.css"

function Footer(){
    return (
        <footer className="footer">
            <div className="logo-and-socials">
                <img src="../src/assets/logos/nav-logo.png" alt="logo"></img>
                <div className="socials">
                    <Link to={'https://www.instagram.com/_lliro_/'}><FontAwesomeIcon icon={faInstagram} /></Link>
                    <Link to={'https://www.facebook.com/jahir.sanchez.370'}><FontAwesomeIcon icon={faFacebook} /></Link>
                    
                </div>
                <p>All content Copyright © 2024 lliro</p>
            </div>
            <h3>Hecho por: Aarón Cigarruista</h3>
        </footer>
    )
}

export default Footer
