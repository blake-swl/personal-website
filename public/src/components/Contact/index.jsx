import React from 'react';
import './contact.scss';
import 'babel-polyfill';
import EmailModal from '../Email/EmailModal';
import Resume from '../../../dist/Resume/blakeresume.pdf';


// Icons
import { Icon } from 'react-icons-kit';
import {location} from 'react-icons-kit/icomoon/location';
import {phone} from 'react-icons-kit/icomoon/phone';
import {ic_mail_outline} from 'react-icons-kit/md/ic_mail_outline';
import {facebookSquare} from 'react-icons-kit/fa/facebookSquare';
import {linkedinSquare} from 'react-icons-kit/fa/linkedinSquare';
import {rebel} from 'react-icons-kit/fa/rebel';
import {github} from 'react-icons-kit/icomoon/github';
import {instagram} from 'react-icons-kit/fa/instagram';

const Contact = () => {
  return (
    <div id="contact">
      <div className="banner">
        <div className="banner-layer" >
          <h3 data-aos="fade-up">Let's have a chat over coffee.</h3>
          <div className="chat" data-aos="fade-up">GET IN CONTACT.</div>
        </div>
      </div>
      <div className="bottom">
        <div className="contact-info" data-aos="fade-up">
          <Icon icon={phone} size={40} />
          <div>(323) 482-0091</div>
        </div>
        <div className="contact-info" data-aos="fade-up">
          <Icon icon={ic_mail_outline} size={40} />
          <div>seulwoolee93@gmail.com</div>
        </div>
        <div className="contact-info" data-aos="fade-up">
          <Icon icon={location} size={40} />
          <div>Los Angeles, CA</div>
        </div>
          <br/>
          <EmailModal open="WRITE EMAIL NOW"/>
      </div>
      <div className="la">
        {/* <p>Notorious coffee enthusiast, lover of nature, and LeBron James fanatic.</p> */}
      </div>
      <footer className="footer">
        <a href="https://www.facebook.com/blakeswlee">
          <Icon icon={facebookSquare} size={50} />
        </a>
        <a href="https://github.com/blake-swl">
          <Icon icon={github} size={50} />
        </a>
        <a href={Resume} className="tooltip">
          <span className="tooltiptext">View resume</span>
          <Icon icon={rebel} size={50} />
        </a>
        <a href="https://www.linkedin.com/in/blake-lee-4bb35b121/">
          <Icon icon={linkedinSquare} size={50} />
        </a>
        <a href="https://www.instagram.com/blake.swl/">
          <Icon icon={instagram} size={50} />
        </a>
      </footer>
    </div>
  )
};
export default Contact;

