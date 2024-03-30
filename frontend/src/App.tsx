import React, { useState } from 'react';
import Splash from './Components/Splash/Splash';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';

function App(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  return (
  <>
    <NavBar open={open} setOpen={setOpen}/>
    <Splash/>
    <Footer/>
  </>
  );
};
export default App;