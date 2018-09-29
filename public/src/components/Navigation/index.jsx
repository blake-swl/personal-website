import React, { Component } from 'react';
import './nav.scss';
import 'smoothscroll';

export default class Navigation extends Component {
  constructor() {
    super();

    this.handleScroll = this.handleScroll.bind(this);
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

  render() {
    return (
      <div id="navbar">
        <div className="navigation" >
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
        </div>
      </div>
    )
  }
};