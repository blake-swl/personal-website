import React, { Component } from 'react';
import './about.scss';
import coding from '../../../dist/images/clement-h-544786-unsplash.jpg';

export default class About extends Component {
  render () {
    return(
      <div className="about">
        <div className="philosophy">
          <p>My philosophy is to leverage technology 
            to build functional, yet simplistically elegant 
            applications that integrate cutting edge technology 
            with traditional design principles. </p>
        </div>
        <div className="passion">
          <div className="profilePic">
            <img src={coding} alt=""/>
          </div>
          <div className="myself">
            <h3>My passion for coding</h3>
            <p>Palette, brush, canvas. Keyboard, mouse, screen. I can never forget what it first felt like to write something in a static HTML page and with a click of a button, have it generate on screen. I can never forget what it felt like to tweak a few elements on CSS to change the entire layout and design of my page.</p>
            <br/>
            <p>I can also never forget what it felt like to spend countless hours trying to fix a bug, learning React, reading through Postgres documentation, correctly routing every endpoint to generate a cohesive product. But I can also never forget the addictive exhilaration I felt from the satisfaction of making progress and break through. I was hooked.</p>
            <br/>
            <p>Software engineering is my craft, and the tools I have are my instruments of passion I exert on the screen that is my canvas. My passion for this craft keeps me innovating and learning new technologies to be the best software engineer I can be.
            </p>
          </div>
        </div>
        <div className="gallery">

        </div>
      </div>
    )
  }
}