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
  return (
  <>
    <NavBar open={open} setOpen={setOpen} showCda={showCda} setShowCda={setShowCda}/>
    <SideMenu open={open} setOpen={setOpen}/>
    <Splash showCda={showCda} setShowCda={setShowCda}/>
    <PacificaSenior/>
    <PsSection/>
    <PlanetArt/>
    <PaSection/>
    <WorkSchool/>
    <WsSection/>
    <Gallery/>
    <Footer/>
  </>
  );
};
export default App;