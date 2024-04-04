import React from 'react';
import './WorkSchool.css'

interface WorkProps {
    showSchool: boolean;
}

function WorkSchool(props: WorkProps): JSX.Element {
    const {showSchool} = props;
    return (
        <div id='wcis' className={`cda-container hidden ${showSchool ? "hidden" : ""}`}>
            hello from WorkSchool
        </div>
    );
};
export default WorkSchool;