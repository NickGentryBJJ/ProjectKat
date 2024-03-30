import React from 'react';
import Splash from './Components/Splash/Splash';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';

function App(): JSX.Element {
  return (
  <>
    <NavBar/>
    <Splash/>
    <Footer/>
  </>
  );
};
export default App;