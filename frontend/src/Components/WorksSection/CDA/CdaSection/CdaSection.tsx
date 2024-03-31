import React from 'react';
import './CdaSection.css'
interface CdaProps {
    cda: boolean;
    setCda: React.Dispatch<React.SetStateAction<boolean>>;
}; 
function CdaSection(props: CdaProps): JSX.Element {
    const {cda, setCda} = props;
    return (
        <div id='cda-section'>
            hello from CdaSection
        </div>
    );
};
export default CdaSection;