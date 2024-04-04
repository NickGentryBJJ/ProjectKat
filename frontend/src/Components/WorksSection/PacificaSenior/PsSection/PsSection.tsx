import React from 'react';
import './PsSection.css'

interface PslProps {
    showPsl: boolean;
}

function PsSection(props: PslProps): JSX.Element {
    const {showPsl} = props;
    return (
        <div id='ps-section' className={`ps-section-container ${showPsl ? "show" : ""}`}>
            hello from PsSection
        </div>
    );
};
export default PsSection;