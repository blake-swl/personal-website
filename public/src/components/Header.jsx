import React from 'react';
import styles from '../../dist/styles/styles.css';

const Header = () => {
  return (
   <div className={styles.header}>
     <div className={styles.position}>
       <h1>Full-Stack Developer.</h1>
       <h3 className={styles.name}>Blake S Lee</h3>
     </div>
     <div className={styles.btn}>
       <button className={styles.contact}>contact</button>
       <button className={styles.resume}>resume</button>
     </div>
   </div>
  )
};

export default Header;