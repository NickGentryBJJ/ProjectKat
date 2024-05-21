import React from 'react';
import './WorkSplash.css';
// LOGOS
import sunLogo from '../../../Images/rinaLogos/suncityGardens.png';
import treviLogo from '../../../Images/rinaLogos/treviHills.png';
import auburnTerraceLogo from '../../../Images/rinaLogos/auburnRavine.png';
import parkLogo from '../../../Images/rinaLogos/parkTower.png';
import goldLogo from '../../../Images/rinaLogos/goldCountry.png';
import coloLogo from '../../../Images/Pacifica/ColoHeights/coloLogo.png';
import woodLogo from '../../../Images/Pacifica/Woodmont/woodmont.png';
import bayLogo from '../../../Images/rinaLogos/baytowers.png';
import amaraLogo from '../../../Images/Pacifica/Amara/amara_logo.png';
import riverLogo from '../../../Images/rinaLogos/riverView.png';
// BEEF
import takeCare from '../../../Images/Pacifica/PacificaCollateral/takecare.gif';
import campaignCheck from '../../../Images/Pacifica/PacificaCollateral/camp.jpg';
import stackBroch from '../../../Images/Pacifica/PacificaCollateral/stack.jpg';
import postCard from '../../../Images/Pacifica/BixpyKnolls/postcard.jpg';
import bixRack from '../../../Images/Pacifica/BixpyKnolls/BixRack.jpg';

function WorkSplash(): JSX.Element {
    return (
        <div className='work-splash-wrapper'>
            <div className='top-work-splash'>
                <img className='splash-logos' src={sunLogo} alt="Sun City Gardens" />
                <img className='splash-logos' src={treviLogo} alt="Trevi Hills Winery" />
                <img className='splash-logos' src={auburnTerraceLogo} alt="Trevi Hills Winery" />
                <img className='splash-logos' src={parkLogo} alt="Trevi Hills Winery" />
                <img className='splash-logos' src={goldLogo} alt="Trevi Hills Winery" />
            </div>
            <div className='splash-row-two'>
                <img className='take-gif' src={takeCare} alt="" />
                <img className='camp-check' src={campaignCheck} alt="" />
            </div>
            <div className='splash-row-three'>
                <img className='stack-broch' src={stackBroch} alt="" />
                <div className='inner-three'>
                    <img className='bix-rack' src={bixRack} alt="" />
                    <img className='post-card' src={postCard} alt="" />
                </div>
            </div>
            <div className='bottom-splash'>
                <img className='splash-logos' src={coloLogo} alt="" />
                <img className='splash-logos' src={woodLogo} alt="" />
                <img className='splash-logos' src={bayLogo} alt="" />
                <img className='splash-logos' src={amaraLogo} alt="" />
                <img className='splash-logos' src={riverLogo} alt="" />
            </div>
        </div>
    );
};
export default WorkSplash;