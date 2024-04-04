import React from 'react';
import './WsSection.css'

interface SchoolProps {
    showSchool: boolean;
}; 

function WsSection(props: SchoolProps): JSX.Element {
    const {showSchool}= props;
    return (
        <div id='ws-section' className={`school-section-container ${showSchool ? "show" : ""}`}>
            hello from WsSection
        </div>
    );
};
export default WsSection;