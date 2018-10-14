import React from 'react';
import './about.scss';

// Icons
import { Icon } from 'react-icons-kit';
import {ic_code} from 'react-icons-kit/md/ic_code';
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right';
import {ic_keyboard_arrow_left} from 'react-icons-kit/md/ic_keyboard_arrow_left';

// pictures
import typing from '../../../dist/images/typing.jpg';
import sf from '../../../dist/images/sftrip.jpg';
import dodgers from '../../../dist/images/dodgers.jpg';
import grad from '../../../dist/images/grad.jpg';
import group2 from '../../../dist/images/group2.jpg';
import beach from '../../../dist/images/beach1.jpg';
import guitar from '../../../dist/images/guitar.jpg';
import family from '../../../dist/images/family.jpg';
import friends from '../../../dist/images/friends1.jpg';

        {/* <p>My philosophy is to leverage technology 
          to build functional, yet simplistically elegant 
          applications that integrate cutting edge technology 
          with traditional design principles. </p> */}

const About = () => {
  return(
    <div id="about">
      <div className="philosophy" >
        <p data-aos="fade-up">I'm a full-stack engineer that is passionate about developing real world applications with clean, maintainable code, with an emphasis in front-end development.</p>
      </div>
      <div className="passion" data-aos="fade-up">
        <div className="profilePic">
          <img src={typing} alt=""/>
        </div>
        <div className="narrative" data-aos="fade-up">
          <h3>About Me</h3>
          <div className="scroll-x">
            <div className="card">
              <h4>Objective</h4>
              {/* <p>This part is under construction! Please visit me again very soon :)</p> */}
              {/* <p>Palette, brush, canvas. Keyboard, mouse, screen. I can never forget what it first felt like to write something in a static HTML page and with a click of a button, have it render on screen. I can never forget what it felt like to tweak a few elements on CSS to change the entire layout and design of my page.</p> */}
              <p></p>
              <div style={{color: '#D05353'}}>
                <Icon icon={ic_keyboard_arrow_right} className="cues" size={40}/>
              </div>
            </div>
            <br/>
            <div className="card"> 
              <h4>What I do</h4>
              {/* <p>I can also never forget what it felt like to spend countless hours trying to fix a bug, learn React, read through Postgres documentation, correctly route every endpoint to generate a cohesive product. But I can also never forget the addictive exhilaration I felt from the satisfaction of making progress and break through.</p> */}
              <div style={{color: '#D05353'}}>
                <Icon icon={ic_code} className="cues" size={40}/>
              </div>
            </div>
            <br/>
            <div className="card">
              <h4>My Philosophy</h4>
              {/* <p>Software engineering is my craft, and coding is my brush stroke of passion I exert on the screen that is my canvas. My passion for this craft keeps me innovating and learning new technologies to be the best software engineer I can be. */}
              {/* </p> */}
              <div style={{color: '#D05353'}}>
                <Icon icon={ic_keyboard_arrow_left} className="cues" size={40}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className="blur">
            <div className="personal">
              <h1 data-aos="fade-up">Get to know me more</h1>
              <p data-aos="fade-up">Notorious coffee enthusiast, lover of nature, and LeBron James fanatic. I was born Seoul, South Korea but grew up as a curious kid wandering the picturesque streets of Saint Petersburg, Russia. Moving to Los Angeles, CA, I earned my bachelors at UCSB in psychology, wanting to pursue a career in pharmacy until dabbling in coding changed my life. </p>
            </div>
          <div className="flex">
            <ul className="pictures" data-aos="fade-up">
              <img src={grad} id="grad" className="card1 tablet1"/>
              <img src={family} id="family" className="card1 tablet1"/>
              <img src={dodgers} id="dodgers" className="card1 tablet1"/>
              <img src={sf} id="sf" className="card1 tablet1"/>
              <img src={friends} id="friends" className="card1 tablet2"/>
              <img src={guitar} id="guitar" className="card1 tablet2"/>
              <img src={group2} id="group2" className="card1 tablet2"/>
              <img src={beach} id="beach" className="card1 tablet2"/>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;