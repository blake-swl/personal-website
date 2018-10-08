import React from 'react';
import './global.scss';


import Header from '../Header/index';
import Navigation from '../Navigation';
import About from '../About';
import Skills from '../Skills';
import Portfolio from '../Works';
import Contact from '../Contact';


const App = () => {
  return(
    <div id="wrapper">
      <Navigation className="scrollAlign"/>
      <Header className="scrollAlign"/>
      <About className="scrollAlign"/>
      <Skills className="scrollAlign"/>
      <Portfolio className="scrollAlign"/>
      <Contact className="scrollAlign"/>
    </div>
  )
};
export default App;