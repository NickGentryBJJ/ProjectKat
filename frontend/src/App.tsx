import React, { useState } from 'react';
import Splash from './Components/Splash/Splash';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Gallery from './Components/Gallery/Gallery';
import SideMenu from './Components/NavBar/SideMenu/SideMenu';

function App(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  return (
  <>
    <NavBar open={open} setOpen={setOpen}/>
    <SideMenu open={open} setOpen={setOpen}/>
    <Splash/>
    <Gallery/>
    <Footer/>
  </>
  );
};
export default App;