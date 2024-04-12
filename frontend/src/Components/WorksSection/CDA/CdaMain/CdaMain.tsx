import React from 'react';
import './CdaMain.css';
import CdaTop from '../CdaTop/CdaTop';
import CdaMid from '../CdaMid/CdaMid';

function CdaMain(): JSX.Element {
    return (
        <div className='main-cda-wrapper'>
            <CdaTop/>
            <CdaMid/>
        </div>
    );
};
export default CdaMain;