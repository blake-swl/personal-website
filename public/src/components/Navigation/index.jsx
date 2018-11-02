import React, { Component } from 'react';
import './nav.scss';
import 'smoothscroll';
import HamburgerMenu from 'react-hamburger-menu';

import { Icon } from 'react-icons-kit';
import {navicon} from 'react-icons-kit/fa/navicon';



export default class Navigation extends Component {
  constructor() {
    super();

    this.state = { open: false,  }

    this.handleScroll = this.handleScroll.bind(this);
    this.handleDropDown = this.handleDropDown.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    document.querySelector('.icon').addEventListener('click', this.handleDropDown);
  }
  
  // Sticky Nav
  handleScroll = () => {  
    const navbar = document.getElementById("nav");

    const sticky = navbar.offsetTop;

    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
  // DropDown
  // handleDropDown = () => {
  //   const navs = document.querySelectorAll('.nav-item');
  //   navs.forEach(nav => nav.classList.toggle(this.state.open));
  // }
  handleDropDown = () => {
    const navs = document.getElementById('navbar');
    if (!this.state.open) {
      navs.classList.add("nav-list");
    } else if (this.state.open) {
      navs.classList.remove("nav-con");
    }
  }
  // Hamburger
  handleClick() {
    this.setState({
      open: !this.state.open
    });
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
      <div className="nav" id="nav">
        <div className="nav-left">
          <div className="logo"><a href="#">BL</a></div>
        </div>
        <div className="navbar">
          <div>
            <div className="icon">
              <HamburgerMenu
                isOpen={this.state.open}
                menuClicked={this.handleClick.bind(this)}
                width={18}
                height={15}
                strokeWidth={3}
                rotate={0}
                color='#062F4f'
                borderRadius={0}
                animationDuration={0.5}
              />
            </div>
            <ol className="nav-con" id="navbar">
              <li className="nav-item"><a className="animated pulse" href="#home">home</a></li>
              <li className="nav-item"><a href="#about">about</a></li>
              <li className="nav-item"><a href="#portfolio">portfolio</a></li>
              <li className="nav-item"><a href="#skills">skills</a></li>
              <li className="nav-item"><a href="#contact">contact</a></li>
            </ol>
          </div>
        </div>
      </div>
    )
  }
};