import React, { useState } from 'react';
import Splash from './Components/Splash/Splash';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import TopBar from './Components/TopBar/TopBar';
import WorkPop from './Components/WorksSection/WorkPop/WorkPop';
import WorkSplash from './Components/WorksSection/WorkSplash/WorkSplash';

function App(): JSX.Element {
  const [cdaPop, setCdaPop] = useState<boolean>(false);
  const [pacificaPop, setPacificaPop] = useState<boolean>(false);
  const [schoolPop, setSchoolPop] = useState<boolean>(false);
  const [planetPop, setPlanetPop] = useState<boolean>(false);

  return (
    <>
    <TopBar/>
    <Splash/>
    <NavBar/>
    <WorkSplash/>
    <WorkPop 
      cdaPop={cdaPop} 
      setCdaPop={setCdaPop}
      pacificPop={pacificaPop}
      setPacificPop={setPacificaPop}
      schoolPop={schoolPop}
      setSchoolPop={setSchoolPop}
      planetPop={planetPop}
      setPlanetPop={setPlanetPop}
    />
    <Footer/>
  </>
  );
};
export default App;