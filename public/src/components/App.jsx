import React, { Component } from 'react';
import styles from '../../dist/styles/styles.css'

import Header from './Header';
import Navigation from './Navigation';
import About from './About';
import Skills from './Skills';
import Works from './Works';
import Contact from './Contact';

export default class App extends Component {
  render() {
    return(
      <div className={styles.container}>
        App.js
        <Header />
        <Navigation />
        <About />
        <Skills />
        <Works />
        <Contact />
      </div>
    )
  }
}