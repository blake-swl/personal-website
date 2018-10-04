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
      <Navigation />
      <Header />
      <About />
      <Skills />
      {/* <Portfolio /> */}
      {/* <Contact /> */}
    </div>
  )
};
export default App;