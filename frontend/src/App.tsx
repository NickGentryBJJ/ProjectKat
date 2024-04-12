import React from 'react';
import Splash from './Components/Splash/Splash';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import TopBar from './Components/TopBar/TopBar';
import CdaMain from './Components/WorksSection/CDA/CdaMain/CdaMain';

function App(): JSX.Element {
  return (
    <>
    <TopBar/>
    <Splash/>
    <NavBar/>
    <CdaMain/>
    <Footer/>
  </>
  );
};
export default App;