import React from 'react'
import Footer from './components/common/Footer';
import CardList from './components/common/CardList';
import SeasonSelect  from './components/common/SeasonSelect';
import ScrollingText from './components/common/scrolling-effect/ScrollingText';

function App() {
  return (
    <>
    {/* всі ці компоненти тут тимчасово 
    для зручного відображення у браузері */}
    <SeasonSelect/>
    <CardList/>
    <ScrollingText/>
    <CardList/>
    <Footer/>
    </>
  );
}

export default App;
