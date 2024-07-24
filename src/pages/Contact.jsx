import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import ContactForm from "../components/form-component/ContactForm";
function Contact(){
    return (
        <div>
            <Nav />
            <Landing src={'../src/assets/jahir/jahir-contact.jpg'} textToAppear={'CONTACTO'} xPosition={'center'} yPosition={'54%'}/>
            <div className="container">
                <ContactForm />
            </div>
            <Footer />
        </div>
    )
}

export default Contact