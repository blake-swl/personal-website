import React, { Component } from 'react';
import './navbar.scss';
import 'smoothscroll';
import { slide as Menu } from 'react-burger-menu';


export default class Navigation extends Component {
  constructor() {
    super();

    this.state = {
      background: "none"
    }
    this.listenScrollEvent = this.listenScrollEvent.bind(this);
  }
  listenScrollEvent(e) {
    if (window.scrollY > 800) {
      this.setState({header: {background:'white', boxShadow: "0 0 3px rgba(0,0,0,.15)", transition: ".1s ease-in"}
    })
    } else {
      this.setState({header: {background: 'none', boxShadow: "none", transition: ".1s ease-in"}})
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }
  render() {
    return(
      <div className="nav" id="nav">
        <Menu left id="burger" pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
          <nav>
            <ol className="nav-con" id="navbar">
              <li><a className="bm-item-list" href="#home">home</a></li>
              <li><a className="bm-item-list" href="#about">about</a></li>
              <li><a className="bm-item-list" href="#portfolio">portfolio</a></li>
              {/* <li><a className="bm-item-list" href="#skills">skills</a></li> */}
              <li><a className="bm-item-list" href="#contact">contact</a></li>
            </ol>
          </nav>
        </Menu>
        <div id="navbar-desktop" style={this.state.header}>
          <nav className="navbar">
            <div className="nav-left">
              <div className="logo"><a href="#">BL</a></div>
            </div>
            <ol className="navbar-item" id="navbar">
              <li><a className="bm-item-list" href="#home">home</a></li>
              <li><a className="bm-item-list" href="#about">about</a></li>
              <li><a className="bm-item-list" href="#portfolio">portfolio</a></li>
              {/* <li><a className="bm-item-list" href="#skills">skills</a></li> */}
              <li><a className="bm-item-list" href="#contact">contact</a></li>
            </ol>
          </nav>
        </div>
      </div>
    )
  }
};
