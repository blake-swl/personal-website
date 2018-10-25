import React, { Component } from 'react';
import './header.scss';
import Resume from '../../../dist/Resume/updatedresume.pdf';

// Icons
import { Icon } from 'react-icons-kit';
import {ic_expand_less} from 'react-icons-kit/md/ic_expand_less';

export default class Header extends Component{
  constructor() {
    super();
    
    // this.scrollFunction = this.scrollFunction.bind(this);
  }
  // componentDidMount() {
    // window.smoothScroll('#');
    // window.onscroll = () => this.scrollFunction();
  // }
  // Back to Top
  // scrollFunction = () => {
  //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //       document.getElementById("myBtn").style.display = "block";
  //   } else {
  //       document.getElementById("myBtn").style.display = "none";
  //   }
  // }

   render() {
     return (
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
             <a href="https://github.com/blake-swl" className="github">github</a>       {/* <button className={style.linkedin}>linkedin</button> */}
             <a href="https://www.linkedin.com/in/blake-lee-4bb35b121/" className="linkedin">linkedin</a>
           </div>
          </div>
        </div>
        {/* <a href="#" id="myBtn" title="Go to top">
          <Icon icon={ic_expand_less} size={30}/>
        </a> */}
      </div>
     )
   }
};
