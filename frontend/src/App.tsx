import React, { useState } from 'react';
import Splash from './Components/Splash/Splash';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Gallery from './Components/Gallery/Gallery';

function App(): JSX.Element {
  const [showCda, setShowCda] = useState<boolean>(false);
  const [showPaw, setShowPaw] = useState<boolean>(false);
  const [showPsl, setShowPsl] = useState<boolean>(false);
  const [showSchool, setShowSchool] = useState<boolean>(false);
  return (
    <>
    <Splash showPsl={showPsl} showCda={showCda} showPaw={showPaw} showSchool={showSchool}/>
    <NavBar 
      showCda={showCda} 
      setShowCda={setShowCda} 
      showPaw={showPaw} 
      setShowPaw={setShowPaw}
      showPsl={showPsl} 
      setShowPsl={setShowPsl}
      showSchool={showSchool} 
      setShowSchool={setShowSchool}
      />
    <Gallery/>
    <Footer/>
  </>
  );
};
export default App;