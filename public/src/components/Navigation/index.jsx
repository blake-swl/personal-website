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
    document.querySelector('.icon')
    .addEventListener('click', this.handleDropDown);
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

    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }

  render() {
    return (
      <div id="navbar" className="navigation">
        <div className="nav-container">
          <div className="Navbar__Link Navbar__Link-brand">

          </div>
          <div className="Navbar__Link icon" style={{ color: 'grey' }}>
            <Icon icon={navicon} size={34} />
          </div>
          <nav className="navbar" >
            <div className="Navbar__Link">
              <a href="#home">home</a>
            </div>
            <div className="Navbar__Link">
              <a href="#about">about</a>
            </div>
            <div className="Navbar__Link">
              <a href="#skills">skills</a>
            </div>
            <div className="Navbar__Link">
              <a href="#portfolio">portfolio</a>
            </div>
            <div className="Navbar__Link">
              <a href="#contact">contact</a>
            </div>
          </nav>
        </div>
      </div>
    )
  }
};