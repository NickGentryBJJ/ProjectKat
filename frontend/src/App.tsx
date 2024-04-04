import React, { useState } from 'react';
import Splash from './Components/Splash/Splash';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Gallery from './Components/Gallery/Gallery';
import SideMenu from './Components/NavBar/SideMenu/SideMenu';
import CDA from './Components/WorksSection/CDA/CDA';
import CdaSection from './Components/WorksSection/CDA/CdaSection/CdaSection';
import PacificaSenior from './Components/WorksSection/PacificaSenior/PacificaSenior';
import PsSection from './Components/WorksSection/PacificaSenior/PsSection/PsSection';
import PlanetArt from './Components/WorksSection/PlanetArt/PlanetArt';
import PaSection from './Components/WorksSection/PlanetArt/PaSection/PaSection';
import WorkSchool from './Components/WorksSection/WorkSchool/WorkSchool';
import WsSection from './Components/WorksSection/WorkSchool/WsSection/WsSection';

function App(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const [showCda, setShowCda] = useState<boolean>(false);
  const [showPaw, setShowPaw] = useState<boolean>(false);
  const [showPsl, setShowPsl] = useState<boolean>(false);
  const [showSchool, setShowSchool] = useState<boolean>(false);
  return (
  <>
    <NavBar 
      open={open} 
      setOpen={setOpen} 
      showCda={showCda} 
      setShowCda={setShowCda} 
      showPaw={showPaw} 
      setShowPaw={setShowPaw}
      showPsl={showPsl} 
      setShowPsl={setShowPsl}
      showSchool={showSchool} 
      setShowSchool={setShowSchool}
      />
    <SideMenu open={open} setOpen={setOpen}/>
    <Splash showPsl={showPsl} showCda={showCda} showPaw={showPaw}/>
    <WorkSchool/>
    <WsSection/>
    <Gallery/>
    <Footer/>
  </>
  );
};
export default App;