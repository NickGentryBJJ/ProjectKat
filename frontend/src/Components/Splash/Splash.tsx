import React from 'react';
import './Splash.css';


function Splash(): JSX.Element {
    return (
        <div  className='splash-wrapper'>
            <div id='sw' className='quote-wrapper'>
                <h1 className='quote'>
                <p className='q-text'>
                    &nbsp;"As designers, we learn from the&nbsp;<br/>&nbsp;ever changing world around us.&nbsp;<br/>&nbsp;We constantly evolve our actions&nbsp;<br/>&nbsp;and abilities to be continued."&nbsp;
                </p><br/>
                    <p className='author'>&nbsp;-Katarina Gentry&nbsp;</p>
                </h1>
            </div>
        </div>
    );
};
export default Splash;