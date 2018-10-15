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
      <div className="tag" >
        <p data-aos="fade-up">I'm a full-stack engineer that is passionate about developing real world applications with clean, maintainable code, with an emphasis in front-end development.</p>
      </div>
      <div className="passion" data-aos="fade-up">
        <div className="profilePic">
          <img src={typing} alt=""/>
        </div>
        <div className="narrative" >
          <h3>About Me</h3>
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
              <p>Full stack engineer specializing in front-end development, I leverage technologies such as React and Node to build highly responsive yet simplistically elegant applications that blend functionality with traditional design principles. Foundationally strong in JavaScript, RESTful API design, and database schemas, I swiftly adapt to new interfaces and challenges. I look forward to bringing my strengths and expertise to any team or culture.</p>
              <div style={{color: '#D05353'}}>
                <Icon icon={ic_code} className="cues" size={40}/>
              </div>
            </div>
            <br/>
            <div className="card philosophy" data-aos="fade-up">
              <h4>My Philosophy</h4>
              <p>Detail oriented, I get excited about brainstorming ideas of user centric UI/UX design that naturally intuits the user. Obsessively disciplined, I get delighted in cracking coding challenges and refactoring for optimization. Always seeking to get better, I look to challenge others by upholding high standards of quality while also seeking to be challenged in expanding the scope of my own thought processes. Software engineering is a craft of mine that keeps me innovating and learning new technologies to be the best software engineer I can be.</p>
              <div style={{color: '#D05353'}}>
                <Icon icon={ic_keyboard_arrow_left} className="cues" size={40}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className="blur">
            {/* <div className="personal">
              <h1 data-aos="fade-up">Get to know me more</h1>
              <p data-aos="fade-up">Notorious coffee enthusiast, lover of nature, and LeBron James fanatic. I was born Seoul, South Korea but grew up as a curious kid wandering the picturesque streets of Saint Petersburg, Russia. Moving to Los Angeles, CA, I earned my bachelors at UCSB in psychology, wanting to pursue a career in pharmacy until dabbling in coding changed my life. </p>
            </div> */}
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