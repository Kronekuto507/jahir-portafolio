import React from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Landing from "../components/Landing"
function About(){
    return (
        <div>
            <Nav />
            <Landing src={'../src/assets/jahir/jahir-about.jpg'} textToAppear={'SOBRE MI'} xPosition={'30%'} yPosition={'40%'}/>
            <Footer />
        </div>
    )
}

export default About