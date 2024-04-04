import React from 'react';
import './PlanetArt.css'

interface PlanetProps {
    showPaw: boolean;
}

function PlanetArt(props: PlanetProps): JSX.Element {
    const {showPaw} = props;
    return (
        <div id='paw' className={`paw-container hidden ${showPaw ? "hidden" : ""}`}>
            hello from PlanetArt
        </div>
    );
};
export default PlanetArt;