import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import React from "react";

function PlanesDescriptor({informacion}){
    const imagenEstilo = {
        backgroundImage:`url(${informacion.src})`,
        bacgroundSize:'cover',
        height:'100%'
    }
    return (
        <>
        <img src={informacion.src} alt={informacion.alt}></img>
        <div className="plan-seccion">
            <h3>{informacion.tipo}</h3>
            <h4>{informacion.precio}</h4>
            <hr></hr>
            <ul>
                {informacion.descripcionLista.map((contenido,index) => {
                    return(<li key={index}>{contenido}</li>)
                })}
            </ul>
        </div>
        </>
    )
}

function SeccionGrid({lista}){
    return(
        <div>
            <div className="seccion-grid">
                {lista.map((elemento,index) => {
                    return (<PlanesDescriptor informacion={elemento} key={index} />)
                })}
            </div>
        </div>
    )
}

export default SeccionGrid