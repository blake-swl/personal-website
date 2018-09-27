import React, { Component } from 'react';
import './nav.scss';
import { HashRouter, Route, NavLink } from 'react-router-dom';
import 'smoothscroll';

import About from '../About';
import Skills from '../Skills';
import Works from '../Works';
import Contact from '../Contact';
import Header from '../Header';

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
      <HashRouter>
        <div>
          <div id="navbar">
            <div className="navigation" >
                <ul className="navbar">
                  <li>
                    <NavLink to="/home">home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">about</NavLink>
                    {/* <a href="#about">about</a> */}
                  </li>
                  <li>
                    <NavLink to="/skills">skills</NavLink>
                    {/* <a href="#skills">skills</a> */}
                  </li>
                  <li>
                    <NavLink to="/portfolio">portfolio</NavLink>
                    {/* <a href="#works">works</a> */}
                  </li>
                  <li>
                    <NavLink to="/contact">contact</NavLink>
                    {/* <a href="#contact">contact</a> */}
                  </li>
                </ul>
              </div>
          </div>
          {/* <div className={styles.content}>
            <Route path="/" component={Header} />
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/works" component={Works} />
            <Route path="/contact" component={Contact} />

          </div> */}

        </div>
      </HashRouter>
    )
  }
}