import React from 'react';
import "./About.css"
import aboutImg from "../../media/image/imgDavid.JPG";

export const About = () => {
  return (
    <div className='about-container'>
        <div className='about-img'>
          <img src={aboutImg} alt='fotoPerfil'/>
        </div>
        <div className='about-description'>
            <h3>Un poco sobre mí</h3>
            <p>Me llamo David Alejo, vivo en Chiclana de la frontera y soy Técnico Superior
            en Desarrollo de Aplicaciones Web.</p>
            
            <p>Soy una persona creativa, curiosa, empática y resolutiva. Me gusta trabajar
            en equipo y estoy acostumbrado a trabajar bajo presión.</p>
        </div>
    </div>
  )
}

export default About;