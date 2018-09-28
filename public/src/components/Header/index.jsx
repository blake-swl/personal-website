import React from 'react';
import style from './header.scss';
import Typed from 'react-typed';

const Header = () => {
  return (
   <div id="home" className={style.header}>
     <div className={style.layer}>
       <div className={style.tagline}>
         <h4>Building bridges through code, design, & innovation.</h4>
        <div className={style.position}>
          <Typed strings={['^1000 Full-Stack Developer.']}
            typeSpeed={80} />
        </div>
        <div className={style.name}>
          <h3>Blake S Lee</h3>
        </div>
        <div className={style.btn}>
          <a className={style.contact}>contact</a>
          <a className={style.resume}>resume</a>
          <a href="https://github.com/blake-swl" className={style.github}>github</a>       {/* <button className={style.linkedin}>linkedin</button> */}
          <a href="https://www.linkedin.com/in/blake-lee-4bb35b121/" className={style.linkedin}>linkedin</a>
        </div>
       </div>
     </div>
   </div>
  )
};

export default Header;