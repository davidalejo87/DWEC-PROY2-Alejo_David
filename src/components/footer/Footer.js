import React from 'react';
import "./Footer.css"

export const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='footer-phrase'>
                <h1>"La verdad sólo se puede encontrar en un lugar: el código".</h1>
                <p>- Robert C.Martin</p>
            </div>
            <div className='footer-rrss'>
                <div className='footer-contact'>Me encontrarás en : </div>
                <div className='footer-icons'>

                    <a href='https://linkedin.com' target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-linkedin linkedin"/>
                    </a>
                    <a href='https://facebook.com' target="_blank" rel="noreferrer">
                        <i class="fa-brands fa-facebook facebook"></i>
                    </a>
                    <a href='https://instagram.com' target="_blank" rel="noreferrer">
                        <i class="fa-brands fa-instagram instagram"></i>
                    </a>
                    <a href='https://twitter.com' target="_blank" rel="noreferrer">
                        <i class="fa-brands fa-twitter twitter"></i>
                    </a>
                    </div>
                </div>

        </footer>

    )
}

export default Footer;