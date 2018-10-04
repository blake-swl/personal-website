import React from 'react';
import './works.scss';
import Launcher from '../Modals/Launcher/Launcher';
import amazon from '../../../dist/images/amazon.jpg';
import airbnb from '../../../dist/images/airbnb.jpg';
import homepage from '../../../dist/images/homepage.jpg';

const Portfolio = (props) => (
  <div id="portfolio">
    <Launcher className="airbnb" buttonLabel="test">
      <img src={amazon} alt=""/>
    </Launcher>
  </div>
);

export default Portfolio;















// export default class Portfolio extends Component {
//   constructor() {
//     super();

//   }
//   handleModal() {
//     console.log('button clicked');
//   }
//   render() {
//     return (
//       <div id="portfolio">
//         <h1>My latest projects</h1>
//         <div className="works">
//           <div className="amazon">
//             <img src={amazon} alt=""/>
//             <div className="fade">
//               <div className="btns">
//                 <button className="zoom">ZOOM</button>
//               </div>
//               <div className="slideUp">
//                 <h3>AMAZON PRODUCT SYSTEM DESIGN</h3>
//               </div>
//             </div>
//           </div>
//           <div className="airbnb">
//             <div className="fade">
//               <h3>AIRBNB LISTING PAGE</h3>
//               <div className="btns">
//                 <button className="zoom" onClick={() => this.handleModal()}>ZOOM</button>
//                 <a className="code" href="https://github.com/HRLA23WhiteWalkers/MainPage">VIEW CODE</a>
//               </div>
//             </div>
//           </div>
//           <div className="homepage">
//             <div className="fade">
//               <h3>PERSONAL WEBSITE</h3>
//               <div className="btns">
//                 <button className="zoom">ZOOM</button>
//                 <a  className="code" href="https://github.com/blake-swl/personal-website">VIEW CODE</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// };














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

