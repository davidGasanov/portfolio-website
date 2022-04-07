import React from "react";
import styles from "./Navigation.module.css";


import { IoMenuOutline } from "react-icons/io5";

import Link from "react-scroll/modules/components/Link";

const index = ({ scrolled, togglePhoneMenu }) => {
  console.log("scrolled status: " + scrolled);
  return (
    <nav scrolled={scrolled.toString()} className={styles.navigation}>
      <IoMenuOutline onClick={()=>{togglePhoneMenu(true)}} className={styles.phoneMenuToggler} size={30} />
      <ul className={styles.desktopNavList}>
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
  );
};

export default index;
