import React from 'react';
import './TopBar.css'

function TopBar(): JSX.Element {
    return (
        <div className='top-bar-wrapper'>
            <div className='left-bar'>
                <h1 className='top-text'>Katarina Gentry,</h1><br />
                <h1 className='top-text'>Graphic Design</h1>
            </div>
            <div className='right-bar'>
                <a className='contact-button' href="mailto:">Contact</a>
            </div>
        </div>
    );
};
export default TopBar;