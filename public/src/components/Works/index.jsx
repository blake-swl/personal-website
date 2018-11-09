import React, { Component } from 'react';
import './works.scss';
import ZoomModal from '../Modals';
import amazon from '../../../dist/images/amazon.gif';
import airbnb from '../../../dist/images/airbnb.gif';
import homepage from '../../../dist/images/homepage.gif';

// Icons
import { Icon } from 'react-icons-kit';
import {ic_zoom_in} from 'react-icons-kit/md/ic_zoom_in';
import {github} from 'react-icons-kit/icomoon/github';
import {ic_code} from 'react-icons-kit/md/ic_code';


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
      <li>- Integrated Google Maps API to dynamically display current location.</li>
      <li>- Leveraged SMTP server to send emails directly from React component.</li>
    </ul>
    const AmStack = <div>STACK: [Node, Postgres, Nginx, AWS]</div>;
    const AirStack = <div>STACK: [React, Node, CSS modules, Mongo]</div>;
    const HoStack = <div>STACK: [React, Node, SASS]</div>;
    return (
      <div id="portfolio">
        <h1 className="works-title" data-aos="fade-up">-Portfolio-</h1>
        <div className="works" data-aos="fade-up">
        <div className="work-item homepage" data-aos="fade-up">
            <div className="fade">
              <div className="btns">
                <ZoomModal subtitle={pwDesc} className="icons"
                images={homepage}
                components={HoStack}
                buttons={<Icon icon={ic_zoom_in} size={40}/>}
                />
                <a className="code tooltip" target="_blank" href="https://github.com/blake-swl/personal-website">
                  <span className="tooltiptext">View code</span>
                 <Icon icon={github} size={30}/>
                </a>
              </div>
              <div className="slideUp">
                <h3>CURRENTLY VIEWING</h3>
              </div>
            </div>
          </div>
          <div className="work-item amazon" data-aos="fade-up">
            <div className="fade">
              <div className="btns">
                <ZoomModal images={amazon} className="icons"
                buttons={<Icon icon={ic_zoom_in} size={40}/>}
                components={AmStack}
                subtitle={AmDesc}/>
                <a className="code tooltip" target="_blank" href="https://github.com/Bacon-Icecream/FEC-Danny-L">
                  <span className="tooltiptext">View code</span>
                  <Icon icon={github} size={30}/>
                </a>
              </div>
              <div className="slideUp">
                <h3>AMAZON SYSTEM DESIGN</h3>
              </div>
            </div>
          </div>
          <div className="work-item airbnb" data-aos="fade-up">
            <div className="fade">
              <div className="btns">
                <ZoomModal images={airbnb} className="icons"
                buttons={<Icon icon={ic_zoom_in} size={40}/>}
                components={AirStack}
                subtitle={AirDesc}/>
                <a className="code tooltip" target="_blank" href="https://github.com/HRLA23WhiteWalkers/MainPage">
                  <span className="tooltiptext">View code</span>
                  <Icon icon={github} size={30}/>
                </a>
              </div>
              <div className="slideUp">
                <h3>AIRBNB LISTING PAGE</h3>
              </div>
            </div>
          </div>
        </div>
        <div style={{color: "#062F4f"}}>
          <Icon icon={ic_code} size={40} className="works-arrow"/>
        </div>
      </div>
    )
  }
};
