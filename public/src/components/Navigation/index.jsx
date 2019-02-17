import React from 'react';
import './navbar.scss';
import 'smoothscroll';
import { slide as Menu } from 'react-burger-menu';


const Navigation = () => (
  <div className="nav" id="nav">
    <Menu left id="burger" pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
      <nav>
        <ol className="nav-con" id="navbar">
          <li><a className="bm-item-list" href="#home">home</a></li>
          <li><a className="bm-item-list" href="#about">about</a></li>
          <li><a className="bm-item-list" href="#portfolio">portfolio</a></li>
          <li><a className="bm-item-list" href="#skills">skills</a></li>
          <li><a className="bm-item-list" href="#contact">contact</a></li>
        </ol>
      </nav>
    </Menu>
    <div id="navbar-desktop">
      <nav className="navbar">
        <div className="nav-left">
          <div className="logo"><a href="#">BL</a></div>
        </div>
        <ol className="navbar-item" id="navbar">
          <li><a className="bm-item-list" href="#home">home</a></li>
          <li><a className="bm-item-list" href="#about">about</a></li>
          <li><a className="bm-item-list" href="#portfolio">portfolio</a></li>
          <li><a className="bm-item-list" href="#skills">skills</a></li>
          <li><a className="bm-item-list" href="#contact">contact</a></li>
        </ol>
      </nav>
    </div>
  </div>
);
export default Navigation;
