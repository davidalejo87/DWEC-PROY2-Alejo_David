import React from 'react';
import "./Academics.css"
import logoHtml5 from "../../media/image/logoHtml5.png";
import logoCss3 from "../../media/image/logoCss3.png";
import logoSass from "../../media/image/logoSass.png";
import logoJavascript from "../../media/image/logoJavascript.png";
import logoReact from "../../media/image/logoReact.png";
import logoPhp from "../../media/image/logoPhp.png";
import logoLaravel from "../../media/image/logoLaravel.png";
import logoPython from "../../media/image/logoPython.png";
import logoFlask from "../../media/image/logoFlask.png";
import logoJava from "../../media/image/logoJava.png";
import logoGit from "../../media/image/logoGit.png";
import logoDocker from "../../media/image/logoDocker.png";



export const Academics = () => {
  return (
    <div className='academics-container'>
      <div className='academics-tittle'><h2>Mis habilidades técnicas</h2></div>
      <div className='academics-container-logos'> 
        <a title='css3' href='' target="_blank"><img src={logoHtml5} className='logos' alt='logo-html5'/></a>
        <a title='css3' href='' target="_blank"><img src={logoCss3} className='logos' alt='logo-css3'/></a>
        <a title='' href='' target="_blank"><img src={logoSass} className='logos' alt='logo-sass'/></a>
        <a title='' href='' target="_blank"><img src={logoJavascript} className='logos' alt='logo-javascript'/></a>
        <a title='' href='' target="_blank"><img src={logoReact} className='logos' alt='logo-react'/></a>
        <a title='' href='' target="_blank"><img src={logoPhp} className='logos' alt='logo-php'/></a>
        <a title='' href='' target="_blank"><img src={logoLaravel} className='logos' alt='logo-laravel'/></a>
        <a title='' href='' target="_blank"><img src={logoPython} className='logos' alt='logo-python'/></a>
        <a title='' href='' target="_blank"><img src={logoFlask} className='logos' alt='logo-flask'/></a>
        <a title='' href='' target="_blank"><img src={logoJava} className='logos' alt='logo-java'/></a>
        <a title='' href='' target="_blank"><img src={logoGit} className='logos' alt='logo-git'/></a>
        <a title='' href='' target="_blank"><img src={logoDocker} className='logos' alt='logo-docker'/></a>
        </div>
    </div>
  )
}

export default Academics;