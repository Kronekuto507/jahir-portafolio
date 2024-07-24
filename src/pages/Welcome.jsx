
import "../pages-css/welcome.css"
import Carousel from "../components/carousel-component/Carousel";
import images from  "../components/carousel-component/carousel-data.json"
import { Link } from "react-router-dom";
import routes from "../utils/routes.json"

function LinkComponent({route}){
    return (
        <div className="button">
            <Link to={route.href}><h3>{route.name}</h3></Link>
        </div>
    )
}

//Pagina Welcome

function Welcome(){
    const rutas = routes.routes
    return (
        <div className="welcome-page">
            <Carousel images={images.images}></Carousel>
            <div className="name">
                <h1 id="photographer-name"></h1>
                <div className="button-wrapper"> 
                    {rutas.map((route,index)=> {
                        //Retornar componente con Links
                        return (<LinkComponent route={route} key={index}/>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default Welcome;