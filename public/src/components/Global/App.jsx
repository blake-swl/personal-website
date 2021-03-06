
import React, { Component } from 'react';
import './global.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'smoothscroll';

// Icons
import { Icon } from 'react-icons-kit';
import {ic_expand_less} from 'react-icons-kit/md/ic_expand_less';

import Header from '../Header/index';
import Navigation from '../Navigation';
import About from '../About';
import Skills from '../Skills';
import Portfolio from '../Works';
import Contact from '../Contact';

// Preload image


AOS.init();
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 600, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


export default class App extends Component  {
  constructor() {
    super();

    // this.scrollFunction = this.scrollFunction.bind(this);
    // this.topFunction = this.topFunction.bind(this);
  }
  // componentDidMount() {
  //   window.onscroll = () => this.scrollFunction();
  // }

  // Back to Top
  // scrollFunction = () => {
  //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //       document.getElementById("myBtn").style.display = "block";
  //   } else {
  //       document.getElementById("myBtn").style.display = "none";
  //   }
  // }
  // topFunction = () => {
  //   document.body.scrollTop = 0; // For Safari
  //   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  // }
  render() {
    return(
      <div id="wrapper">
        {/* ...Loading */}
       
        <Navigation />
        <Header />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
      </div>
    )
  }
};