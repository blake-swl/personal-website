import React, { Component } from 'react';
import styles from '../../dist/styles/styles.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export default class Navigation extends Component {
  render() {
    return (
      <div className={styles.navigation}>
        <ul className={styles.navbar}>
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#skills">skills</a>
          </li>
          <li>
            <a href="#works">works</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </div>
    )
  }
}