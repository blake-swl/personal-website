import React, { Component } from 'react';
import styles from './style.css';
import Typed from 'react-typed';
import axios from 'axios';
import Email from '../Email';

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
      <div className={styles.container}>
        <div className={styles.banner}>
          <Typed className={styles.chat} strings={["^1000 LET'S HAVE A CHAT."]}
          typeSpeed={80}/>
        </div>
        <div className={styles.bottom}>
          <div className={styles.info}>basic contact info</div>
          <a onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}>
          {hover ? <div className={styles.email}>send me an email</div> : <Email/>}
            </a>
          <div className={styles.map}>my location</div>
        </div>
        <div className={styles.footer}>
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