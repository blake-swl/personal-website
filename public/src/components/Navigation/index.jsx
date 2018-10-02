import React, { Component } from 'react';
import './nav.scss';
import 'smoothscroll';

import { Icon } from 'react-icons-kit';
import {navicon} from 'react-icons-kit/fa/navicon';


export default class Navigation extends Component {
  constructor() {
    super();

    this.handleScroll = this.handleScroll.bind(this);
    this.handleDropDown = this.handleDropDown.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  
  handleScroll = () => {  
    const navbar = document.getElementById("navbar");

    const sticky = navbar.offsetTop;

    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

  handleDropDown = () => {
    const navs = document.querySelectorAll('.navbar');


    navs.forEach(nav => nav.classList.toggle('navbar_dropdown'));
  }

  render() {
    return (
      <div id="navbar">
        <nav className="navigation" >
          <div className="icon" style={{ color: '#FFFFFF' }}>
            <Icon icon={navicon} size={34} onClick={ () => this.handleDropDown()}/>
          </div>
          <ul className="navbar">
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
              <a href="#portfolio">portfolio</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
};