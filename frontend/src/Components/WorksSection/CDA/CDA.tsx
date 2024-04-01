import React from 'react';
import './CDA.css'

interface CdaProps {
    showCda: boolean;
}

function CDA(props: CdaProps): JSX.Element {
    const {showCda} = props;
    return (
        <div id='cda' className={`cda-container hidden ${showCda ? "hidden" : ""}`}>
            hello from CDA
        </div>
    );
};
export default CDA;