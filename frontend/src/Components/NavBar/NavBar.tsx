import logo from '../../Images/logo.png';
import menu from '../../Images/menu.png';
import './NavBar.css';

interface NavProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavBar(props: NavProps): JSX.Element {
    const {open, setOpen} = props;
    const works: Record<string, string> = {
        "CDA WORK": "cda",
        "PLANET ART WORK": "paw",
        "PACIFICA SENIOR LIVING": "psl",
        "WORK COMPLETED IN SCHOOL": "wcis"
    };
    function keniBurke(): void { // Risin To The Top!
        const body = document.documentElement || document.body;
        body.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setOpen(false);
    };
    function handleEvent(id:string) {
        const splashReplacement = document.getElementById(id);
        const splash = document.getElementById('sw');
        if (splashReplacement && splash){
            if (splashReplacement.classList.contains("hidden")) {
                splash.classList.add("hidden");
                splashReplacement.classList.remove("hidden");
            } else{
                splashReplacement.classList.add("hidden");
                splash.classList.remove("hidden");
            };
        };
    };
    return (
        <div className='nav-wrapper'>
            <div className='nav-left'>
                <img className='nav-logo' onClick={keniBurke} src={logo} alt="Katarina Gentry" />
            </div>
            <div className='nav-mid'>
                {Object.entries(works).map(([name, value], index) => (
                    <div 
                        onMouseLeave={() => handleEvent(value)} 
                        onMouseEnter={() => handleEvent(value)} 
                        key={index} 
                        className='work-item-wrapper'>
                            <h3 className='work-item'>
                                {name}
                            </h3>
                    </div>
                ))}
            </div>
            <div className='nav-right'>
                <img className='nav-logo' onClick={() => setOpen(!open)} src={menu} alt="menu" />
            </div>
        </div>
    );
};
export default NavBar;