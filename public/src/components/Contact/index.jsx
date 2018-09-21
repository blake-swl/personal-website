import React, { Component } from 'react';
import './style.scss';
import Typed from 'react-typed';
import axios from 'axios';
import Email from '../Email';
import '../Email/email.scss';

export default class Contact extends Component {
  constructor() {
    super();

    this.state = {
      isHovering: false,
    };
    this.handleMouseHover = this.handleMouseHover.bind(this);
  }
  handleMouseHover() {
    this.setState(this.toggleHoverState);
    console.log('triggered')
  }
  
  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }
  // Note to self: conditionally render Typed when user scrolls to current component
  // phone number, linkedin and git will be hovers with links/numbers as afters

  render() {
    const hover = this.state.isHovering === false;

    return(
      <div className="container">
        <div className="banner">
          <Typed className="chat" strings={["^1000 LET'S HAVE A CHAT."]}
          typeSpeed={60}/>
        </div>
        <ul className="bottom">
          <li className="cards-item info">
            <h3>basic contact info</h3>
            <div className="cards-hover">
              <h2>(323) 482-0091</h2>
              <h2>seulwoolee93@gmail.com</h2>
            </div>
          </li>
          {/* <li className="cards-item mail">
            <Email />
          </li> */}
          <li className="cards-item mail" onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}>
            {hover ? <h1>send me an email</h1> : <Email className="mail"/>}
          </li>
          <li className="cards-item map">
            <h1>my location</h1>
          </li>
        </ul>
        <div className="footer">
          Footer
        </div>
      </div>
    )
  }
};
