import React from 'react';
import './WorkSplash.css';
import amaraLogo from '../../../Images/pacifica/Amara_logos.jpg'
import auburnTerraceLogo from '../../../Images/pacifica/AuburnRavineTerrace_logo.jpg'
import bayTowersLogo from '../../../Images/pacifica/BayTowersBixbyKnoll_logo.jpg'
import bixbyPic from '../../../Images/pacifica/BixbyKnolls_1.jpg'
import bixbyTwo from '../../../Images/pacifica/BixbyKnolls_2.jpg'
import bixbyKnoll from '../../../Images/pacifica/BixbyKnolls_RackCard.jpg'
import takeCare from '../../../Images/pacifica/takecare.gif'
import stackBro from '../../../Images/pacifica/Stack_Brochure_Mockup_4.jpg'
import coloniolHeightsLogo from '../../../Images/pacifica/ColonialHeightsLogo.jpg'
import treviLogo from '../../../Images/pacifica/Trevi_winery.jpg'
import sunLogo from '../../../Images/pacifica/sunCityGardenLogo.jpg'
import busCard from '../../../Images/pacifica/Business_Card_Mockup_3.jpg'


function WorkSplash(): JSX.Element {
    return (
        <div className='work-splash-wrapper'>
            <div className='work-top'>
                <img className='work-top-corner' src={stackBro} alt="" />
                <div className='work-top-side'>
                    <img className='stacked-work' src={amaraLogo} alt="" />
                    <img className='stacked-work' src={auburnTerraceLogo} alt="" />
                </div>
            </div>
            <div className='work-bottom'>
                <img className='work-anchor' src={takeCare} alt="" />
            </div>
            {/* second */}
            <div className='work-top'>
                <img className='work-top-corner' src={bixbyKnoll} alt="" />
                <div>
                    <img className='stacked-work' src={bayTowersLogo} alt="" />
                    <img className='stacked-work' src={coloniolHeightsLogo} alt="" />
                </div>
            </div>
            <div className='work-bottom'>
                <img className='work-anchor' src={bixbyTwo} alt="" />
            </div>
            <div className='work-top'>
                <img className='work-top-corner' src={bixbyPic} alt="" />
                <div>
                    <img className='stacked-work' src={sunLogo} alt="" />
                    <img className='stacked-work' src={treviLogo} alt="" />
                </div>
            </div>
            <div className='work-bottom'>
                <img className='work-anchor' src={busCard} alt="" />
            </div>
        </div>
    );
};
export default WorkSplash;