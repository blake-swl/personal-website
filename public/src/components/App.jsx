import React, { Component } from 'react';
import styles from '../../dist/styles/styles.css';
import { HashRouter, Route, NavLink } from 'react-router-dom';

import Header from './Header';
import Navigation from './Navigation';
import About from './About';
import Skills from './Skills';
import Works from './Works';
import Contact from './Contact';

export default class App extends Component {
  render() {
    return(
      <HashRouter>
        <div className={styles.container}>
          <Header />
          <Navigation />
          <div className={styles.content}>
            <About />
            <Skills />
            <Works />
            <Contact />
          </div>
        </div>
      </HashRouter>
    )
  }
}