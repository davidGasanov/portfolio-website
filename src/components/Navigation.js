import React from "react";
import styles from './Navigation.module.css'

const Navigation = () => {
  return (
      <nav className={styles.navigation}>
        <h1 className={styles.devName}>BRAND NAME</h1>
        <ul className={styles.navList}>
          <li className="nav-link">HOME</li>
          <li className="nav-link">ABOUT</li>
          <li className="nav-link">WORK</li>
          <li className="nav-link">CONTACT</li>
        </ul>
      </nav>
  );
};

export default Navigation;
