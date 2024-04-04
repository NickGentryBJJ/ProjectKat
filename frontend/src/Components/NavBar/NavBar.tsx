import logo from '../../Images/logo.png';
import menu from '../../Images/menu.png';
import './NavBar.css';

interface NavProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    showCda: boolean;
    setShowCda: React.Dispatch<React.SetStateAction<boolean>>;
    showPaw: boolean;
    setShowPaw: React.Dispatch<React.SetStateAction<boolean>>;
    showPsl: boolean;
    setShowPsl: React.Dispatch<React.SetStateAction<boolean>>;
    showSchool: boolean;
    setShowSchool: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavBar(props: NavProps): JSX.Element {
    const {open, setOpen, showCda, setShowCda, showPaw, setShowPaw, showPsl, setShowPsl, showSchool, setShowSchool} = props;
    const works: Record<string, [string, boolean, React.Dispatch<React.SetStateAction<boolean>>]> = {
    // display name:  id -- state ---- setter 
        "CDA WORK": ["cda", showCda, setShowCda],
        "PLANET ART WORK": ["paw", showPaw, setShowPaw],
        "PACIFICA SENIOR LIVING": ["psl", showPsl, setShowPsl],
        "WORK COMPLETED IN SCHOOL": ["wcis", showSchool, setShowSchool]
    };
    function keniBurke(): void { // Risin To The Top!
        const body = document.documentElement || document.body;
        body.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setOpen(false);
    };
    function handleEnter(id:string, set:boolean) {
        const splashReplacement = document.getElementById(id);
        const splash = document.getElementById('sw');
        if (splashReplacement && splash){
            if (splashReplacement.classList.contains("hidden") && !set) {
                splash.classList.add("hidden");
                splashReplacement.classList.remove("hidden");
            }
        };
    };
    function handleLeave(id:string, set:boolean) {
        const sp = document.getElementById(id);
        const splash = document.getElementById('sw');
        if (sp) {
            if (!sp.classList.contains("hidden") && !set) {
                sp.classList.add("hidden");
                splash?.classList.remove("hidden");
            }
            if (set) {
                sp.classList.add("hidden");
                splash?.classList.add("hidden");
            }
        }
    }
    function handleClick(set:boolean, setter:React.Dispatch<React.SetStateAction<boolean>>, id:string) {
        const splash = document.getElementById('sw');
        const hide = document.getElementById(id);
        hide?.classList.add("hidden");
        if (!set) {
            setter(!set);
        } else {
            setter(!set);
            splash?.classList.remove("hidden");
        }
    }
    return (
        <div className='nav-wrapper'>
            <div className='nav-left'>
                <h1>Katarina Gentry,</h1><br/>
                <span>Graphic Designer</span>
            </div>
            <div className='nav-mid'>
                {Object.entries(works).map(([name, value], index) => (
                        <div 
                            onMouseEnter={() => handleEnter(value[0], value[1])} 
                            onMouseLeave={() => handleLeave(value[0], value[1])} 
                            onClick={() => handleClick(value[1], value[2], value[0])}
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