import React from 'react';
import './Splash.css';

function Splash(): JSX.Element {
    return (
        <div id='sw' className='splash-wrapper'>
            <div className='quote-wrapper'>
                <h1 className='quote'>
                    "As designers, we learn from the ever changing world around us. We constantly evolve our actions and abilities to be continued."
                    <p className='author'>-Katarina Gentry</p>
                </h1>
            </div>
        </div>
    );
};
export default Splash;