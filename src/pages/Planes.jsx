import React from "react";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import Landing from "../components/Landing.jsx";
import Separator from "../components/Separator.jsx";
import SeccionGrid from "../components/seccion-eventos/SeccionPlanes.jsx";
import descripcionPlanes from "../components/seccion-eventos/descripciones.json";
import descripcionEventos from "../components/seccion-eventos/descripciones.json";
import "../pages-css/planes.css"
function Planes(){
    return (
        <div>
            <Nav />
            <Landing src={'../src/assets/planes.jpg'} textToAppear={'PLANES'} xPosition={'center'} yPosition={'20%'}/>
            <div className="container">
                <Separator />
                <SeccionGrid lista={descripcionPlanes.descripcionesPlanes} />
                <Separator />
                <SeccionGrid lista={descripcionEventos.descripcionesEventos} />
            </div>
            <Footer />
        </div>
    )
}


export default Planes