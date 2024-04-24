import React from 'react';
import './Footer.css';
import Dev from './Dev/Dev';

function Footer(): JSX.Element {
    return (
    <footer id="contact-section">
        <div className='footer-container'>
            <h2 className='thank-you'>
                Thank you for visiting!
            </h2>
            <Dev/>
        </div>
    </footer> 
    );
};
export default Footer;