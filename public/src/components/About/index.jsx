import React from 'react';
import './about.scss';

// Icons
import { Icon } from 'react-icons-kit';
import {ic_code} from 'react-icons-kit/md/ic_code';
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right';
import {ic_keyboard_arrow_left} from 'react-icons-kit/md/ic_keyboard_arrow_left';

// pictures
const typing =  'https://d2genp9fhbycca.cloudfront.net/typing.jpg';

const About = () => {
  return(
    <div id="about">
      <div className="tag" >
        <article>Full-stack engineer that is passionate about developing real world applications with clean, maintainable code, with an emphasis in front-end development.</article>
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
              <article>Creative and agile problem solver, always seeking opportunities to join a group of engineers to develop practical applications on a forefront of technical innovation and user-centric design. Always seeking improvement, I embrace challenges that push me to think outside the box. Foundationally strong in JavaScript, RESTful API design, and database schemas, I adapt swiftly to new interfaces and workflows. I look forward to bringing my strengths and expertise to any team or culture.</article>
              <div style={{color: '#062F4f'}}>
                <Icon icon={ic_keyboard_arrow_right} className="cues" size={40}/>
              </div>
            </div>
            <br/>
            <div className="card whatIdo" data-aos="fade-up"> 
              <h4>What I do</h4>
              <article>Full stack engineer specializing in front-end development, I leverage technologies such as React and Node to build highly responsive yet simplistically elegant applications that blend functionality with traditional design principles. Currently expanding both breath and depth of web development knowledge by increasing React expertise and learning server side languages such as GoLang. I bring positive energy and sharp communication skills to develop highly scalable React and Node full stack applications.</article>
              <div style={{color: '#062F4f'}}>
                <Icon icon={ic_keyboard_arrow_left} className="cues" size={40}/>
              </div>
            </div>
            <br/>
            {/* <div className="card philosophy" data-aos="fade-up">
              <h4>My Philosophy</h4>
              <article>Detail oriented, I get excited about brainstorming ideas of user centric UI/UX design that naturally intuit the users. Obsessively disciplined, I get delighted in cracking coding challenges and refactoring for optimization. Always seeking to get better, I look to challenge others by upholding good coding practices and high standards of quality, while also seeking to be challenged in expanding the scope of my own thought processes. Software engineering is a craft of mine that keeps me pushing to innovate and learn new technologies to be the best software engineer I can be.</article>
              <div style={{color: '#062F4f'}}>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;