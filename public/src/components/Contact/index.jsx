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
        <h3>Let's have a chat over a cup of coffee.</h3>
        <div className="chat">GET IN CONTACT.</div>
      </div>
      <div className="bottom">
        <div className="cards-scroll">
          <div className="cards-item">
            <h3>basic contact info.</h3>
            <div className="info-icons">
              <div className="info-column">
                <Icon icon={phone} size={40} />
                <h2>(323) 482-0091</h2>
              </div>
              <div className="info-column">
                <Icon icon={ic_mail_outline} size={40} />
                <h2>seulwoolee93@gmail.com</h2>
              </div>
              <div className="info-column">
                <Icon icon={location} size={40} />
                <h2>Los Angeles, CA</h2>
              </div>
            </div>
          </div>
          <div className="cards-item">
            <h3>send me an email.</h3>
            <div className="cards-email">
              <EmailModal className="cards-button" open="WRITE EMAIL"/>
            </div>
          </div>
        </div>
      </div>
      <div className="la"></div>
      <div className="footer">
        <a href="https://www.facebook.com/blakeswlee">
          <Icon icon={facebookSquare} size={50} />
        </a>
        <a href="https://github.com/blake-swl">
          <Icon icon={github} size={50} />
        </a>
        <a href={Resume}>
          <Icon icon={rebel} size={50} />
        </a>
        <a href="https://www.linkedin.com/in/blake-lee-4bb35b121/">
          <Icon icon={linkedinSquare} size={50} />
        </a>
        <a href="https://www.instagram.com/blake.swl/">
          <Icon icon={instagram} size={50} />
        </a>
      </div>
    </div>
  )
};
export default Contact;

