import React from 'react';
import './CdaMain.css';
import CdaTop from '../CdaTop/CdaTop';
import CdaMid from '../CdaMid/CdaMid';
import image from '../../../../Images/linkedin_1384088.png'

function CdaMain(): JSX.Element {
    return (
        <div className='main-cda-wrapper'>
            <div className='cda-pop-img-wrap'>
                <img className='cda-pop' src={image} alt="image" />
            </div>
            <div className='cda-pop-text-wrap'>
                <CdaTop/>
                <CdaMid/>
            </div>
        </div>
    );
};
export default CdaMain;