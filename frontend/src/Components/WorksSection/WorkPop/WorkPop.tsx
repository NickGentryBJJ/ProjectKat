import React from 'react';
import './WorkPop.css';
import image from '../../../Images/linkedin_1384088.png';
import cross from "../../../Images/close.png";
import arrow from "../../../Images/close.png";
import WorkProject from './WorkProject/WorkProject';

interface Project {
    title: string;
    desc: string;
    image: string;
}

interface WorkProps {
    cdaPop: boolean;
    setCdaPop: React.Dispatch<React.SetStateAction<boolean>>;
    pacificPop: boolean;
    setPacificPop: React.Dispatch<React.SetStateAction<boolean>>;
    schoolPop: boolean;
    setSchoolPop: React.Dispatch<React.SetStateAction<boolean>>;
    planetPop: boolean;
    setPlanetPop: React.Dispatch<React.SetStateAction<boolean>>;
}

function WorkPop(props: WorkProps): JSX.Element {
    const { cdaPop, setCdaPop, pacificPop, setPacificPop, schoolPop, setSchoolPop, planetPop, setPlanetPop } = props;
    const works: Record<string, { date: string; name: string; projects: Project[] }> = {
        "cdaPop": {
            "date": "2019-2021",
            "name": "Creative Digital Agency",
            "projects": [
                {
                    "title": "Project Name",
                    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. In tenetur corporis, consectetur aliquid perspiciatis totam. Assumenda velit cupiditate quod! Ut quam consequatur exercitationem nemo mollitia optio incidunt labore velit harum.",
                    "image": image
                },
                {
                    "title": "Project Name",
                    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. In tenetur corporis, consectetur aliquid perspiciatis totam. Assumenda velit cupiditate quod! Ut quam consequatur exercitationem nemo mollitia optio incidunt labore velit harum.",
                    "image": image
                }
            ]
        },
        "pacificaPop": {
            "date": "2019-2021",
            "name": "Pacifica Companies",
            "projects": [
                {
                    "title": "Project Name",
                    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. In tenetur corporis, consectetur aliquid perspiciatis totam. Assumenda velit cupiditate quod! Ut quam consequatur exercitationem nemo mollitia optio incidunt labore velit harum.",
                    "image": image
                },
                {
                    "title": "Project Name",
                    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. In tenetur corporis, consectetur aliquid perspiciatis totam. Assumenda velit cupiditate quod! Ut quam consequatur exercitationem nemo mollitia optio incidunt labore velit harum.",
                    "image": image
                }
            ]
        },
        "schoolPop": {
            "date": "2019-2021",
            "name": "School Work",
            "projects": [
                {
                    "title": "Project Name",
                    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. In tenetur corporis, consectetur aliquid perspiciatis totam. Assumenda velit cupiditate quod! Ut quam consequatur exercitationem nemo mollitia optio incidunt labore velit harum.",
                    "image": image
                },
                {
                    "title": "Project Name",
                    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. In tenetur corporis, consectetur aliquid perspiciatis totam. Assumenda velit cupiditate quod! Ut quam consequatur exercitationem nemo mollitia optio incidunt labore velit harum.",
                    "image": image
                }
            ]
        },
        "planetPop": {
            "date": "2019-2021",
            "name": "Planet Art",
            "projects": [
                {
                    "title": "Project Name",
                    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. In tenetur corporis, consectetur aliquid perspiciatis totam. Assumenda velit cupiditate quod! Ut quam consequatur exercitationem nemo mollitia optio incidunt labore velit harum.",
                    "image": image
                },
                {
                    "title": "Project Name",
                    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. In tenetur corporis, consectetur aliquid perspiciatis totam. Assumenda velit cupiditate quod! Ut quam consequatur exercitationem nemo mollitia optio incidunt labore velit harum.",
                    "image": image
                }
            ]
        }
    };
    const getPopData = (popKey: string) => {
        return works[popKey];
    };
    const renderPop = (popKey: string) => {
        const popData = getPopData(popKey);
        if (!popData) return <div></div>;
        const { date, name, projects } = popData;
        return (
            <div id={popKey} className='main-cda-container'>
                <div className='main-cda-wrapper'>
                    {projects.map((project, index) => (
                        <WorkProject key={index} title={project.title} desc={project.desc} image={project.image} />
                    ))}
                    <div className='cda-icons'>
                        <div>
                            <img className='cda-cross' src={cross} alt="" />
                        </div>
                        <div>
                            <img className='cda-arrow' src={arrow} alt="" />
                        </div>
                    </div>
                </div>
                <div className='cda-container'>
                    <div className='top-cda'>
                        <div className='cda-box'>
                            {date}
                        </div>
                        <div className='cda-box'>
                            {name}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    if (cdaPop) {
        return renderPop("cdaPop");
    } else if (pacificPop) {
        return renderPop("pacificaPop");
    } else if (schoolPop) {
        return renderPop("schoolPop");
    } else if (planetPop) {
        return renderPop("planetPop");
    } else {
        return <div></div>; 
    }
}

export default WorkPop;