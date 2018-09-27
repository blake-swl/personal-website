import React, { Component } from 'react';
import './works.scss';
import airbnb from '../../../dist/images/airbnb.jpg';
import amazon from '../../../dist/images/amazon.jpg';
import homepage from '../../../dist/images/homepage.jpg';

export default class Portfolio extends Component {
  render() {
    return (
      <div id="portfolio">
        <h1>Portfolio</h1>
        <div className="works">
          <div className="amazon">
            <div className="fade">
              <h3 className="head">Amazon Product System Design</h3>
              <h4 className="tech">[ React | Node | Postgres | AWS EC2 ]</h4>
              <ul className="description">
                <li>- Designed a scalable system architecture to handle minimum of 10M data points.</li>
                <li>- Identified slow query speeds and leveraged indexing to optimize queries by 1,320,000%.</li>
                <li>- Observed 12% error rate with Loader.io when handling 500 ops in stress-testing and introduced NGINX to reduce error rate to 0.8%.</li>
              </ul>
            </div>
          </div>
          <div className="airbnb">
            <div className="fade">
              <h3 className="head">Airbnb Listing Page</h3>
              <h4 className="tech">[ React | Node | CSS modules | MongoDB ]</h4>
              <ul className="description"> 
                <li>- Designed a functional mockup of Airbnb's listing main page.</li>
                <li>- Developed main page header & layout with modular components.</li>
                <li>- Built proxy servers to integrate teammates' modules into single, cohesive listing replica.</li>
                <li>- Utilized Docker to deploy final build on AWS EC2.</li>
              </ul>
            </div>
          </div>
          <div className="homepage">
            <div className="fade">
              <h3 className="head">Personal Website [this site!!]</h3>
              <h4 className="tech">[ React | SASS | Node | AWS EC2 ]</h4>
              <ul className="description">
                <li>- Designed this current website from ground up using modular components.</li>
                <li>- Dynamically responsive to different viewing formats.</li>
                <li>- Integrated Google Maps API to present my current living location.</li>
                <li>- Leveraged SMTP server to send emails directly from React component.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

// export default class Works extends Component {
//   render() {
//     return(
//       <div className="works">
//         <h1>Works</h1>
//           <div className="portfolio">
//             <div className="amazon">
//               <div className="film">
//                 <h1>Amazon</h1>
//               </div>
//             </div>
//             <div className="airbnb">
//               {/* <img src={airbnb} className="film"/> */}
//               <h1>Airbnb</h1>
//             </div>
//             <div className="homepage">
//               {/* <img src={homepage} className="film"/> */}
//               <h1>homepage</h1>
//             </div>
//           </div>
//           <h1 className="illus">Illustration</h1>
//           <div className="art">
//             <div className="art1">
//               <div className="black"></div>
//             </div>
//             <div className="art2"></div>
//             <div className="art3"></div>
//           </div>
//       </div>
//     )
//   }
// };

// create gif-able images
