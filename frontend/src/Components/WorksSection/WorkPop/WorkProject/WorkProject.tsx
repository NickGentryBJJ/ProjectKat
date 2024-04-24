import React from 'react';
import './WorkProject.css';

interface ProjectProps {
    title: string;
    image: string;
    desc: string;
}


function WorkProject(props: ProjectProps): JSX.Element {
    const {title, image, desc} = props;
    return (
        <div className="project-pop-wrapper">
            <img className='cda-pop' src={image} alt="image" />
                <div className='cda-pop-text-wrap'>
                    <div className='mid-cda-wrapper'>
                        <h1 className='mid-cda-title'>
                            {title}
                        </h1>    
                        <p>
                            {desc}  
                        </p>     
                    </div>
                </div>
        </div>
    )
}
export default WorkProject;