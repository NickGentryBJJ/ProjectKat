import './NavBar.css';


function NavBar(): JSX.Element {
    const works: string[]=[
        "CDA WORK",
        "PLANET ART WORK",
        "PACIFICA SENIOR LIVING", 
        "WORK COMPLETED IN SCHOOL" 
    ]
    return (
        <div className='nav-wrapper'>
            <div className='nav-mid'>
                {works.map((work, index) => (
                    <div key={index} className='work-item-wrapper'>
                        <h3 className='work-item'>
                            {work}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default NavBar;