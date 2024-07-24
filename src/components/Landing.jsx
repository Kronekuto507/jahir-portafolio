import React from "react";
import "./landing.css"

function Landing({textToAppear,src, xPosition, yPosition}){
    const landingStyle = {
        backgroundSize:'cover',
        backgroundPosition:`${xPosition} ${yPosition}`,
        backgroundImage:`url(${src})`,
        width:'100%',
        height:'89vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        color:'white'
    }
    return (
        <div>
            <div className="landing-container" style={landingStyle}>
                <div className="text">
                <h1>{textToAppear}</h1>
                </div>
            </div>
        </div>
    )
}

export default Landing