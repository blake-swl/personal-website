import React, { Component } from 'react';
import './contact.scss';
import Typed from 'react-typed';
import axios from 'axios';
import Email from '../Email';
import '../Email/email.scss';
import key from '../../../../google.config';
import 'babel-polyfill';

export default class Contact extends Component {
  constructor() {
    super();

    this.state = {
      isHovering: false,
    };
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.initMap = this.initMap.bind(this);
  }
  // componentDidMount() {
  //   this.initMap();
  // }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
    console.log('triggered')
  }
  
  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  async initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 34.0749, lng: -118.3082},
      zoom: 8
    });
    // const call = await axios.post(`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`);
  }
  // Note to self: conditionally render Typed when user scrolls to current component
  // phone number, linkedin and git will be hovers with links/numbers as afters

  render() {
    const hover = this.state.isHovering === false;

    return(
      <div  id="contact" className="container">
        <div className="banner">
          <div className="layer">
            <h3>Let's build something together over a cup of coffee.</h3>
            <div className="chat">GET IN CONTACT.</div>
          </div>
        </div>
        <ul className="bottom">
          <li className="cards-item info">
            <h3>basic contact info.</h3>
            <br/>
            <p>I am open to freelance/contract positions.</p>
            <div className="cards-hover">
              <h2>(323) 482-0091</h2>
              <h2>seulwoolee93@gmail.com</h2>
            </div>
          </li>
          <li className="cards-item mail" onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}>
            {hover ? <h1>send me an email.</h1> : <Email className="cards-hover"/>}
          </li>
          <li className="cards-item map" id="map">
            <h1>my location.</h1>
          </li>
        </ul>
        <div className="footer">
          Footer
        </div>
      </div>
    )
  }
};
