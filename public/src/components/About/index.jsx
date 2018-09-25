import React from 'react';
import './about.scss';

// pictures
import coding from '../../../dist/images/clement-h-544786-unsplash.jpg';
import sf from '../../../dist/images/sf.jpg';
import nancy from '../../../dist/images/nancy.jpg';
import dodgers from '../../../dist/images/dodgers.jpg';
import grad from '../../../dist/images/grad.jpg';
import group2 from '../../../dist/images/group2.jpg';
import beach from '../../../dist/images/beach.jpg';
import bball from '../../../dist/images/Basketball.jpg';
import guitar from '../../../dist/images/guitar.jpg'


const About = () => {
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
        <div className="narrative">
          <h3>My passion for coding</h3>
          <p>Palette, brush, canvas. Keyboard, mouse, screen. I can never forget what it first felt like to write something in a static HTML page and with a click of a button, have it generate on screen. I can never forget what it felt like to tweak a few elements on CSS to change the entire layout and design of my page.</p>
          <br/>
          <p>I can also never forget what it felt like to spend countless hours trying to fix a bug, learning React, reading through Postgres documentation, correctly routing every endpoint to generate a cohesive product. But I can also never forget the addictive exhilaration I felt from the satisfaction of making progress and break through.</p>
          <br/>
          <p>Software engineering is my craft, and coding is my brush stroke of passion I exert on the screen that is my canvas. My passion for this craft keeps me innovating and learning new technologies to be the best software engineer I can be.
          </p>
        </div>
      </div>
      <div className="gallery">
        <div className="blur">
            <div className="personal">
              <h1>Get to know me</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur suscipit dictum. Morbi quis turpis aliquam sem dignissim ornare. Sed aliquam dui ex, sed scelerisque dolor vehicula sed. Ut consequat libero nibh, quis tempor erat aliquam non. Cras egestas odio a mi placerat, imperdiet placerat ipsum ornare. Phasellus et mattis sapien. Suspendisse imperdiet massa nulla, quis mattis magna elementum malesuada. Mauris venenatis purus lorem, et ornare erat egestas id. Pellentesque molestie, leo sed tincidunt viverra, nibh erat semper sapien, eget scelerisque enim leo non lorem. Nam nec lobortis ipsum.</p>
            </div>
          <div className="flex">
            <div className="pictures">
              <img src={grad} className="grad"/>
              <img src={nancy} className="nancy"/>
              <img src={dodgers} className="dodgers"/>
              <img src={sf} className="sf"/>
              <img src={group2} className="group2"/>
              <img src={beach} className="beach"/>
              <img src={bball} className="bball"/>
              <img src={guitar} className="guitar"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;