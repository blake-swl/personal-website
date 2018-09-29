import React, { Component } from 'react';
import './works.scss';

export default class Portfolio extends Component {
  constructor() {
    super();


  }
  render() {
    return (
      <div id="portfolio">
        <h1>My latest projects</h1>
        <div className="works">
          <div className="amazon">
            <div className="fade">
              <h3>AMAZON PRODUCT SYSTEM DESIGN</h3>
              <div className="btns">
                <button>ZOOM</button>
                <button id="amazon">VIEW CODE</button>
              </div>
            </div>
          </div>
          <div className="airbnb">
            <div className="fade">
              <h3>AIRBNB LISTING PAGE</h3>
              <div className="btns">
                <button>ZOOM</button>
                <button id="airbnb">VIEW CODE</button>
              </div>
            </div>
          </div>
          <div className="homepage">
            <div className="fade">
              <h3>PERSONAL WEBSITE</h3>
              <div className="btns">
                <button>ZOOM</button>
                <button id="personal">VIEW CODE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};














// import React from 'react';
// import './works.scss';


// const Portfolio = () => {
//   return (
//     <div id="portfolio">
//       {/* <div className="background-layer"> */}
//         <h1>My latest projects</h1>
//         <div className="works">
//           <div className="amazon">
//             <div></div>
//             {/* <div className="fade">
//               <h3 className="head">Amazon Product System Design</h3>
//               <h4 className="tech">[ React | Node | Postgres | AWS EC2 ]</h4>
//               <ul className="description">
//                 <li>- Designed a scalable system architecture to handle minimum of 10M data points.</li>
//                 <li>- Identified slow query speeds and leveraged indexing to optimize queries by 1,320,000%.</li>
//                 <li>- Observed 12% error rate with Loader.io when handling 500 ops in stress-testing and introduced NGINX to reduce error rate to 0.8%.</li>
//               </ul>
//             </div> */}
//           </div>
//           <div className="airbnb">
//             {/* <div className="fade">
//               <h3 className="head">Airbnb Listing Page</h3>
//               <h4 className="tech">[ React | Node | CSS modules | MongoDB ]</h4>
//               <ul className="description"> 
//                 <li>- Designed a functional mockup of Airbnb's listing main page.</li>
//                 <li>- Developed main page header & layout with modular components.</li>
//                 <li>- Built proxy servers to integrate teammates' modules into single, cohesive listing replica.</li>
//                 <li>- Utilized Docker to deploy final build on AWS EC2.</li>
//               </ul>
//             </div> */}
//           </div>
//           <div className="homepage">
//             {/* <div className="fade">
//               <h3 className="head">Personal Website</h3>
//               <h4 className="tech">[ React | SASS | Node | AWS EC2 ]</h4>
//               <ul className="description">
//                 <li>- Designed this current website from ground up using modular components.</li>
//                 <li>- Dynamically responsive to different viewing formats.</li>
//                 <li>- Integrated Google Maps API to present my current living location.</li>
//                 <li>- Leveraged SMTP server to send emails directly from React component.</li>
//               </ul>
//             </div> */}
//           </div>
//         </div>
//       {/* </div> */}
//     </div>
//   )
// };
// export default Portfolio;

