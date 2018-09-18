import React, { Component } from 'react';
import styles from './style.css';

export default class About extends Component {
  render () {
    return(
      <div className={styles.about}>
        <h1 className={styles.me}>About Me</h1>
        <p className={styles.blah}>I'm a full-stack engineer that is passionate in developing real world applications with clean, maintainable code, with an emphasis in front-end development.</p>
      </div>
    )
  }
}