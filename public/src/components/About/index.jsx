import React, { Component } from 'react';
import './about.scss';
import jumping from '../../../dist/images/IMG_0830.jpg';

export default class About extends Component {
  render () {
    return(
      <div className="about">
        <div className="jumping">
          {/* <img src={jumping} alt=""/> */}
        </div>
        <h1 className="me">About Me</h1>
        <p className="blah">I'm a full-stack engineer that is passionate in developing real world applications with clean, maintainable code, with an emphasis in front-end development.</p>
      </div>
    )
  }
}