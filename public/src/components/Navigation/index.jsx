import React, { Component } from 'react';
import './nav.scss';
import 'smoothscroll';

import { Icon } from 'react-icons-kit';
import {navicon} from 'react-icons-kit/fa/navicon';



export default class Navigation extends Component {
  constructor() {
    super();


    // this.scrollFunction = this.scrollFunction.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleDropDown = this.handleDropDown.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    document.querySelector('.icon').addEventListener('click', this.handleDropDown);
  }
  
  // Sticky Nav
  handleScroll = () => {  
    const navbar = document.getElementById("navbar");

    const sticky = navbar.offsetTop;

    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
  // DropDown
  handleDropDown = () => {
    const navs = document.querySelectorAll('.navbar');
    navs.forEach(nav => nav.classList.toggle('navbar_dropdown'));
  }
  // // Back to Top
  // scrollFunction = () => {
  //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //       document.getElementById("myBtn").style.display = "block";
  //   } else {
  //       document.getElementById("myBtn").style.display = "none";
  //   }
  // }


  render() {
    return (
      <div id="navbar">
        <div className="navigation" >
          <div className="icon" style={{ color: '#2E5060' }}>
            <Icon icon={navicon} size={25}/>
          </div>
          <div className="nav-drop">
            <ul className="navbar">
              <li className="nav-item">
                <a href="#home">home</a>
              </li>
              <li className="nav-item">
                <a href="#about">about</a>
              </li>
              <li className="nav-item">
                <a href="#portfolio">portfolio</a>
              </li>
              <li className="nav-item">
                <a href="#skills">skills</a>
              </li>
              <li className="nav-item">
                <a href="#contact">contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
};
