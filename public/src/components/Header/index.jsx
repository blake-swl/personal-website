import React from 'react';
import styles from './style.css';
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
       <a className={styles.contact}>contact</a>
       <a className={styles.resume}>resume</a>
       <a href="https://github.com/blake-swl" className={styles.github}>github</a>       {/* <button className={styles.linkedin}>linkedin</button> */}
       <a href="https://www.linkedin.com/in/blake-lee-4bb35b121/" className={styles.linkedin}>linkedin</a>
     </div>
   </div>
  )
};

export default Header;