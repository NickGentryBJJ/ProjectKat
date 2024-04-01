import React from 'react';
import cross from '../../../Images/close.png';  // <a href="https://www.freepik.com/search">Icon by khld939</a>
import './SideMenu.css';

interface SideMenuProps{
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function SideMenu(props: SideMenuProps) {
    const {open, setOpen} = props;
    function scrollToPort(): void {
        window.open('https://issuu.com/katarinag9/docs/issue_portfolio_view_1f96b0df227b1a', '_blank');
    }
    function scrollToGallery(): void {
        const gallerySection = document.getElementById('gallery-section');
        if (gallerySection) {
            gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setOpen(false);
        }
    }
    function scrollToContact(): void {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setOpen(false);
        }
    }
    function scrollToAbout(): void {
        const aboutSection = document.getElementById('about-section');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setOpen(false);
        }
    }
    function keniBurke(): void {    
        const body = document.documentElement || document.body;
        body.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setOpen(false);
    };
    const linkItems: Record<string, () => void> = {  
        "Home": keniBurke,
        "Portfolio": scrollToPort,
        "Gallery": scrollToGallery,
        "About": scrollToAbout,
        "Contact": scrollToContact
    };
    return (
        <div className={`menu-wrapper ${open ? "show" : ""}`}>
            <img 
                src={cross} 
                alt="Close" 
                className="close-icon"
                onClick={() => {setOpen(false)}}
            />
            <div className="links-menu">
                {Object.entries(linkItems).map(([key, value]: [string, () => void], index): JSX.Element => {
                    return (
                        <p key={index} onClick={value} className="header-links show">{key}</p>
                    )
                })} 
            </div> 
        </div>
    );
};
export default SideMenu;