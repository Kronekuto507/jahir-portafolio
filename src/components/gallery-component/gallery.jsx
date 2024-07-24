import React from "react";
import "../gallery-component/gallery.css"

function ImageFrame({props}){
const classesNames = [`gallery__element--${props.index}`, `item--${props.index}`]
    return (
    <figure className={classesNames.join(' ')}>
        <img className={'gallery__img'} src={props.src} alt={props.alt}></img>
    </figure>
    )
}

function Gallery({imageLocs}){
    return (
        <div className="gallery">
            {imageLocs.map((image,index) =>{
                return (<ImageFrame props={image} key={index}/>)
            })}
        </div>
    )
}

export default Gallery