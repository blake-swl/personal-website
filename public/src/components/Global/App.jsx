import React, { Component } from 'react';
import './global.scss';
import { HashRouter, Route, NavLink } from 'react-router-dom';

import Header from '../Header/index';
import Navigation from '../Navigation';
import About from '../About';
import Skills from '../Skills';
import Works from '../Works';
import Contact from '../Contact';


export default class App extends Component {
  render() {
    return(
      <HashRouter>
        <div id="wrapper">
          <Navigation />
          <Header className="first"/>
          <About className="second"/>
          <Skills className="third"/>
          <Works className="fourth"/>
          <Contact className="fifth"/>
        </div>
      </HashRouter>
    )
  }
};