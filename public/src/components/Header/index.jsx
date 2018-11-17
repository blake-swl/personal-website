import React, { Component } from 'react';
import './header.scss';
import Resume from '../../../dist/Resume/resume.pdf';

const Header = () => (
  <div id="home" className="header">
    <div className="header-layer">
      <div className="tagline">
        <h4>Connecting through code, design, & innovation.</h4>
        <div className="position">Blake S Lee</div>
        <div className="name">
          <h3>Software Engineer</h3>
        </div>
        <div className="btn">
          <a href="#contact" className="contact">contact</a>
          <a href={Resume} target="_blank" className="resume">resume</a>
          <a href="https://github.com/blake-swl" target="_blank" className="github">github</a>       {/* <button className={style.linkedin}>linkedin</button> */}
          <a href="https://www.linkedin.com/in/blake-lee-4bb35b121/" target="_blank" className="linkedin">linkedin</a>
        </div>
      </div>
    </div>
  </div>
);
export default Header;