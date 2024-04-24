import React from 'react';
import './Dev.css';
import gitLab from '../../../Images/github_2111425.png';
import linkedIn from '../../../Images/linkedin_1384088.png';

function Dev(): JSX.Element {
    return (
    <div className='dev-wrapper'>
        <div className='dev-top'>
            <h4 className='dev-tags'>
                Web-Developer
            </h4>
            <h4 className='dev-tags'>
                Nick Gentry
            </h4>
        </div>
        <div className='langs'>
            <h4 className='dev-tags'>
                React
            </h4>
            <h4 className='dev-tags'>
                TypeScript
            </h4>
            <h4 className='dev-tags'>
                CSS
            </h4>
        </div>
        <div className='host-git'>
            <h4 id='git-host-tag' className='dev-tags'>
                Hosted Using Github-Pages
            </h4>
            <div className='dev-links'>
                <a href="https://github.com/NickGentryBJJ">
                    <img className='dev-link-image' src={gitLab} alt="Github" />
                </a>
                <a href="https://github.com/NickGentryBJJ/ProjectKat">
                    <img className='dev-link-image' src={linkedIn} alt="LinkedIn" />
                </a>
            </div>
        </div>
    </div>
    );
};
export default Dev;