import React from 'react';
import './PacificaSenior.css'

interface PslProps {
    showPsl: boolean;
}

function PacificaSenior(props: PslProps): JSX.Element {
    const {showPsl} = props;
    return (
        <div id='psl' className={`psl-container hidden ${showPsl ? "hidden" : ""}`}>
            hello from PacificaSenior
        </div>
    );
};
export default PacificaSenior;