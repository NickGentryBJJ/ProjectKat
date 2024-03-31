import React, { useState } from 'react';
import Splash from './Components/Splash/Splash';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Gallery from './Components/Gallery/Gallery';
import SideMenu from './Components/NavBar/SideMenu/SideMenu';
import CDA from './Components/WorksSection/CDA/CDA';
import PacificaSenior from './Components/WorksSection/PacificaSenior/PacificaSenior';
import PlanetArt from './Components/WorksSection/PlanetArt/PlanetArt';
import WorkSchool from './Components/WorksSection/WorkSchool/WorkSchool';

function App(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  return (
  <>
    <NavBar open={open} setOpen={setOpen}/>
    <SideMenu open={open} setOpen={setOpen}/>
    <Splash/>
    <CDA/>
    <PacificaSenior/>
    <PlanetArt/>
    <WorkSchool/>
    <Gallery/>
    <Footer/>
  </>
  );
};
export default App;