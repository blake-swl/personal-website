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

    // this.scrollFunction = this.scrollFunction.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleDropDown = this.handleDropDown.bind(this);
    // this.handleUnclick = this.handleUnclick.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    document.querySelector('.icon').addEventListener('click', this.handleDropDown);
    // window.setTimeout(this.handleClick(), 1000);
    this.handleUnclick();
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
  handleDropDown = () => {
    const navs = document.querySelectorAll('.navbar');
    navs.forEach(nav => nav.classList.toggle('dropdown'));
  }
  // Hamburger
  handleClick() {
    this.setState({
        open: !this.state.open
    });
  }
  handleUnclick() {
    if (this.state.open === true ) {
      // window.setTimeout( this.handleClick(), 1000)
      console.log('true')
    } else {
      console.log('false')
    }

  }
  // setTimeout() {
  //   this.handleClick(
  //     this.setState({
  //       open: false
  //     })
  //   ), 1000
  // }
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
              {/* <Icon icon={navicon} size={25}/> */}
              <HamburgerMenu
                isOpen={this.state.open}
                menuClicked={this.handleClick.bind(this)}
                menuUnclicked={this.handleUnclick.bind(this)}
                width={18}
                height={15}
                strokeWidth={3}
                rotate={0}
                color='#062F4f'
                borderRadius={0}
                animationDuration={0.5}
              />
            </div>
            <ol className="nav-con">
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