import React from 'react';
import './Splash.css';
import CDA from '../WorksSection/CDA/CDA';
import CdaSection from '../WorksSection/CDA/CdaSection/CdaSection';
import PacificaSenior from '../WorksSection/PacificaSenior/PacificaSenior';
import PsSection from '../WorksSection/PacificaSenior/PsSection/PsSection';
import PlanetArt from '../WorksSection/PlanetArt/PlanetArt';
import PaSection from '../WorksSection/PlanetArt/PaSection/PaSection';
import WsSection from '../WorksSection/WorkSchool/WsSection/WsSection';
import WorkSchool from '../WorksSection/WorkSchool/WorkSchool';

interface SplashProps {
    showCda: boolean;
    showPsl: boolean;
    showPaw: boolean;
    showSchool: boolean;
}; 
function Splash(props: SplashProps): JSX.Element {
    const {showCda, showPsl, showPaw, showSchool} = props;
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
            <div className='cda-wrapper'>
                <CDA showCda={showCda}/>
                <CdaSection showCda={showCda}/>
            </div>
            <div className='psl-wrapper'>
                <PacificaSenior showPsl={showPsl}/>
                <PsSection showPsl={showPsl}/>
            </div>
            <div className='pa-wrapper'>
                <PlanetArt showPaw={showPaw}/>
                <PaSection showPaw={showPaw}/>
            </div>
            <div className='school-wrapper'>
                <WsSection showSchool={showSchool}/>
                <WorkSchool showSchool={showSchool}/>
            </div>
        </div>
    );
};
export default Splash;