import React from 'react';
import './CdaMain.css';
import CdaTop from '../CdaTop/CdaTop';
import CdaMid from '../CdaMid/CdaMid';
import image from '../../../../Images/linkedin_1384088.png';
import cross from "../../../../Images/close.png";
import arrow from "../../../../Images/close.png";

function CdaMain(): JSX.Element {
    return (
        <div className='main-cda-container'>
            <div className='main-cda-wrapper'>
                <div className='cda-pop-img-wrap'>
                    <img className='cda-pop' src={image} alt="image" />
                </div>
                <div className='cda-pop-text-wrap'>
                    <CdaMid/>
                </div>
                <div className='cda-icons'>
                    <div>
                        <img className='cda-cross' src={cross} alt="" />
                    </div>
                    <div>
                        <img className='cda-arrow' src={arrow} alt="" />
                    </div>
                </div>
            </div>
            <CdaTop/>
        </div>
    );
};
export default CdaMain;