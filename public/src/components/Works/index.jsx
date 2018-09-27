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
            <div className="amazon">
              <div className="film">
                <h1>Amazon</h1>
              </div>
            </div>
            <div className="airbnb">
              {/* <img src={airbnb} className="film"/> */}
              <h1>Airbnb</h1>
            </div>
            <div className="homepage">
              {/* <img src={homepage} className="film"/> */}
              <h1>homepage</h1>
            </div>
          </div>
          <h1 className="illus">Illustration</h1>
          <div className="art">
            <div className="art1">
              <div className="black"></div>
            </div>
            <div className="art2"></div>
            <div className="art3"></div>
          </div>
      </div>
    )
  }
};

// create gif-able images
