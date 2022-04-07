import React from 'react'

import Link from "react-scroll/modules/components/Link";

import styles from "./Navigation.module.css";

function Phonemenu() {
  return (
    <nav className={styles.phoneMenu}>
        
        <ul className={styles.mobileNavList}>
        <li className={styles.navLink}>
          <Link smooth={true} duration={1000} to="home">
            Home
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link smooth={true} duration={1000} to="about">
            About
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link smooth={true} duration={1000} to="projects">
            Work
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link smooth={true} duration={1000} to="contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Phonemenu