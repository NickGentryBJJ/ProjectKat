import React from 'react';
import './CdaSection.css'
interface CdaProps {
    showCda: boolean;
}; 
// cda section will contain text describing the work done at cda. all components labeled *section will follow suit.
// these sections will only display when the nav button is clicked and will take the place of the splash quote.
function CdaSection(props: CdaProps): JSX.Element {
    const { showCda } = props;
    return (
        <div id='cda-section' className={`cda-section-container ${showCda ? "show" : ""}`}>
            hello from CdaSection
        </div>
    );
}
export default CdaSection;