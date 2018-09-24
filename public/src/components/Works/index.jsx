import React, { Component } from 'react';
import './works.scss';
import airbnb from '../../../dist/images/airbnb.jpg';

export default class Works extends Component {
  render() {
    return(
      <div className="works">
        Works.jsx
        <img src={airbnb} alt="airbnb"/>
      </div>
    )
  }
}