
import React from "react";
import { useState, useEffect } from "react";
import "./Carousel.css"

function Carousel({images}){
    const [index, setIndex] = useState(0)
    const [fade, setFade] = useState(true)
    //Efecto de carousel
    useEffect(()=>{
        const intervalo = setInterval(() => {
            setFade(false)
            setTimeout(()=>{
                
                if (index<= 4){
                    setIndex(index + 1)
                    
                } else {
                    setIndex(0)
                }
                setFade(true)
            }, 500)
            console.log(index)
        }, 4000);
        return ()=> clearInterval(intervalo)
    }, [index])

        //Estilo del carrusel
    const carouselStyle= {
        backgroundImage:`url(${images[index].src})`,
        width:'inherit',
        height:'inherit',
        backgroundSize:'cover',
        backgroundPosition:'center center',
        display:'block',
        color:'white',
        transition: 'opacity 1s ease-in-out',
        opacity: fade? '1' : '0'

            
    }

    
    return (
        
        <div className="carousel" style={carouselStyle}>
            
        </div>
    )
}

export default Carousel;