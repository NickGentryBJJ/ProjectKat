import logo from '../../Images/logo.png';
import menu from '../../Images/menu.png';
import './NavBar.css';

interface NavProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavBar(props: NavProps): JSX.Element {
    const {open, setOpen} = props;
    function keniBurke(): void { // Risin To The Top!
        const body = document.documentElement || document.body;
        body.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setOpen(false);
    };
    return (
        <div className='nav-wrapper'>
            <div className='nav-left'>
                <img onClick={keniBurke} src={logo} alt="Katarina Gentry" />
            </div>
            <div className='nav-right'>
                <img onClick={() => setOpen(!open)} src={menu} alt="menu" />
            </div>
        </div>
    );
};
export default NavBar;