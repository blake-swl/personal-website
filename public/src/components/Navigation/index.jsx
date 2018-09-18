import React, { Component } from 'react';
import styles from './style.css';
import { HashRouter, Route, NavLink } from 'react-router-dom';

// import About from './About';
// import Skills from './Skills';
// import Works from './Works';
// import Contact from './Contact';
// import Header from './Header';

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
      navbar.classList.add(`${styles.sticky}`)
    } else {
      navbar.classList.remove(`${styles.sticky}`);
    }
  }

  render() {
    return (
      <HashRouter>
        <div>
          <div id="navbar">
            <div className={styles.navigation} >
                <ul className={styles.navbar}>
                  <li>
                    <NavLink to="/about">about</NavLink>
                    {/* <a href="#about">about</a> */}
                  </li>
                  <li>
                    <NavLink to="/skills">skills</NavLink>
                    {/* <a href="#skills">skills</a> */}
                  </li>
                  <li>
                    <NavLink to="/works">works</NavLink>
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