import './NavBar.css';

interface NavProps {
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
    const {showCda, setShowCda, showPaw, setShowPaw, showPsl, setShowPsl, showSchool, setShowSchool} = props;
    const works: Record<string, [string, boolean, React.Dispatch<React.SetStateAction<boolean>>]> = {
    // display name:  id -- state ---- setter 
        "CDA WORK": ["cda", showCda, setShowCda],
        "PLANET ART WORK": ["paw", showPaw, setShowPaw],
        "PACIFICA SENIOR LIVING": ["psl", showPsl, setShowPsl],
        "WORK COMPLETED IN SCHOOL": ["wcis", showSchool, setShowSchool]
    };
    function handleClick(set:boolean, setter:React.Dispatch<React.SetStateAction<boolean>>, id:string) {
    };
    return (
        <div className='nav-wrapper'>
            <div className='nav-mid'>
                {Object.entries(works).map(([name, value], index) => (
                    <div 
                        onClick={() => handleClick(value[1], value[2], value[0])}
                        key={index} 
                        className='work-item-wrapper'>
                            <h3 className='work-item'>
                                {name}
                            </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default NavBar;