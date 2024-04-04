import React from 'react';
import './PaSection.css'

interface PlanetProps {
    showPaw: boolean;
}

function PaSection(props: PlanetProps): JSX.Element {
    const {showPaw} = props;
    return (
        <div id='pa-section' className={`paw-section-container ${showPaw ? "show" : ""}`}>
            hello from PaSection
        </div>
    );
};
export default PaSection;