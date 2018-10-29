import React, { Component } from 'react';
import './nav.scss';
import 'smoothscroll';
import 'animate.css';
import { pulse } from 'react-animations';

import { Icon } from 'react-icons-kit';
import {navicon} from 'react-icons-kit/fa/navicon';

export default class Navigation extends Component {
  constructor() {
    super();


    // this.scrollFunction = this.scrollFunction.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
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
      <div className="navigation" id="nav">
        <nav className="nav">
          <div className="navbar">
            <div>
              <div className="icon" style={{ color: '#062F4f' }}>
                <Icon icon={navicon} size={25}/>
              </div>
              <ul className="nav-con">
                <li className="nav-item"><a className="animated pulse" href="#home">home</a></li>
                <li className="nav-item"><a href="#about">about</a></li>
                <li className="nav-item"><a href="#portfolio">portfolio</a></li>
                <li className="nav-item"><a href="#skills">skills</a></li>
                <li className="nav-item"><a href="#contact">contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
};
