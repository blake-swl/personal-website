import React, { Component } from 'react';
import './works.scss';
import airbnb from '../../../dist/images/airbnb.jpg';
import amazon from '../../../dist/images/amazon.jpg';
import homepage from '../../../dist/images/homepage.jpg';

export default class Works extends Component {
  render() {
    return(
      <div className="works">
        <h1>Works</h1>
          <div className="portfolio">
            {/* <div className="film"> */}
                <div className="amazon">

                  {/* <img src={amazon} className="film"/> */}
                  <h1>Amazon</h1>
                </div>
                <div className="airbnb">
                  {/* <img src={airbnb} className="film"/> */}
                  <h1>Airbnb</h1>
                </div>
                <div className="homepage">
                  {/* <img src={homepage} className="film"/> */}
                  <h1>homepage</h1>
                </div>
            {/* </div> */}
          </div>
      </div>
    )
  }
};

// create gif-able images
