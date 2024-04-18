import React from 'react';
import './NavBar.css';

function NavBar(): JSX.Element {
    const works: string[] = [
        "PACIFICA COMPANIES",
        "PLANET\nART", // Use \n for line break
        "CREATIVE DIGITAL AGENCY",
        "SCHOOL PROJECTS"
    ];
    return (
        <div className='nav-wrapper'>
            <div className='nav-mid'>
                {works.map((work, index) => (
                    <div key={index} className='work-item-wrapper'>
                        <h3 className='work-item'>
                            {work.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br /> {/* Line break */}
                                </React.Fragment>
                            ))}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default NavBar;