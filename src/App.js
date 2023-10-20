import React from 'react'
import Footer from './components/common/Footer';
import CardList from './components/common/CardList';
import SeasonSelect  from './components/common/SeasonSelect';
import { ParallaxBlock } from './components/common/parallax-effect/ParallaxBlock';

function App() {
  return (
    <>
    {/* всі ці компоненти тут тимчасово 
    для зручного відображення у браузері */}
    <SeasonSelect/>
    <CardList/>
    <ParallaxBlock/>
    <CardList/>
    <Footer/>
    </>
  );
}

export default App;
