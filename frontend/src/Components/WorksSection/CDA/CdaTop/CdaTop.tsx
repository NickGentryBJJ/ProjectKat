import React from 'react';
import './CdaTop.css'

function CdaTop(): JSX.Element {
    return (
        <div id='cda' className='cda-container'>
            <div className='top-cda'>
                <h1 className='cda-title'>
                    Creative Digital Agency
                </h1>
                <h2 className='cda-dates'>
                    OCTOBER 2019 TO MARCH 2021
                </h2>
                <p className='cda-desc'>
                    During my time at CDA, I had the oppurtunity to wear many different hats in the creative field. From creating digital ads, GIFS, kinetic typography to storyboarding and directing videographers. I took photos for ads that I layed out into published magazine and freeway billboards. Logos and brands were created, animated, layed out into ebooks, and used in social graphics. 
                </p>
            </div>
            <div className='cda-skills'>
                <h2 className='cda-skills-title'>
                    SKILLS REFINED AT CDA:
                </h2>
                <ol className='cda-skills-list'>
                    <li className='cda-skill-item'>
                        ORGANIZATION
                    </li>
                    <li className='cda-skill-item'>
                        OUTREACH AND PLANNING PHOTOSHOOTS, VIDEOSHOOTS
                    </li>
                    <li className='cda-skill-item'>
                        PHOTO AND VIDEO DIRECTING FROM STORYBOARDS THAT I CREATED
                    </li>
                    <li className='cda-skill-item'>
                        LEARNING TO TURN CRITIQUES INTO CUSTOMER DRIVEN SUCCESS
                    </li>
                </ol>
            </div>
        </div>
    );
};
export default CdaTop;