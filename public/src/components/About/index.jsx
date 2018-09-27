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
              <h1>Get to know me more</h1>
              <p>   I’m a software engineer with a unique perspective and upbringing that is ready to give back and serve the community with my experiences, talents, and lessons.
Born in Seoul, Korea, I grew up in Saint Petersburg, Russia from the ages of two to 12, until I moved to Los Angeles, CA where I currently reside. Having lived in such distinct cultures I bring a nuanced approach to social interactions and strong communication skills to seamlessly blend and adapt to any culture. Furthermore, coming from a family of musicians and artists, I possess a keen eye for art and design. In college, I earned my bachelors in psychology at UCSB and pursued a career in pharmacology until dabbling in coding changed my life. I’m a notorious coffee enthusiast, lover of nature, Lebron James fanatic, and (hopefully) the best son to my loving parents.
</p>
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