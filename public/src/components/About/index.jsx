import React from 'react';
import './about.scss';

// pictures
import typing from '../../../dist/images/typing.jpg';
import sf from '../../../dist/images/sf.jpg';
import dodgers from '../../../dist/images/dodgers.jpg';
import grad from '../../../dist/images/grad.jpg';
import group2 from '../../../dist/images/group2.jpg';
import beach from '../../../dist/images/beach.jpg';
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
          <h3>My passion for coding</h3>
          <div className="scroll-x" data-aos="fade-left">
            <div className="card">
              <p>Palette, brush, canvas. Keyboard, mouse, screen. I can never forget what it first felt like to write something in a static HTML page and with a click of a button, have it render on screen. I can never forget what it felt like to tweak a few elements on CSS to change the entire layout and design of my page.</p>
            </div>
            <br/>
            <div className="card"> 
              <p>I can also never forget what it felt like to spend countless hours trying to fix a bug, learn React, read through Postgres documentation, correctly route every endpoint to generate a cohesive product. But I can also never forget the addictive exhilaration I felt from the satisfaction of making progress and break through.</p>
            </div>
            <br/>
            <div className="card">
              <p>Software engineering is my craft, and coding is my brush stroke of passion I exert on the screen that is my canvas. My passion for this craft keeps me innovating and learning new technologies to be the best software engineer I can be.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery" data-aos="fade-up">
        <div className="blur">
            <div className="personal">
              <h1 data-aos="fade-up">Get to know me more</h1>
              <p data-aos="fade-up">   I’m a software engineer with a unique perspective and upbringing that is ready to give back and serve the community with my experiences, talents, and lessons.
Born in Seoul, Korea, I grew up in Saint Petersburg, Russia from the ages of two to 12, until I moved to Los Angeles, CA where I currently reside. Having lived in such distinct cultures I bring a nuanced approach to social interactions and strong communication skills to seamlessly blend and adapt to any culture. Furthermore, coming from a family of musicians and artists, I possess a keen eye for art and design. At UCSB, I earned my bachelors in psychology and later pursued a career in pharmaceutical science until dabbling in coding changed my life. I’m a notorious coffee enthusiast, lover of nature, Lebron James fanatic, and (hopefully) the best son to my loving parents.
</p>
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
              {/* <div className="tablet"> */}

              {/* </div>
              <div className="tablet"> */}
              {/* </div> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;