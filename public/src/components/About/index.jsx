import React from 'react';
import './about.scss';

// Icons
import { Icon } from 'react-icons-kit';
import {ic_code} from 'react-icons-kit/md/ic_code';
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right';
import {ic_keyboard_arrow_left} from 'react-icons-kit/md/ic_keyboard_arrow_left';

// pictures
const typing =  'http://d2genp9fhbycca.cloudfront.net/typing.jpg';
const sf = 'http://d2genp9fhbycca.cloudfront.net/sftrip.jpg';
const dodgers =  'http://d2genp9fhbycca.cloudfront.net/dodgers.jpg';
const grad = 'http://d2genp9fhbycca.cloudfront.net/grad.jpg';
const group2 = 'http://d2genp9fhbycca.cloudfront.net/group2.jpg';
const beach = 'http://d2genp9fhbycca.cloudfront.net/beach1.jpg';
const guitar = 'http://d2genp9fhbycca.cloudfront.net/guitar.jpg';
const family = 'http://d2genp9fhbycca.cloudfront.net/family.jpg';
const friends = 'http://d2genp9fhbycca.cloudfront.net/friends1.jpg';

        {/* <p>My philosophy is to leverage technology 
          to build functional, yet simplistically elegant 
          applications that integrate cutting edge technology 
          with traditional design principles. </p> */}

const About = () => {
  return(
    <div id="about">
      <div className="tag" >
        <p>I'm a full-stack engineer that is passionate about developing real world applications with clean, maintainable code, with an emphasis in front-end development.</p>
      </div>
      <div className="about-top">
        <div className="about-pic">
          <img src={typing} />
        </div>
        <div className="narrative" >
          <h3 data-aos="fade-up">About Me</h3>
          <div className="scroll-x">
            <div className="card objective" data-aos="fade-up">
              <h4>Objective</h4>
              <p>Creative and agile problem solver, always seeking opportunities to join a group of engineers to develop practical applications on a forefront of technical innovation and user-centric design. Always seeking improvement, I embrace challenges that push me to think outside the box. Currently expanding both breath and depth of web development knowledge by increasing React expertise and learning server side languages such as GoLang. I bring positive energy and sharp communication skills to develop highly scalable React and Node full stack applications.</p>
              <div style={{color: '#D05353'}}>
                <Icon icon={ic_keyboard_arrow_right} className="cues" size={40}/>
              </div>
            </div>
            <br/>
            <div className="card whatIdo" data-aos="fade-up"> 
              <h4>What I do</h4>
              <p>Full stack engineer specializing in front-end development, I leverage technologies such as React and Node to build highly responsive yet simplistically elegant applications that blend functionality with traditional design principles. Foundationally strong in JavaScript, RESTful API design, and database schemas, I adapt swiftly to new interfaces and workflows. I look forward to bringing my strengths and expertise to any team or culture.</p>
              <div style={{color: '#D05353'}}>
                <Icon icon={ic_code} className="cues" size={40}/>
              </div>
            </div>
            <br/>
            <div className="card philosophy" data-aos="fade-up">
              <h4>My Philosophy</h4>
              <p>Detail oriented, I get excited about brainstorming ideas of user centric UI/UX design that naturally intuit the users. Obsessively disciplined, I get delighted in cracking coding challenges and refactoring for optimization. Always seeking to get better, I look to challenge others by upholding good coding practices and high standards of quality, while also seeking to be challenged in expanding the scope of my own thought processes. Software engineering is a craft of mine that keeps me pushing to innovate and learn new technologies to be the best software engineer I can be.</p>
              <div style={{color: '#D05353'}}>
                <Icon icon={ic_keyboard_arrow_left} className="cues" size={40}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className="blur">
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