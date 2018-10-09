import React, { Component } from 'react';
import './contact.scss';
import axios from 'axios';
import Email from '../Email';
import '../Email/email.scss';
import key from '../../../../google.config';
import 'babel-polyfill';

// Icons
import { Icon } from 'react-icons-kit';
import {location} from 'react-icons-kit/icomoon/location';
import {phone} from 'react-icons-kit/icomoon/phone';
import {mail2} from 'react-icons-kit/icomoon/mail2';
import {send} from 'react-icons-kit/fa/send';
import {facebookSquare} from 'react-icons-kit/fa/facebookSquare';
import {linkedinSquare} from 'react-icons-kit/fa/linkedinSquare';
import {rebel} from 'react-icons-kit/fa/rebel';
import {github} from 'react-icons-kit/icomoon/github';
import {instagram} from 'react-icons-kit/fa/instagram';



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

  initMap() {
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
      <div  id="contact">
        <div className="banner">
          <h3>Let's have a chat over a cup of coffee.</h3>
          <div className="chat">GET IN CONTACT.</div>
        </div>
        <div className="bottom">
          <div className="cards-item info">
            <h3>basic contact info.</h3>
            <div className="info-icons">
              <Icon icon={location} size={40} />
              <h2>Los Angeles, CA</h2>

            </div>
          </div>
          {/* <div className="cards-hover">
            <h2>(323) 482-0091</h2>
            <h2>seulwoolee93@gmail.com</h2>
          </div> */}
          <div className="cards-item mail">send me an email.</div>
          {/* <div className="cards-item mail" onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}>
            {hover ? <h1>send me an email.</h1> : <Email className="cards-hover"/>}
          </div> */}
        </div>
        {/* </div> */}
        <div className="la">
        </div>
        <div className="footer">
          <a href="https://www.facebook.com/blakeswlee">
            <Icon icon={facebookSquare} size={50} />
          </a>
          <a href="https://github.com/blake-swl">
            <Icon icon={github} size={50} />
          </a>
          <a href="https://www.linkedin.com/in/blake-lee-4bb35b121/">
            <Icon icon={linkedinSquare} size={50} />
          </a>
          <a href="https://www.instagram.com/blake.swl/">
            <Icon icon={instagram} size={50} />
          </a>

        </div>
      </div>
      )
    }
  };

      //  <div id="contact">
      //   <div className="banner">
      //     <div className="layer">
      //       <h3>Let's have a chat over a cup of coffee.</h3>
      //       <div className="chat">GET IN CONTACT.</div>
      //     </div>
      //   </div>
      //   <div className="footer">

      //   </div>
      // </div>
  