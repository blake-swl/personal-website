import React from 'react';
import './header.scss';
import Typed from 'react-typed';
import Resume from '../../../dist/Resume/blakeresume.pdf';

const Header = () => {
  return (
   <div id="home" className="header">
     <div className="header-layer">
       <div className="tagline">
         <h4>Building bridges through code, design, & innovation.</h4>
        <div className="position">
          <Typed strings={['^1000 Full-Stack Developer.']}
            typeSpeed={80} />
        </div>
        <div className="name">
          <h3>Blake S Lee</h3>
        </div>
        <div className="btn">
          <a href="#contact" className="contact">contact</a>
          <a href={Resume} target="_blank" className="resume">resume</a>
          <a href="https://github.com/blake-swl" className="github">github</a>       {/* <button className={style.linkedin}>linkedin</button> */}
          <a href="https://www.linkedin.com/in/blake-lee-4bb35b121/" className="linkedin">linkedin</a>
        </div>
       </div>
     </div>
   </div>
  )
};

export default Header;