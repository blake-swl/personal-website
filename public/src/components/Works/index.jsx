import React, { Component } from 'react';
import './works.scss';
import ZoomModal from '../Modals';
import amazon from '../../../dist/images/amazon.gif';
import airbnb from '../../../dist/images/airbnb.gif';
import homepage from '../../../dist/images/homepage.jpg';

// Icons
import { Icon } from 'react-icons-kit';
import {ic_zoom_in} from 'react-icons-kit/md/ic_zoom_in';
import {github} from 'react-icons-kit/icomoon/github'


export default class Portfolio extends Component {
  render() {
    const AmDesc = <ul className="description">
      <li>- Designed a scalable system architecture to handle minimum of 10M data points.</li>
      <li>- Identified slow query speeds and leveraged indexing to optimize queries by 1,320,000%.</li>
      <li>- Observed 12% error rate with Loader.io when handling 500 ops in stress-testing and introduced NGINX to reduce error rate to 0.8%.</li>
    </ul>;
    const AirDesc =  <ul className="description"> 
      <li>- Designed a functional mockup of Airbnb's listing main page.</li>
      <li>- Developed main page header & layout with modular components.</li>
      <li>- Built proxy servers to integrate teammates' modules into single, cohesive listing replica.</li>
      <li>- Utilized Docker to deploy final build on AWS EC2.</li>
    </ul>;
    const pwDesc =  <ul className="description">
      <li>- Designed this current website from ground up using modular components.</li>
      <li>- Dynamically responsive to different viewing formats.</li>
      <li>- Integrated Google Maps API to present my current living location.</li>
      <li>- Leveraged SMTP server to send emails directly from React component.</li>
    </ul>
    return (
      <div id="portfolio">
        <h1>My latest projects</h1>
        <div className="works">
          <div className="amazon">
            <div className="fade">
              <div className="btns">
                <ZoomModal content={amazon} 
                subtitle={AmDesc}/>
                <a className="code" href="https://github.com/HRLA23WhiteWalkers/MainPage">
                  <Icon icon={github} size={30}/>
                </a>
              </div>
              <div className="slideUp">
                <h3>AMAZON PRODUCT SYSTEM DESIGN</h3>
              </div>
            </div>
          </div>
          <div className="airbnb">
            <div className="fade">
              <div className="btns">
                <ZoomModal content={airbnb} 
                subtitle={AirDesc}/>
                <a className="code" href="https://github.com/HRLA23WhiteWalkers/MainPage">
                  <Icon icon={github} size={30}/>
                </a>
              </div>
              <div className="slideUp">
                <h3>AIRBNB LISTING PAGE</h3>
              </div>
            </div>
          </div>
          <div className="homepage">
            <div className="fade">
              <div className="btns">
                <ZoomModal subtitle={pwDesc}/>
                <a className="code" href="https://github.com/blake-swl/personal-website">
                 <Icon icon={github} size={30}/>
                </a>
              </div>
              <div className="slideUp">
                <h3>CURRENTLY VIEWING</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
