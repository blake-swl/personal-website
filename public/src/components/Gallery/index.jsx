import React from 'react';
import './gallery.scss';

// pictures
const typing =  'https://d2genp9fhbycca.cloudfront.net/typing.jpg';
const sf = 'https://d2genp9fhbycca.cloudfront.net/sftrip.jpg';
const dodgers =  'https://d2genp9fhbycca.cloudfront.net/dodgers.jpg';
const grad = 'https://d2genp9fhbycca.cloudfront.net/grad.jpg';
const group2 = 'https://d2genp9fhbycca.cloudfront.net/group2.jpg';
const beach = 'https://d2genp9fhbycca.cloudfront.net/beach1.jpg';
const guitar = 'https://d2genp9fhbycca.cloudfront.net/guitar.jpg';
const family = 'https://d2genp9fhbycca.cloudfront.net/family.jpg';
const friends = 'https://d2genp9fhbycca.cloudfront.net/friends1.jpg';

const Gallery = () => (
  <div className="gallery">
    <div className="blur">
      <div className="flex">
        <ul className="pictures" data-aos="fade-up">
          <img src={grad} id="grad" className="card1 tablet1"/>
          <img src={family} id="family" className="card1 tablet1"/>
          <img src={dodgers} id="dodgers" className="card1 tablet1"/>
          <img src={sf} id="sf" className="card1 tablet1"/>
          {/* <img src={friends} id="friends" className="card1 tablet2"/>
          <img src={guitar} id="guitar" className="card1 tablet2"/>
          <img src={group2} id="group2" className="card1 tablet2"/>
          <img src={beach} id="beach" className="card1 tablet2"/> */}
        </ul>
      </div>
    </div>
  </div>
);

export default Gallery;