import React from 'react';
import './works.scss';
import ZoomModal from '../Modals';
import LazyLoad from 'react-lazyload';


import amazon from '../../../dist/images/amazon.gif';
import amazonImg from '../../../dist/images/Amazon.jpg';
import airbnb from '../../../dist/images/airbnb.gif';
import airbnbImg from '../../../dist/images/airbnb.jpg';
import homepage from '../../../dist/images/homepage.gif';
import homepageImg from '../../../dist/images/new.jpg';
import nishi from '../../../dist/images/nishi.png';
import yip from '../../../dist/images/yippido.png'

// Icons
import { Icon } from 'react-icons-kit';
import {ic_zoom_in} from 'react-icons-kit/md/ic_zoom_in';
import {github} from 'react-icons-kit/icomoon/github';
import {ic_code} from 'react-icons-kit/md/ic_code';
import {ic_link} from 'react-icons-kit/md/ic_link'


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
const yipDesc = <ul className="description">
  <li>- Developed dynamically rendered components for eCommerce platform using React.</li>
  <li>- Implemented functional programming principles for reusable, testable, efficient code when necessary.</li>
  {/* <li>- Built </li> */}
</ul>
const nishiDesc = <ul className="description">
  <li>- Launched my own business in web design and development with Nishi Restaurant as one of my partners.</li>
  <li>- Designed and development digital media such as websites and digital menu boards to clients' specifications and requirements.</li>
</ul>
const AmStack = <div>STACK: [Node, Postgres, Nginx, AWS]</div>;
const AirStack = <div>STACK: [React, Node, CSS modules, Mongo]</div>;
const HoStack = <div>STACK: [React, Node, SASS]</div>;
const YipStack = <div>STACK: [React, Redux, SASS, React-router, Bootstrap, Node]</div>
const nishiStack = <div>STACK: [React, Node, SASS, Adobe Illustrator]</div>

const Portfolio = () => (
  <div id="portfolio">
    <h1 className="works-title" data-aos="fade-up">-Portfolio-</h1>
    <LazyLoad offset={1000} >
      <div className="works" data-aos="fade-up">
        <div className="work-item homepage" data-aos="fade-up">
          <img src={homepageImg} alt=""/>
          <div className="fade" onClick={''}>
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
        <div className="work-item homepage" data-aos="fade-up">
          <img src={yip} alt=""/>
          <div className="fade" onClick={''}>
            <div className="btns">
              <ZoomModal subtitle={yipDesc} className="icons"
              images={yip}
              components={YipStack}
              buttons={<Icon icon={ic_zoom_in} size={40}/>}
              />
              <a className="code tooltip" target="_blank" href="https://github.com/danieljoonkimm/simpleReactApp">
                <span className="tooltiptext">View code</span>
                <Icon icon={github} size={30}/>
              </a>
            </div>
            <div className="slideUp">
              <h3>YIPPIDO (Currently working here)</h3>
            </div>
          </div>
        </div>
        <div className="work-item homepage" data-aos="fade-up">
          <img src={nishi} alt=""/>
          <div className="fade" onClick={''}>
            <div className="btns">
              <ZoomModal subtitle={nishiDesc} className="icons"
              images={nishi}
              components={nishiStack}
              buttons={<Icon icon={ic_zoom_in} size={40}/>}
              />
              <a className="code tooltip" target="_blank" href="https://www.nishipokeramen.com/">
                <span className="tooltiptext">Visit website</span>
                <Icon icon={ic_link} size={30}/>
              </a>
            </div>
            <div className="slideUp">
              <h3>Nishi</h3>
            </div>
          </div>
        </div>
        <div className="work-item amazon" data-aos="fade-up">
          <img src={amazonImg} alt=""/>
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
          <img src={airbnbImg} alt=""/>
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
    </LazyLoad>
    <div style={{color: "#062F4f"}}>
      <Icon icon={ic_code} size={40} className="works-arrow"/>
    </div>
  </div>
);
export default Portfolio;

