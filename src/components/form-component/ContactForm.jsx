import React from "react";
import { useState } from "react";
import "../form-component/form.css"

function ContactForm(){
    const [formData,setFormData] = useState({
        firstName:'',
        secondName:'',
        email:'',
        contactMethod:'',
        phone:'',
        typeOfPlan:'',
        recomendation:''

    })

    const checkIfSelected = () => {
        if (formData.contactMethod == 'Otro'){
            return(
            <>
                <label htmlFor="contactMethodN">
                    <h2>Escriba como se contacto:</h2>
                    <input name="contactMethodN" type="text" id="contactMethodN" onChange={handleChange} required></input>
                </label>
            </>)
        } else {
            return
        }
    }

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
        console.log(e.target.value)
        console.log(formData.contactMethod)
      };

    return(
        <div className="wrapper">
            <h1>CONTÁCTAME</h1>
            <form>
                <div className="nombre">
                <label htmlFor="firstName">
                    <h2>Primer nombre:</h2>
                    <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} required></input>
                </label>
                <label htmlFor="secondName">
                    <h2>Segundo nombre:</h2>
                    <input type="text" name="secondName" id="secondName" value={formData.secondName} onChange={handleChange} required></input>
                </label>
                </div>
                <label htmlFor="email">
                    <h2>Email:</h2>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required></input>
                </label>
                <div className="select">
                    <label htmlFor="contactMethod">
                        <h2>¿Como supiste sobre mi?</h2>
                        <select name="contactMethod" id="contactMethod" value={formData.contactMethod} onChange={handleChange} required>
                            <option value="Google">Google</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Una persona me recomendó">Una persona me recomendó</option>
                            <option value="Otro">Otro</option>
                        </select>

                    </label>
                    <label htmlFor="typeOfPlan">
                        <h2>¿Qué tipo de plan te gustaría?</h2>
                        <select name="typeOfPlan" id="typeOfPlan" value={formData.typeOfPlan} onChange={handleChange} required>
                            <option value="Bronce">Bronce</option>
                            <option value="Plata">Plata</option>
                            <option value="Oro">Oro</option>
                            <option value="Cumpleaños">Cumpleaños</option>
                            <option value="Premium">Premium</option>
                            <option value="VIP">VIP</option>
                            <option value="Deportivo">Deportivo</option>
                        </select>

                </label>
                </div>
                {checkIfSelected()}
                <label htmlFor="phone">
                    <h2>Phone:</h2>
                    <h3>Formato: 6000-0000</h3>
                    <input type="tel" name="phone" id="phone" value={formData.phone} pattern="[0-9]{4}-[0-9]{4}" onChange={handleChange} required></input>
                </label>
                <label htmlFor="recomendation">
                    <h2>¿Te gustaría hacer una sugerencia? Házmela saber</h2>
                    <textarea name="recomendation" id="recomendation" value={formData.recomendation} onChange={handleChange}>
                        
                    </textarea>
                </label>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default ContactForm