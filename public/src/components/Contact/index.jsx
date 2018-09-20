import React, { Component } from 'react';
import './style.css';
import Typed from 'react-typed';
import axios from 'axios';
import Email from '../Email';
import '../Email/email.css';

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
          typeSpeed={80}/>
        </div>
        <ul className="bottom">
          <li className="info">
            <h1>basic contact info</h1>
          </li>

          <li className="gmail" onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}>
            {hover ? <h1>send me an email</h1> : <Email className="mail"/>}
          </li>
          {/* <Email /> */}
          <li className="map">my location</li>
        </ul>
        <div className="footer">
          Footer
        </div>
      </div>
    )
  }
};


// onMouseEnter={this.handleMouseHover}
//             onMouseLeave={this.handleMouseHover}>
          // {hover ? <div className={styles.email}>send me an email</div> : <Email/>}
  // render() {
  //   return (
  //     <div>
  //       <div
  //         onMouseEnter={this.handleMouseHover}
  //         onMouseLeave={this.handleMouseHover}
  //       >
  //         Hover Me
  //       </div>
        // {
        //   this.state.isHovering &&
        //   <div>
        //     Hovering right meow! 🐱
        //   </div>
        // }
  //     </div>
{/* <div className='parent'>
  <ul className='chidlOfParent'>
    <li>
      contact
    </li>

    <li>
      basic info 
    </li>

    <li>
      location
    </li>
  </ul>
</div>

childofParent {
  display: flex;
  flex-direction: 
} */}