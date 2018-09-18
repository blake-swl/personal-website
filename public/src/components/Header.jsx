import React from 'react';
import styles from '../../dist/styles/styles.css';
import Typed from 'react-typed';

const Header = () => {
  return (
   <div className={styles.header}>
     <div className={styles.position}>
       <Typed strings={['^1000 Full-Stack Developer.']}
        typeSpeed={80} />
     </div>
     <div className={styles.name}>
       <h3>Blake S Lee</h3>
     </div>
     <div className={styles.btn}>
       <button className={styles.contact}>contact</button>
       <button className={styles.resume}>resume</button>
       <button className={styles.github}>github</button>
       <button className={styles.linkedin}>linkedin</button>
     </div>
   </div>
  )
};

export default Header;