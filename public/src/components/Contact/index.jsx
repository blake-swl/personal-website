import React from 'react';
import './contact.scss';
import 'babel-polyfill';
import EmailModal from '../Email/EmailModal';
import Resume from '../../../dist/Resume/resume.pdf';
import GoogleMapReact from 'google-map-react';


// Icons
import { Icon } from 'react-icons-kit';
import {location} from 'react-icons-kit/icomoon/location';
import {phone} from 'react-icons-kit/icomoon/phone';
import {ic_mail_outline} from 'react-icons-kit/md/ic_mail_outline';

const googleMaps = {
  center: {
    lat: 34.052235,
    lng: -118.243683
  },
  zoom: 10,
}
const KEY = process.env.API_KEY;

const Contact = () => {
  return (
    <div id="contact">
      <div className="banner">
        <div className="banner-layer" >
          <h3 data-aos="fade-up">Let's have a chat over coffee.</h3>
          <div className="chat" data-aos="fade-up">GET IN TOUCH</div>
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
      <div style={{height: '25vh', width: '100%', color: "#D05353"}} className="maps">
        <GoogleMapReact
          center={googleMaps.center}
          defaultZoom={googleMaps.zoom}
        >
        </GoogleMapReact>
      </div>
      <footer className="footer">
        <p className="closing-tag">Designed and developed by Blake Lee</p>
      </footer>

    </div>
  )
};
export default Contact;

