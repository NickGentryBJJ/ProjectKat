import React from 'react';
import './Splash.css';
import CDA from '../WorksSection/CDA/CDA';
import CdaSection from '../WorksSection/CDA/CdaSection/CdaSection';

interface SplashProps {
    showCda: boolean;
    setShowCda: React.Dispatch<React.SetStateAction<boolean>>;
}; 
function Splash(props: SplashProps): JSX.Element {
    const {showCda, setShowCda} = props;
    return (
        <div  className='splash-wrapper'>
            <div id='sw' className='quote-wrapper'>
                <h1 className='quote'>
                    "As designers, we learn from the ever changing world around us. We constantly evolve our actions and abilities to be continued."
                    <p className='author'>-Katarina Gentry</p>
                </h1>
            </div>
            <div className='cda-wrapper'>
            <CDA showCda={showCda}/>
            <CdaSection showCda={showCda}/>
            </div>
        </div>
    );
};
export default Splash;