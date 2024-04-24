import React from 'react';
import './WorkPop.css';
import image from '../../../Images/linkedin_1384088.png';
import cross from "../../../Images/close.png";
import arrow from "../../../Images/close.png";

interface WorkProps {
    cdaPop: boolean;
    setCdaPop: React.Dispatch<React.SetStateAction<boolean>>;
}

function WorkPop(props: WorkProps): JSX.Element {
    const {cdaPop, setCdaPop} = props;
    const works: Record<string, Record<string, string>> = { 
        "cdaPop": {                                           
            "date": "2019-2021",
            "name": "Creative Digital Agency",
            "image": image,                               
            "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. In tenetur corporis, consectetur aliquid perspiciatis totam. Assumenda velit cupiditate quod! Ut quam consequatur exercitationem nemo mollitia optio incidunt labore velit harum.",
            "title": "CDA Showreel"
        }
    }
    if (cdaPop) {
        const { date, name, desc, title } = works.cdaPop;
        return (
            <div id='cda' className='main-cda-container'>
                <div className='main-cda-wrapper'>
                    <div className='cda-pop-img-wrap'>
                        <img className='cda-pop' src={image} alt="image" />
                    </div>
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
    } else {
        return <div></div>; // If cdaPop is false, don't render anything
    }
};

export default WorkPop;