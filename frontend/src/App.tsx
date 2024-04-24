import React, { useState } from 'react';
import Splash from './Components/Splash/Splash';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import TopBar from './Components/TopBar/TopBar';
import WorkPop from './Components/WorksSection/WorkPop/WorkPop';

function App(): JSX.Element {
  const [cdaPop, setCdaPop] = useState<boolean>(false);

  return (
    <>
    <TopBar/>
    <Splash/>
    <NavBar/>
    <WorkPop cdaPop={cdaPop} setCdaPop={setCdaPop}/>
    <Footer/>
  </>
  );
};
export default App;