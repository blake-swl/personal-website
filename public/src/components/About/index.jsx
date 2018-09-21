import React, { Component } from 'react';
import './style.scss';

export default class About extends Component {
  render () {
    return(
      <div className="about">
        <h1 className="me">About Me</h1>
        <p className="blah">I'm a full-stack engineer that is passionate in developing real world applications with clean, maintainable code, with an emphasis in front-end development.</p>
      </div>
    )
  }
}