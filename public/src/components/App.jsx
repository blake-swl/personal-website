import React, { Component } from 'react';

import Header from './Header';
import Navigation from './Navigation';
import About from './About';
import Timeline from './Timeline';

export default class App extends Component {
  render() {
    return(
      <div>
        App.js
        <Header />
        <Navigation />
        <About />
        <Timeline />
      </div>
    )
  }
}